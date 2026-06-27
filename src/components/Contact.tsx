import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Send, MapPin, Clock } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  website: string;
}

export default function Contact() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setErrorMessage(data.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('sent');
      setForm({ name: '', email: '', phone: '', message: '', website: '' });
    } catch {
      setErrorMessage('Unable to reach the server. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white font-body text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all duration-200';

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-br from-teal-50/70 via-white to-pink-50/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center mb-16">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-heading font-semibold tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-teal-800">
            Contact Candice
          </h2>
          <p className="mt-4 font-body text-gray-500 max-w-lg mx-auto leading-relaxed">
            Ready to learn more? Reach out today and let's talk about how I can support you or your loved one.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-teal-400 to-pink-400" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <div className="reveal reveal-delay-1 lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-teal-100 shadow-card p-8 space-y-7">
              <div>
                <h3 className="font-heading font-semibold text-teal-800 text-lg mb-1">Candice the Companion</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">
                  Professional companion care services tailored to your needs.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-teal-100 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-teal-800 text-sm mb-0.5">Service Area</div>
                  <div className="font-body text-gray-600 text-sm">York Region & Simcoe County</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-pink-100 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-teal-800 text-sm mb-0.5">Availability</div>
                  <div className="font-body text-gray-600 text-sm">Contact for scheduling details</div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-7 text-white">
              <p className="font-body italic text-teal-50 leading-relaxed text-sm">
                "Every individual deserves dignity, connection, and the opportunity to enjoy the best possible quality of life."
              </p>
              <p className="mt-4 font-heading font-semibold text-white text-sm">— Candice</p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2 lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-teal-100 shadow-card p-8 space-y-5"
            >
              {status === 'sent' ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3aafaa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-teal-800 text-xl mb-2">Message Sent!</h3>
                  <p className="font-body text-gray-500 text-sm">
                    Thank you for reaching out. Candice will be in touch with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 rounded-full border-2 border-teal-400 text-teal-700 font-heading font-semibold text-sm hover:bg-teal-50 transition-all duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-heading font-medium text-teal-800 text-xs mb-2 uppercase tracking-wide">
                        Full Name <span className="text-pink-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block font-heading font-medium text-teal-800 text-xs mb-2 uppercase tracking-wide">
                        Email <span className="text-pink-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-heading font-medium text-teal-800 text-xs mb-2 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(000) 000-0000"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block font-heading font-medium text-teal-800 text-xs mb-2 uppercase tracking-wide">
                      Message <span className="text-pink-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me a little about how I can help you or your loved one..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  {status === 'error' && (
                    <p className="rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 font-body text-sm text-pink-700">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-pink-500 text-white font-heading font-semibold text-base shadow-pink-glow hover:bg-pink-600 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="40" strokeDashoffset="10" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
