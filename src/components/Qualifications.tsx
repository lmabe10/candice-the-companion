import { useReveal } from '../hooks/useReveal';
import {
  ShieldCheck,
  Heart,
  Brain,
  AlertTriangle,
  UserCheck,
  Car,
  FileCheck,
  Umbrella,
  Activity,
} from 'lucide-react';

const qualifications = [
  { icon: ShieldCheck, label: 'Standard First Aid' },
  { icon: Activity,    label: 'CPR BLS with AED' },
  { icon: AlertTriangle, label: 'Therapeutic Crisis Intervention' },
  { icon: Brain,       label: 'Mental Health Training Certificate' },
  { icon: Heart,       label: 'Suicide Prevention Training' },
  { icon: UserCheck,   label: 'Personal Boundary Training' },
  { icon: Car,         label: 'Valid G License' },
  { icon: FileCheck,   label: 'Fully Insured' },
  { icon: Umbrella,    label: 'General Liability Insurance' },
];

export default function Qualifications() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section id="qualifications" ref={sectionRef} className="py-24 bg-gradient-to-br from-teal-50/60 via-white to-pink-50/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center mb-16">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-heading font-semibold tracking-wider uppercase">
            Credentials
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-teal-800">
            Qualifications & Training
          </h2>
          <p className="mt-4 font-body text-gray-500 max-w-lg mx-auto leading-relaxed">
            Professionally trained and certified to provide safe, informed, and compassionate care.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-teal-400 to-pink-400" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {qualifications.map((q, i) => (
            <div
              key={q.label}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} group flex items-center gap-4 bg-white rounded-2xl px-6 py-5 border border-teal-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-teal-300 transition-all duration-300`}
            >
              <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 group-hover:from-teal-500 group-hover:to-teal-600 flex items-center justify-center transition-all duration-300">
                <q.icon className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-heading font-medium text-teal-800 text-sm leading-snug">
                {q.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
