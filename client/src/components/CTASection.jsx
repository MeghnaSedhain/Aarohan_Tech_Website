import React from 'react';
import { Send, ArrowRight } from 'lucide-react';

const CTASection = ({ onOpenContact }) => {
  return (
    <section id="contact-banner" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 border border-blue-200/80 dark:border-blue-900/60 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        
        {/* Left Info matching mockup */}
        <div className="flex items-center space-x-5 text-left">
          <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-md shadow-brand-500/25 shrink-0">
            <Send className="w-7 h-7 transform -rotate-12" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Have an idea? Let's build it together.
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
              Get in touch with us for your next project, architecture review, or AI collaboration.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onOpenContact}
          className="shrink-0 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-brand-600/25 transition duration-200 flex items-center space-x-2 group"
        >
          <span>Contact Us</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </section>
  );
};

export default CTASection;
