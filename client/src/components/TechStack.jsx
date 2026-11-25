import React, { useState } from 'react';
import { Cpu, Globe, Server, Cloud, Sparkles, Layers } from 'lucide-react';

const techCategories = [
  {
    name: 'AI & Neural Video',
    icon: Sparkles,
    color: 'text-indigo-500',
    techs: ['PyTorch', 'OpenAI Models', 'Generative Video Diffusion', 'Voice Cloning Engine', 'WebRTC Streaming', 'FFmpeg Acceleration'],
  },
  {
    name: 'Frontend & Web',
    icon: Globe,
    color: 'text-brand-500',
    techs: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'Responsive PWAs'],
  },
  {
    name: 'Backend & Microservices',
    icon: Server,
    color: 'text-emerald-500',
    techs: ['Node.js', 'Express.js', 'Python FastAPI', 'Distributed REST APIs', 'WebSocket Real-Time', 'GraphQL'],
  },
  {
    name: 'Databases & Cloud DevOps',
    icon: Cloud,
    color: 'text-sky-500',
    techs: ['MongoDB Atlas', 'PostgreSQL', 'Redis Cache', 'AWS Cloud Infrastructure', 'Docker Containers', 'Automated CI/CD'],
  },
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-16 md:py-20 border-y border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 transition-colors relative overflow-hidden">
      
      {/* Background Subtle Wave */}
      <div className="absolute inset-0 bg-mesh-light opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">
            Enterprise Technology Stack
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Built with World-Class Engineering Tools
          </h3>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25 scale-[1.02]'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : cat.color}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {techCategories[activeCategory].techs.map((tech) => (
            <div
              key={tech}
              className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 shadow-sm text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 transition transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
              <span>{tech}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
