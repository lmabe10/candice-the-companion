import { useReveal } from '../hooks/useReveal';
import {
  Heart,
  MessageCircle,
  Spade,
  UtensilsCrossed,
  Footprints,
  Car,
  ShoppingCart,
  Smartphone,
  ClipboardCheck,
  Package,
  Sparkles,
  Check,
  X,
  Stethoscope,
  Pill,
  Bath,
} from 'lucide-react';

const servicesProvided = [
  { icon: Heart, label: 'Companionship visits' },
  { icon: MessageCircle, label: 'Conversation and social interaction' },
  { icon: Spade, label: 'Playing games/cards' },
  { icon: UtensilsCrossed, label: 'Light Meal Prep' },
  { icon: Footprints, label: 'Walks/light Exercise' },
  { icon: Car, label: 'Transportation to appointments (Including medical)' },
  { icon: ShoppingCart, label: 'Grocery trips' },
  { icon: Smartphone, label: 'Technology help' },
  { icon: ClipboardCheck, label: 'Check-in visits' },
  { icon: Package, label: 'Running errands' },
  { icon: Sparkles, label: 'Light house keeping/Laundry' },
];

const servicesNotProvided = [
  { icon: Stethoscope, label: 'Medical Services' },
  { icon: Pill, label: 'Administering of any medications' },
  { icon: Bath, label: 'Bathing or hygiene duties' },
  { icon: X, label: 'Bathroom Duties' },
];

export default function Services() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-gradient-to-br from-pink-50/40 via-white to-teal-50/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center mb-16">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-pink-50 text-pink-500 text-xs font-heading font-semibold tracking-wider uppercase">
            Services
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-teal-800">
            How I Can Help
          </h2>
          <p className="mt-4 font-body text-gray-500 max-w-lg mx-auto leading-relaxed">
            Non-medical companionship and everyday support to help your loved one stay independent at home.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-pink-400 to-teal-400" />
        </div>

        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="reveal reveal-delay-1 rounded-3xl bg-white border border-teal-100 shadow-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="font-heading font-bold text-xl text-teal-800">Services I Provide</h3>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {servicesProvided.map((service, i) => (
                <li
                  key={service.label}
                  className={`reveal reveal-delay-${Math.min(i + 1, 6)} group flex items-center gap-4 rounded-2xl px-4 py-3.5 border border-teal-50 bg-teal-50/40 hover:bg-teal-50 hover:border-teal-200 transition-all duration-300`}
                >
                  <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-white border border-teal-100 group-hover:border-teal-300 flex items-center justify-center transition-colors duration-300">
                    <service.icon className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="font-body text-teal-900 text-sm leading-snug">{service.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-delay-2 rounded-3xl bg-white border border-pink-100 shadow-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                <X className="w-5 h-5 text-pink-500" />
              </div>
              <h3 className="font-heading font-bold text-xl text-teal-800">Things I Do NOT Provide</h3>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {servicesNotProvided.map((service, i) => (
                <li
                  key={service.label}
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)} group flex items-center gap-4 rounded-2xl px-4 py-3.5 border border-pink-50 bg-pink-50/40 hover:bg-pink-50 hover:border-pink-200 transition-all duration-300`}
                >
                  <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-white border border-pink-100 group-hover:border-pink-300 flex items-center justify-center transition-colors duration-300">
                    <service.icon className="w-4 h-4 text-pink-500" />
                  </div>
                  <span className="font-body text-gray-700 text-sm leading-snug">{service.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
