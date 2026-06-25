interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL?: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string;
}

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
    return json({ error: 'Contact form is not configured.' }, 503);
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body.' }, 400);
  }

  if (body.website?.trim()) {
    return json({ ok: true });
  }

  const name = body.name?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const phone = body.phone?.trim() ?? '';
  const message = body.message?.trim() ?? '';

  if (!name || !email || !message) {
    return json({ error: 'Name, email, and message are required.' }, 400);
  }

  if (!isValidEmail(email)) {
    return json({ error: 'Please provide a valid email address.' }, 400);
  }

  if (name.length > 120 || email.length > 254 || phone.length > 40 || message.length > 5000) {
    return json({ error: 'One or more fields are too long.' }, 400);
  }

  const from = env.CONTACT_FROM_EMAIL?.trim() || 'Candice the Companion <onboarding@resend.dev>';
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || 'Not provided');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `New contact form message from ${name}`,
      html: `
        <h2>New message from candicethecompanion.com</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    }),
  });

  if (!response.ok) {
    console.error('Resend API error:', await response.text());
    return json({ error: 'Unable to send your message. Please try again later.' }, 502);
  }

  return json({ ok: true });
};
