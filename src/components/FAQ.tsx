import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What does a companion do?',
    answer: [
      'A companion provides non-medical support, companionship, and assistance with everyday activities to help clients maintain independence, comfort, and quality of life. While companions do not perform medical or personal care tasks such as administering medication, bathing, or lifting clients, they offer valuable social and practical support.',
    ],
  },
  {
    question: 'Do you provide medical care?',
    answer: ['No, I only provide CPR and first aid'],
  },
  {
    question: 'Do you provide transportation?',
    answer: ['Yes transportation is provided'],
  },
  {
    question: 'How do families get updates?',
    answer: [
      'Keeping families informed is an important part of the service I provide. After each visit, I will send a detailed progress report by email or text message—whichever method is most convenient for you.',
      'The update will include a summary of the activities completed during the visit, any errands or tasks that were accomplished, and observations about your loved one\'s overall well-being, mood, and emotional state. My goal is to provide you with peace of mind by keeping you informed about how they are doing.',
      'If I accompany your loved one to a medical appointment, I will also provide a thorough recap of the visit, including any important information discussed, follow-up recommendations, and any medication changes communicated by their healthcare provider.',
      'I believe open communication is essential, and I am always available to answer questions or discuss any concerns you may have regarding your loved one\'s care and companionship.',
    ],
  },
];

export default function FAQ() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-gradient-to-br from-teal-50/60 via-white to-pink-50/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center mb-16">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-heading font-semibold tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-teal-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 font-body text-gray-500 max-w-lg mx-auto leading-relaxed">
            Common questions about companion care and how I work with families.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-teal-400 to-pink-400" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border bg-white shadow-card overflow-hidden transition-shadow duration-300 ${
                  isOpen ? 'border-teal-300 shadow-card-hover' : 'border-teal-100 hover:border-teal-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start gap-4 px-6 py-5 text-left group"
                >
                  <div
                    className={`w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-gradient-to-br from-teal-500 to-teal-600'
                        : 'bg-teal-100 group-hover:bg-teal-200'
                    }`}
                  >
                    <HelpCircle
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-teal-600'
                      }`}
                    />
                  </div>

                  <span className="flex-1 font-heading font-semibold text-teal-800 text-base sm:text-lg leading-snug pt-1.5">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-teal-500 mt-2 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pl-20 space-y-3">
                      {faq.answer.map((paragraph, j) => (
                        <p key={j} className="font-body text-gray-600 text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
