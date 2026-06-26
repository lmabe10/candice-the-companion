import { useReveal } from '../hooks/useReveal';

export default function About() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="reveal text-center mb-16">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-pink-50 text-pink-500 text-xs font-heading font-semibold tracking-wider uppercase">
            About
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-teal-800">
            Meet Candice
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-pink-400 to-teal-400" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image panel */}
          <div className="reveal reveal-delay-1 relative flex justify-center">
            <div className="absolute -top-8 -left-8 w-64 h-64 rounded-full bg-teal-50 pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-pink-50 pointer-events-none" />
            <div className="relative z-10 w-full max-w-sm">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/images/Candice_Headshots_March_2026_-_Dylan_and_Sandra_Photography_-_0003.jpg"
                  alt="Candice"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Text panel */}
          <div className="reveal reveal-delay-2 space-y-6">
            <p className="font-body text-gray-700 text-lg leading-relaxed">
              Hello, and thank you for visiting.
            </p>
            <p className="font-body text-gray-600 leading-relaxed">
              I am dedicated to providing compassionate, non-medical companion services for seniors and individuals requiring assistance with activities of daily living — offering peace of mind for the families who love them.
            </p>
            <p className="font-body text-gray-600 leading-relaxed">
              With over 10 years of experience in caregiving roles, I understand the importance of meaningful companionship, emotional support, and maintaining independence while enhancing quality of life. My passion is helping people stay engaged, connected, and comfortable in their daily lives.
            </p>
            <p className="font-body text-gray-600 leading-relaxed">
              Whether it's sharing a conversation, accompanying them on outings, assisting with errands, or simply being a friendly and reliable presence, I strive to make every visit enjoyable and enriching.
            </p>
            <p className="font-body text-gray-600 leading-relaxed">
              I know that families can't always be there in person, and my goal is to provide trusted companionship and support that helps loved ones feel valued, respected, and cared for. Every individual deserves dignity, connection, and the opportunity to enjoy the best possible quality of life — and I am honored to be part of that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
