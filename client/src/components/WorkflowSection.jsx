import React from 'react';
import { 
  FileText, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: FileText,
    title: 'Discovery & Architecture Blueprint',
    description: 'We analyze your core business objectives, define the technical requirements, design scalable database schemas, and map out a milestone roadmap.',
    deliverables: ['System Architecture Diagram', 'Database Schema Modeling', 'Milestone Sprint Schedule'],
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    step: '02',
    icon: Code2,
    title: 'Agile Engineering & AI Synthesis',
    description: 'Our full stack & AI support engineers execute focused sprints. Clean, well-documented code with bi-weekly interactive client staging reviews.',
    deliverables: ['Production-Ready Full Stack Code', 'Trained AI/Video Workflows', 'Bi-Weekly Staging Previews'],
    gradient: 'from-cyan-500 to-brand-600',
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Security Auditing & Load Testing',
    description: 'Every endpoint and asset is rigorously benchmarked. We conduct penetration testing, cross-browser audits, and automated stress testing for 99.9% uptime.',
    deliverables: ['Automated End-to-End Tests', 'Security & OWASP Compliance', 'High-Concurrence Load Tests'],
    gradient: 'from-brand-600 to-indigo-600',
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Deployment, Launch & 24/7 Evolution',
    description: 'We orchestrate zero-downtime deployment to secure cloud infrastructure, configure real-time telemetry monitoring, and provide dedicated support SLAs.',
    deliverables: ['Automated CI/CD Orchestration', '24/7 Telemetry & Health Monitoring', 'Full IP Rights & Documentation'],
    gradient: 'from-indigo-600 to-purple-600',
  },
];

const WorkflowSection = ({ onOpenContact }) => {
  return (
    <section id="process" className="py-20 md:py-28 relative bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.06] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800/80 px-4 py-1.5 rounded-full text-xs font-semibold text-brand-700 dark:text-brand-300 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>The Aarohan Ascent Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How We Build:{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-indigo-600">
              From Idea to Scale
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A proven 4-stage engineering methodology designed for predictable velocity, uncompromising security, and exceptional product quality.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white dark:bg-slate-800/90 rounded-3xl border border-slate-200/80 dark:border-slate-700 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group card-hover relative overflow-hidden"
              >
                {/* Top Glowing Step Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-3xl font-black text-slate-200 dark:text-slate-700 font-mono group-hover:text-brand-600/30 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                    Key Deliverables
                  </span>
                  {item.deliverables.map((deliv) => (
                    <div key={deliv} className="flex items-start space-x-2 text-[11px] text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-brand-600 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Ready to start your ascent?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Partner with Nepal's premier registered AI & technology company for your next mission-critical initiative.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('Software Development')}
            className="px-8 py-3.5 rounded-full bg-white text-brand-700 hover:bg-slate-50 font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-200 shrink-0 flex items-center space-x-2"
          >
            <span>Consult Our Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default WorkflowSection;
