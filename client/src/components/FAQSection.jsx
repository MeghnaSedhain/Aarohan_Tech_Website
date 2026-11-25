import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: "What makes Aarohan Technology Nepal's registered AI & tech company of choice?",
    answer: "Aarohan Technology is an officially registered enterprise in Balkumari, Lalitpur, Nepal. Guided by our motto 'Build. Innovate. Success.', we uniquely bridge AI-powered video creation with enterprise full-stack software development, delivering Silicon Valley caliber solutions with local dedication.",
  },
  {
    question: "How does your AI-Powered Video Creation service work?",
    answer: "We engineer customized generative AI workflows, synthetic digital avatars, automated commercial reels, and multilingual voice synchronization. Clients provide their key messaging or scripts, and our neural pipelines produce 4K broadcast-ready video content up to 10x faster than traditional studio production.",
  },
  {
    question: "Can Aarohan handle both early-stage startup MVPs and large enterprise systems?",
    answer: "Absolutely. We architect tailored solutions across the entire growth spectrum — from rapid MVP validation platforms launched in 2 to 3 weeks, to high-throughput multi-tenant enterprise ERPs and cloud microservices processing hundreds of thousands of events per second.",
  },
  {
    question: "Where is your office located, and can we schedule an in-person meeting?",
    answer: "Our headquarters is conveniently situated at the 1st Floor, Nepal Red Cross Society Building, Balkumari, Lalitpur, Nepal. We welcome partners and clients for in-person consultations Sunday through Friday between 10:00 AM and 6:00 PM NPT.",
  },
  {
    question: "How do you ensure security, source code ownership, and confidentiality?",
    answer: "Every engagement includes strict Non-Disclosure Agreements (NDAs). Upon project completion, 100% of all intellectual property, source code repositories, trained model weights, and media assets belong entirely to the client. Our engineering practices strictly adhere to OWASP security benchmarks.",
  },
  {
    question: "How do we get started or request a project quotation?",
    answer: "Simply click 'Get in Touch' or 'Message Us' on this site. Our technical leadership (CEO & CTO) will review your requirements, conduct a preliminary discovery consultation, and provide a detailed technical blueprint within 48 to 72 hours.",
  },
];

const FAQSection = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800/80 px-4 py-1.5 rounded-full text-xs font-semibold text-brand-700 dark:text-brand-300 mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything You Need to Know About{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-indigo-600">
              Aarohan
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Clear answers to common questions about our AI video creation, software engineering, and partnership models.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden text-left ${
                  isOpen
                    ? 'bg-blue-50/50 dark:bg-slate-800/90 border-brand-300 dark:border-brand-700 shadow-md'
                    : 'bg-white dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-brand-600 text-white rotate-180'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center bg-slate-50 dark:bg-slate-800/70 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-brand-600" />
              <span>Have a specific project in mind?</span>
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Speak directly with our engineering architects at our Balkumari, Lalitpur office.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('Consultation')}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-600/25 transition duration-200 shrink-0"
          >
            <span>Ask Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
