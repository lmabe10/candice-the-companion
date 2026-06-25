import { useReveal } from '../hooks/useReveal';
import {
  Home,
  HandHeart,
  HeartPulse,
  Accessibility,
  Users,
  Heart,
  Activity,
  Plane,
  UserCheck,
  ShieldPlus,
} from 'lucide-react';

const audiences = [
  { icon: Home, label: 'Seniors living independently' },
  { icon: HandHeart, label: 'Individuals requiring assistance with activities of daily living' },
  { icon: HeartPulse, label: 'Individuals with chronic illnesses or debilitating conditions' },
  { icon: Accessibility, label: 'People with mobility challenges' },
  { icon: Users, label: 'Families needing occasional support' },
  { icon: Heart, label: 'Seniors experiencing loneliness' },
  { icon: Activity, label: 'Clients recovering from illness or surgery' },
  { icon: Plane, label: 'Adult children living out of town' },
  { icon: UserCheck, label: 'Individuals with disabilities' },
  { icon: ShieldPlus, label: 'Injured individuals recovering from accidents' },
];

export default function WhoIsThisFor() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section id="who" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center mb-16">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-pink-50 text-pink-500 text-xs font-heading font-semibold tracking-wider uppercase">
            Who Is This For
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-teal-800">
            Who Is This For?
          </h2>
          <p className="mt-4 font-body text-gray-500 max-w-lg mx-auto leading-relaxed">
            Companionship and everyday support for individuals and families who need a trusted helping hand.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-pink-400 to-teal-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {audiences.map((item, i) => (
            <div
              key={item.label}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} group flex items-center gap-4 bg-white rounded-2xl px-6 py-5 border border-teal-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-teal-300 transition-all duration-300`}
            >
              <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 group-hover:from-teal-500 group-hover:to-teal-600 flex items-center justify-center transition-all duration-300">
                <item.icon className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-heading font-medium text-teal-800 text-sm leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
