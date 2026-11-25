import React from 'react';
import { 
  Code, 
  Globe, 
  Cpu, 
  Cloud, 
  Video, 
  Zap, 
  ShieldCheck, 
  Bot 
} from 'lucide-react';

const primaryFeatures = [
  {
    title: 'Software Development',
    subtitle: 'Custom ERP, CRM & Scalable Systems',
    icon: Code,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/60',
    borderColor: 'border-blue-200/80 dark:border-blue-800/60',
  },
  {
    title: 'Web Development',
    subtitle: 'React 19 & Next.js 15 Platforms',
    icon: Globe,
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-50 dark:bg-cyan-950/60',
    borderColor: 'border-cyan-200/80 dark:border-cyan-800/60',
  },
  {
    title: 'AI Solutions',
    subtitle: 'Autonomous LLMs & Neural Agents',
    icon: Cpu,
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-950/60',
    borderColor: 'border-violet-200/80 dark:border-violet-800/60',
  },
  {
    title: 'Digital Solutions',
    subtitle: 'Cloud DevOps & High Availability',
    icon: Cloud,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/60',
    borderColor: 'border-emerald-200/80 dark:border-emerald-800/60',
  },
  {
    title: 'AI-Powered Video Creation',
    subtitle: 'Generative Avatars & 4K Pipelines',
    icon: Video,
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-950/60',
    borderColor: 'border-indigo-200/80 dark:border-indigo-800/60',
  },
  {
    title: '99.98% High Availability',
    subtitle: 'Mission-Critical Architecture',
    icon: ShieldCheck,
    color: 'text-teal-600 dark:text-teal-400',
    bg: 'bg-teal-50 dark:bg-teal-950/60',
    borderColor: 'border-teal-200/80 dark:border-teal-800/60',
  },
  {
    title: '10x Faster Sprint Velocity',
    subtitle: 'Agile Full-Stack Engineering',
    icon: Zap,
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950/60',
    borderColor: 'border-amber-200/80 dark:border-amber-800/60',
  },
  {
    title: 'Autonomous AI Agents',
    subtitle: 'Task Automation & Knowledge RAG',
    icon: Bot,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-950/60',
    borderColor: 'border-purple-200/80 dark:border-purple-800/60',
  },
];

const NonstopFeatureLine = () => {
  // Seamless continuous loop
  const loopItems = [...primaryFeatures, ...primaryFeatures];

  return (
    <div className="py-4 sm:py-5 bg-white/70 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800/80 overflow-hidden relative z-10 backdrop-blur-sm shadow-xs">
      
      {/* Edge Gradient Fade Masks (Smooth seamless entrance & exit) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 dark:from-[#0b0f19] to-transparent z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 dark:from-[#0b0f19] to-transparent z-20"></div>

      {/* ONLY ONE Single Nonstop Moving Line */}
      <div className="flex overflow-hidden py-0.5 select-none">
        <div className="animate-marquee-nonstop flex items-center gap-4">
          {loopItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`single-line-${idx}`}
                className={`flex items-center space-x-3 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800/95 border ${item.borderColor} shadow-xs shrink-0`}
              >
                <div className={`w-8 h-8 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <div className="text-left">
                  <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white whitespace-nowrap">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default NonstopFeatureLine;
