import React from 'react';
import { Users, Cpu, Award, ShieldCheck } from 'lucide-react';

const stats = [
  { 
    value: '3K+', 
    label: 'Community Followers', 
    sub: 'Verified social presence',
    icon: Users,
    color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/60 dark:text-blue-400',
    gradient: 'from-blue-600 to-indigo-600',
    labelColor: 'text-blue-600 dark:text-blue-400',
  },
  { 
    value: '50+', 
    label: 'Intelligent Solutions', 
    sub: 'AI, software & video reels',
    icon: Cpu,
    color: 'text-violet-600 bg-violet-50 dark:bg-violet-950/60 dark:text-violet-400',
    gradient: 'from-indigo-600 to-violet-600',
    labelColor: 'text-violet-600 dark:text-violet-400',
  },
  { 
    value: '99.4%', 
    label: 'Client Satisfaction', 
    sub: 'On-time milestone delivery',
    icon: Award,
    color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/60 dark:text-amber-400',
    gradient: 'from-amber-500 to-orange-500',
    labelColor: 'text-amber-600 dark:text-amber-400',
  },
  { 
    value: '100%', 
    label: 'Registered in Nepal', 
    sub: 'Balkumari, Lalitpur office',
    icon: ShieldCheck,
    color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-400',
    gradient: 'from-emerald-600 to-teal-500',
    labelColor: 'text-emerald-600 dark:text-emerald-400',
  },
];

const StatsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-10 sm:my-14 relative z-10">
      <div className="relative overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-blue-100 dark:border-slate-800 rounded-3xl shadow-2xl shadow-brand-600/5 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800/80">
        
        {/* Standard Tech Top Accent Stripe */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-t-3xl"></div>

        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="pt-4 md:pt-0 flex flex-col items-center group">
              <div className={`w-10 h-10 rounded-2xl ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-xs`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className={`text-3xl sm:text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient}`}>
                {stat.value}
              </div>
              <div className={`text-xs sm:text-sm font-bold ${stat.labelColor} mt-1`}>
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
