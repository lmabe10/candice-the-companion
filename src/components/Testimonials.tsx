import { useState, useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Margaret T.',
    relation: 'Daughter of client',
    location: 'Newmarket, ON',
    text: 'Candice has been an absolute blessing for our family. Mom looks forward to every visit — she lights up when Candice arrives. Knowing she has such a caring, attentive companion gives our whole family peace of mind we didn\'t think was possible.',
    initials: 'MT',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    name: 'Robert & Susan L.',
    relation: 'Family of client',
    location: 'Barrie, ON',
    text: 'We were nervous about finding the right person for Dad, but Candice exceeded every expectation. She\'s professional, warm, and genuinely invested in his wellbeing. He\'s more social and engaged than he\'s been in years.',
    initials: 'RL',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    name: 'Dorothy M.',
    relation: 'Client',
    location: 'Aurora, ON',
    text: 'I was hesitant at first, but Candice quickly felt like a friend. She listens, she cares, and she makes my days so much brighter. I feel respected and valued every single visit. I can\'t recommend her highly enough.',
    initials: 'DM',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    name: 'James K.',
    relation: 'Son of client',
    location: 'Innisfil, ON',
    text: 'Candice brought our mother back to life. After Dad passed, Mom had withdrawn completely. Within a few weeks of Candice\'s visits, she was laughing again and getting out of the house. We are forever grateful.',
    initials: 'JK',
    color: 'bg-pink-100 text-pink-600',
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E8407A" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (dir: 1 | -1) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 220);
  };

  const goTo = (idx: number) => {
    if (animating || idx === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 220);
  };

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => go(1), 6000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [active, animating]);

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => go(1), 6000);
  };

  const t = testimonials[active];

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-pink-50 text-pink-500 text-xs font-heading font-semibold tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-teal-800">
            What Families Are Saying
          </h2>
          <p className="mt-4 font-body text-gray-500 max-w-lg mx-auto leading-relaxed">
            Hear from the families and individuals whose lives have been enriched through compassionate companionship.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-pink-400 to-teal-400" />
        </div>

        {/* Main card carousel */}
        <div className="reveal reveal-delay-1 max-w-3xl mx-auto">
          <div className="relative">
            {/* Decorative blobs — scoped to the card so they don't overlap nav controls */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-teal-50 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-pink-50 blur-2xl pointer-events-none" />

            <div
              className={`relative bg-gradient-to-br from-white to-teal-50 border border-teal-100 rounded-3xl shadow-card p-8 sm:p-12 transition-all duration-200 ${
                animating ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
              }`}
            >
            {/* Large quote icon */}
            <div className="absolute top-8 right-8 sm:top-10 sm:right-10 opacity-10">
              <Quote className="w-16 h-16 text-teal-600 fill-teal-600" />
            </div>

            {/* Stars */}
            <div className="mb-6">
              <StarRating />
            </div>

            {/* Quote text */}
            <blockquote className="font-body text-gray-700 text-lg sm:text-xl leading-relaxed italic mb-8">
              "{t.text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 ${t.color}`}>
                {t.initials}
              </div>
              <div>
                <div className="font-heading font-semibold text-teal-800">{t.name}</div>
                <div className="font-body text-gray-500 text-sm">{t.relation} &middot; {t.location}</div>
              </div>
            </div>
          </div>
          </div>

          {/* Prev / Next */}
          <div className="relative z-10 flex items-center justify-between mt-8">
            <button
              onClick={() => { go(-1); reset(); }}
              className="w-11 h-11 rounded-full border-2 border-teal-200 flex items-center justify-center text-teal-600 hover:border-teal-500 hover:bg-teal-50 transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { goTo(i); reset(); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? 'w-7 h-2.5 bg-pink-500'
                      : 'w-2.5 h-2.5 bg-teal-200 hover:bg-teal-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => { go(1); reset(); }}
              className="w-11 h-11 rounded-full border-2 border-teal-200 flex items-center justify-center text-teal-600 hover:border-teal-500 hover:bg-teal-50 transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
