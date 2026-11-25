import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/api';
import { ArrowUpRight, Tag } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const categories = ['All', 'AI & Automation', 'Cloud & Architecture', 'Web & Mobile', 'Enterprise Software'];

const defaultProjects = [
  {
    title: 'Aarohan AI Studio & Video Pipeline',
    client: 'Global Media & EdTech Network',
    category: 'AI & Automation',
    description: 'Autonomous AI-powered video production pipeline creating multilingual avatar videos, automated reels, and dynamic voice synchronization.',
    tags: ['AI Video', 'PyTorch', 'WebRTC', 'FastAPI', 'Node.js', 'React'],
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    impact: '10x Faster Video Output',
  },
  {
    title: 'Automated Underwriting & Risk Engine',
    client: 'Apex Financial Global',
    category: 'AI & Automation',
    description: 'Reduced loan approval cycles by 75% using secure LLM document parsing and automated financial risk assessments.',
    tags: ['Python', 'FastAPI', 'PyTorch', 'OpenAI', 'PostgreSQL'],
    gradient: 'from-blue-600 to-indigo-600',
    impact: '75% Faster Processing',
  },
  {
    title: 'Cloud Fleet & Supply Chain Hub',
    client: 'TransGlobal Logistics',
    category: 'Cloud & Architecture',
    description: 'Real-time multi-tenant IoT telemetry and route optimization system processing over 150,000 telemetry events per second.',
    tags: ['Node.js', 'React', 'AWS IoT', 'Redis', 'Docker'],
    gradient: 'from-sky-500 to-blue-700',
    impact: '150k events/sec',
  },
  {
    title: 'Connected Health & Telehealth Ecosystem',
    client: 'Novacare Health Systems',
    category: 'Web & Mobile',
    description: 'HIPAA-compliant video telemedicine, real-time doctor dispatching, and encrypted electronic health records.',
    tags: ['React', 'WebRTC', 'MongoDB', 'Express', 'Tailwind CSS'],
    gradient: 'from-indigo-600 to-purple-600',
    impact: '99.98% Uptime',
  },
  {
    title: 'Autonomous Inventory Forecasting Engine',
    client: 'OmniRetail Commerce',
    category: 'Enterprise Software',
    description: 'Machine learning demand forecasting platform preventing stockouts and automating warehouse replenishment.',
    tags: ['Python', 'TensorFlow', 'React', 'MongoDB'],
    gradient: 'from-blue-500 to-teal-500',
    impact: '24% Cost Reduction',
  },
];

const ProjectsSection = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects, setProjects] = useState(defaultProjects);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProjects(selectedCategory)
      .then((res) => {
        if (res && res.success && res.data && res.data.length > 0) {
          setProjects(res.data);
        } else if (selectedCategory === 'All') {
          setProjects(defaultProjects);
        } else {
          setProjects(defaultProjects.filter((p) => p.category === selectedCategory));
        }
      })
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1 rounded-full border border-blue-200/50 dark:border-blue-800/50">
            CASE STUDIES & WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            Featured Engineering Deliveries
          </h2>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
          High-performance production systems built for global enterprises and ambitious startups.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <SpotlightCard
            key={idx}
            spotlightColor="rgba(37, 99, 235, 0.15)"
            borderColor="rgba(59, 130, 246, 0.55)"
            className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-700 shadow-sm card-hover flex flex-col justify-between group"
          >
            <div>
              {/* Visual Card Banner */}
              <div
                className={`h-44 rounded-2xl bg-gradient-to-tr ${proj.gradient || 'from-blue-600 to-indigo-600'} p-5 flex flex-col justify-between text-white mb-5 shadow-inner relative overflow-hidden`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    {proj.category}
                  </span>
                  <span className="text-xs font-bold bg-black/20 px-2.5 py-0.5 rounded-md">
                    {proj.impact}
                  </span>
                </div>
                <div>
                  <div className="text-xs text-white/80 font-medium">{proj.client}</div>
                  <div className="text-lg font-extrabold leading-snug">{proj.title}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {proj.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {(proj.tags || []).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center text-[10px] font-semibold bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md"
                  >
                    <Tag className="w-2.5 h-2.5 mr-1 text-brand-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Trigger */}
            <button
              onClick={() => onSelectProject(proj.title)}
              className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-brand-600 dark:text-brand-400 group-hover:text-brand-700 transition"
            >
              <span>Build something similar</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </SpotlightCard>
        ))}
      </div>

    </section>
  );
};

export default ProjectsSection;
