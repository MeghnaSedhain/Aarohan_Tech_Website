import React, { useEffect, useState } from 'react';
import { Code, Globe, Cpu, Cloud, Video, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getServices } from '../services/api';
import SpotlightCard from './SpotlightCard';

const defaultServices = [
  {
    title: 'Software Development',
    shortDescription: 'Custom software solutions tailored to your unique operational scale, business workflows, and architecture.',
    fullDescription: 'We design, architect, and engineer enterprise-grade software applications built to solve complex business problems, streamline operations, and deliver mission-critical reliability.',
    iconType: 'code',
    features: ['Custom Enterprise ERP & CRM', 'API Engineering & Microservices', 'Legacy System Modernization', 'Cross-Platform Architecture'],
  },
  {
    title: 'Web Development',
    shortDescription: 'Modern, responsive, and ultra-fast web applications built with Next.js, React, and cloud-native services.',
    fullDescription: 'High-performance digital experiences crafted with modern frontend technologies, headless content management, and SEO optimization designed for maximum conversion.',
    iconType: 'globe',
    features: ['React & Next.js Full Stack', 'Progressive Web Apps (PWA)', 'High-Conversion SaaS Landing Pages', 'E-commerce & Custom Checkouts'],
  },
  {
    title: 'AI Solutions',
    shortDescription: 'Intelligent enterprise automation, custom LLMs, retrieval-augmented systems, and computer vision.',
    fullDescription: 'Harness the transformative power of artificial intelligence. We develop customized LLM pipelines, autonomous AI agents, machine learning predictive models, and intelligent workflows.',
    iconType: 'cpu',
    features: ['Custom LLM Fine-Tuning & RAG', 'Intelligent Document Processing', 'Predictive Analytics & Forecasting', 'Computer Vision & Automation'],
  },
  {
    title: 'Digital Solutions',
    shortDescription: 'Technology for a smarter and more connected world — cloud, IoT, and end-to-end transformation.',
    fullDescription: 'Comprehensive digital infrastructure engineering including cloud migration, containerization, CI/CD automation, and secure DevOps pipelines.',
    iconType: 'cloud',
    features: ['AWS & Azure Cloud Migration', 'Kubernetes & Docker Orchestration', 'DevOps & Automated CI/CD', 'Cybersecurity & Compliance'],
  },
  {
    title: 'AI-Powered Video Creation',
    shortDescription: 'Generative AI video, digital avatars, automated video pipelines, and high-impact digital content.',
    fullDescription: 'Pioneering AI video production in Nepal. We build custom generative video workflows, synthetic digital avatars, automated short-form and promotional video pipelines, and multilingual AI voiceovers.',
    iconType: 'video',
    features: ['Generative AI Video Production', 'Synthetic Avatars & Voice Cloning', 'Automated Social & Ad Video Pipelines', 'Intelligent Video Editing & Rendering'],
  },
];

