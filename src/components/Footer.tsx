export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/images/CTC_LOGO_TRANSPARENCY_FOR_WHITE_BG.png"
              alt="Candice the Companion"
              className="h-[5.5rem] md:h-[7rem] w-auto object-contain brightness-0 invert"
            />
            <div>
              <p className="font-heading font-semibold text-white text-base">Candice the Companion</p>
              <p className="font-body text-teal-300 text-sm mt-0.5">Serving York Region & Simcoe County</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="font-heading font-semibold text-teal-200 text-xs uppercase tracking-wider mb-1">Quick Links</p>
            {[
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Qualifications', href: '#qualifications' },
              { label: 'Who Is This For', href: '#who' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'Contact', href: '#contact' },
            ].map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-body text-teal-300 hover:text-white text-sm transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="font-body text-teal-300 text-sm text-center md:text-right max-w-xs leading-relaxed">
              Ready to get started? Reach out today and take the first step toward compassionate care.
            </p>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-3 rounded-full bg-pink-500 text-white font-heading font-semibold text-sm shadow-pink-glow hover:bg-pink-600 hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Candice
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-teal-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="font-body text-teal-400 text-sm">
            &copy; {year} Candice the Companion. All rights reserved.
          </p>
          <p className="font-body text-teal-500 text-xs">
            Non-Medical Companion Care | York Region & Simcoe County
          </p>
        </div>
      </div>
    </footer>
  );
}
