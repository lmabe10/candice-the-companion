import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t1 = setTimeout(() => textRef.current?.classList.add('visible'), 100);
    const t2 = setTimeout(() => imgRef.current?.classList.add('visible'), 300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-pink-50">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-100/40 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-pink-100/40 blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-8 lg:pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text */}
          <div
            ref={textRef}
            className="reveal flex-1 text-center lg:text-left"
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-heading font-semibold tracking-wider uppercase">
              Non-Medical Companion Care
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.15] text-teal-800 text-balance mb-6">
              Compassionate Companion Care{' '}
              <span className="text-pink-500">That Feels Like Family</span>
            </h1>
            <p className="font-body text-gray-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Helping seniors and individuals requiring assistance with activities of daily living stay socially connected, active, and supported through compassionate companionship services in York Region and Simcoe County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 rounded-full bg-pink-500 text-white font-heading font-semibold text-base shadow-pink-glow hover:bg-pink-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                Contact Candice
              </button>
              <button
                onClick={scrollToAbout}
                className="px-8 py-4 rounded-full border-2 border-teal-400 text-teal-700 font-heading font-semibold text-base hover:bg-teal-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Photo */}
          <div
            ref={imgRef}
            className="reveal reveal-delay-2 flex-1 flex justify-center lg:justify-end relative"
          >
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-br from-teal-200/60 to-pink-200/60 blur-md" />
            </div>
            <div className="relative z-10">
              <div className="relative w-[300px] sm:w-[360px] lg:w-[400px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/Candice_Cards.png"
                  alt="Candice playing cards with a client, sharing a warm moment of companionship"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-card px-5 py-3 flex items-center gap-3 border border-teal-100">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3aafaa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm text-teal-800">Trusted Companion</div>
                  <div className="font-body text-xs text-gray-500">Fully Insured & Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue — below content on mobile, anchored at bottom on desktop */}
        <div
          className="mt-12 flex flex-col items-center gap-1 text-teal-400 animate-bounce cursor-pointer lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2 lg:mt-0"
          onClick={scrollToAbout}
        >
          <span className="font-body text-xs tracking-wider uppercase">Scroll</span>
          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
}