const getServiceTheme = (title) => {
  if (title.includes('Video')) {
    return {
      iconBg: 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-900/60 text-indigo-600 dark:text-indigo-400',
      spotlight: 'rgba(99, 102, 241, 0.18)',
      border: 'rgba(99, 102, 241, 0.65)',
      borderClass: 'border-indigo-200/90 dark:border-indigo-800/80 ring-1 ring-indigo-400/20',
      badge: 'Signature AI',
      badgeClass: 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold shadow-xs',
      hoverBtn: 'text-indigo-600 dark:text-indigo-400',
    };
  }
  if (title.includes('AI Solutions')) {
    return {
      iconBg: 'bg-violet-50 dark:bg-violet-950/60 border-violet-200 dark:border-violet-900/60 text-violet-600 dark:text-violet-400',
      spotlight: 'rgba(139, 92, 246, 0.18)',
      border: 'rgba(139, 92, 246, 0.65)',
      borderClass: 'border-slate-200/80 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-700',
      badge: 'Enterprise AI',
      badgeClass: 'bg-violet-50 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800 font-bold',
      hoverBtn: 'text-violet-600 dark:text-violet-400',
    };
  }
  if (title.includes('Web')) {
    return {
      iconBg: 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-900/60 text-cyan-600 dark:text-cyan-400',
      spotlight: 'rgba(6, 182, 212, 0.16)',
      border: 'rgba(6, 182, 212, 0.65)',
      borderClass: 'border-slate-200/80 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-700',
      badge: 'Modern Web',
      badgeClass: 'bg-cyan-50 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 font-bold',
      hoverBtn: 'text-cyan-600 dark:text-cyan-400',
    };
  }
  if (title.includes('Digital')) {
    return {
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900/60 text-emerald-600 dark:text-emerald-400',
      spotlight: 'rgba(16, 185, 129, 0.16)',
      border: 'rgba(16, 185, 129, 0.65)',
      borderClass: 'border-slate-200/80 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700',
      badge: 'Cloud & DevOps',
      badgeClass: 'bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold',
      hoverBtn: 'text-emerald-600 dark:text-emerald-400',
    };
  }
  return {
    iconBg: 'bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900/60 text-blue-600 dark:text-blue-400',
    spotlight: 'rgba(37, 99, 235, 0.16)',
    border: 'rgba(59, 130, 246, 0.65)',
    borderClass: 'border-slate-200/80 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700',
    badge: 'Core Engineering',
    badgeClass: 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-bold',
    hoverBtn: 'text-blue-600 dark:text-blue-400',
  };
};

const getIcon = (type) => {
  switch (type) {
    case 'video':
      return <Video className="w-6 h-6" />;
    case 'globe':
      return <Globe className="w-6 h-6" />;
    case 'cpu':
      return <Cpu className="w-6 h-6" />;
    case 'cloud':
      return <Cloud className="w-6 h-6" />;
    case 'code':
    default:
      return <Code className="w-6 h-6" />;
  }
};

const ServicesSection = ({ onSelectService }) => {
  const [services, setServices] = useState(defaultServices);
  const [activeModalService, setActiveModalService] = useState(null);

  useEffect(() => {
    getServices().then((res) => {
      if (res && res.success && res.data && res.data.length > 0) {
        setServices(res.data);
      }
    });
  }, []);

  return (
    <section id="services" className="py-20 bg-white/60 dark:bg-slate-900/40 border-y border-blue-50 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1 rounded-full border border-blue-200/50 dark:border-blue-800/50">
            OUR CORE OFFERINGS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            Intelligent Solutions We Deliver
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            End-to-end digital excellence engineered to scale your vision across software, web, cloud, AI, and video.
          </p>
        </div>

        {/* Services Grid (3 on top, 2 centered in the middle below with interactive multi-spectrum spotlight glow) */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((item, idx) => {
            const theme = getServiceTheme(item.title);
            return (
              <SpotlightCard
                key={idx}
                onClick={() => setActiveModalService(item)}
                spotlightColor={theme.spotlight}
                borderColor={theme.border}
                className={`w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-18px)] bg-white dark:bg-slate-800/90 rounded-3xl p-6 border shadow-sm card-hover flex flex-col justify-between group cursor-pointer ${theme.borderClass}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${theme.iconBg} flex items-center justify-center group-hover:scale-110 transition duration-300 shadow-xs`}>
                      {getIcon(item.iconType)}
                    </div>
                    {theme.badge && (
                      <span className={`text-[10px] uppercase px-2.5 py-0.5 rounded-full ${theme.badgeClass}`}>
                        {theme.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.shortDescription}
                  </p>
                </div>

                <div className={`pt-5 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold ${theme.hoverBtn}`}>
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-slate-200 dark:border-slate-700 relative animate-float">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 dark:hover:text-white text-lg font-bold p-1"
            >
              ✕
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-blue-950 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                {getIcon(activeModalService.iconType)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {activeModalService.title}
              </h3>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {activeModalService.fullDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Core Capabilities & Deliverables
              </h4>
              <div className="space-y-2">
                {(activeModalService.features || []).map((feat, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const title = activeModalService.title;
                setActiveModalService(null);
                onSelectService(title);
              }}
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-brand-600/25 text-sm flex items-center justify-center space-x-2"
            >
              <span>Inquire About {activeModalService.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
