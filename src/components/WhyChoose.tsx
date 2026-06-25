import { useReveal } from '../hooks/useReveal';
import { Heart, Award, Shield } from 'lucide-react';

const cards = [
  {
    icon: Heart,
    title: 'Compassion',
    body: 'Personalized companionship focused on dignity, respect, and meaningful connection.',
    gradient: 'from-pink-400 to-pink-500',
    light: 'bg-pink-50',
    border: 'border-pink-100',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-500',
  },
  {
    icon: Award,
    title: 'Experience',
    body: 'Over 10 years of caregiving experience supporting individuals with varying needs.',
    gradient: 'from-teal-400 to-teal-500',
    light: 'bg-teal-50',
    border: 'border-teal-100',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
  {
    icon: Shield,
    title: 'Peace of Mind',
    body: 'Helping families feel confident knowing their loved one has trusted companionship.',
    gradient: 'from-teal-300 to-pink-400',
    light: 'bg-gradient-to-br from-teal-50 to-pink-50',
    border: 'border-teal-100',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
];

export default function WhyChoose() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section id="why" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center mb-16">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-pink-50 text-pink-500 text-xs font-heading font-semibold tracking-wider uppercase">
            Why Choose
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-teal-800">
            Why Choose Candice?
          </h2>
          <p className="mt-4 font-body text-gray-500 max-w-lg mx-auto leading-relaxed">
            Exceptional care begins with exceptional character. Here's what sets Candice apart.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-pink-400 to-teal-400" />
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal reveal-delay-${i + 1} group relative rounded-3xl ${card.light} border ${card.border} p-8 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${card.gradient}`} />

              <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>

              <h3 className="font-heading font-bold text-xl text-teal-800 mb-3">
                {card.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed text-sm">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
