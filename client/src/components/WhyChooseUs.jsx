import React from 'react';
import { Hammer, Sparkles, Trophy } from 'lucide-react';

const pillars = [
  {
    title: 'Build',
    tagline: 'Precision Engineering',
    description: 'We architect and build enterprise-grade software, full stack platforms, and scalable infrastructure tailored to your exact operational workflows.',
    icon: <Hammer className="w-6 h-6" />,
  },
  {
    title: 'Innovate',
    tagline: 'Cutting-Edge AI & Video',
    description: 'Pioneering AI-powered video creation, autonomous agents, and intelligent digital solutions that keep your business ahead of the curve.',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: 'Success',
    tagline: 'Measurable Outcomes',
    description: 'Partnering for long-term growth. Delivering measurable ROI, 99.4% client satisfaction, and empowering your digital elevation.',
    icon: <Trophy className="w-6 h-6" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-gradient-to-br from-blue-50/80 via-white to-sky-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950/30 rounded-3xl p-8 sm:p-12 border border-blue-100 dark:border-slate-700/80 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Title & Description */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="inline-flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                WHY CHOOSE AAROHAN?
              </span>
              <span className="h-0.5 w-6 bg-brand-600"></span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Build. Innovate. Success.
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              As a registered AI & Tech company in Nepal, we turn bold ideas into intelligent solutions through world-class engineering and future-forward innovation.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs font-bold text-slate-700 dark:text-slate-300">
              <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-brand-700 dark:text-brand-300">
                💼 Information Technology Company
              </span>
            </div>
          </div>

          {/* Right 3 Pillars: Build. Innovate. Success. */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/85 dark:bg-slate-800/85 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/70 dark:border-slate-700 text-center card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 dark:bg-blue-900/40 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-extrabold text-lg text-slate-900 dark:text-white mb-0.5">
                    {item.title}
                  </h4>
                  <div className="text-[11px] font-semibold text-brand-600 dark:text-brand-400 mb-2">
                    {item.tagline}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
