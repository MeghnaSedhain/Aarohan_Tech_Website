import React, { useState } from 'react';
import { 
  Video, 
  Sparkles, 
  Layers, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Sliders, 
  Clock, 
  ShieldCheck,
  Play,
  Code2
} from 'lucide-react';

const AIStudioPreview = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState('video'); // 'video' | 'estimator'
  
  // Video Pipeline Simulation State
  const [activeStep, setActiveStep] = useState(0);
  const [selectedStyle, setSelectedStyle] = useState('Commercial Reel');
  const [selectedResolution, setSelectedResolution] = useState('4K Ultra HD');
  const [selectedVoice, setSelectedVoice] = useState('Nepali & English Multilingual');

  // Project Estimator State
  const [projectType, setProjectType] = useState('AI-Powered Video Creation');
  const [projectScale, setProjectScale] = useState('Medium Enterprise');
  const [selectedAddons, setSelectedAddons] = useState(['Automated Voiceover', 'Custom 3D Avatars']);

  const pipelineSteps = [
    {
      step: '01',
      title: 'Script & Concept Synthesis',
      description: 'Natural language analysis parses brand messaging into structured storyboard prompts and scene cues.',
      tag: 'LLM Prompt Engineering',
    },
    {
      step: '02',
      title: 'Neural Video Generation',
      description: 'Diffusion models render cinematic visual sequences, realistic physics, and brand-consistent aesthetics.',
      tag: 'Generative Video AI',
    },
    {
      step: '03',
      title: 'Digital Avatar & Lip Sync',
      description: 'Sub-millisecond audio-to-motion synchronization with multi-language natural voice models.',
      tag: 'Neural Audio & Avatars',
    },
    {
      step: '04',
      title: '4K Rendering & Studio Color',
      description: 'GPU-accelerated post-processing, automated sound effects, typography overlays, and delivery ready for broadcast.',
      tag: '60 FPS Broadcast Master',
    },
  ];

  const handleToggleAddon = (addon) => {
    setSelectedAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  // Estimator Calculations
  const getEstimatedTimeline = () => {
    if (projectScale === 'Startup MVP') return '1 to 2 Weeks';
    if (projectScale === 'Medium Enterprise') return '3 to 5 Weeks';
    return '6 to 8 Weeks';
  };

  const getEstimatedDeliverables = () => {
    if (projectType === 'AI-Powered Video Creation') {
      return ['Up to 10 High-Impact 4K Video Reels', 'Custom AI Voiceover & Multilingual Audio', 'Full Commercial Broadcast Rights', 'Raw Project Assets & Re-render Templates'];
    }
    if (projectType === 'Software Development') {
      return ['Custom Enterprise Architecture & APIs', 'Full Stack Frontend & Backend Codebase', 'Automated CI/CD Deployment Pipelines', 'Dedicated SLA & Post-Launch Support'];
    }
    return ['Responsive Web Platform & CMS', 'Real-time Analytics Dashboard', 'Cloud Database Cluster Deployment', 'SEO Optimization & Security Hardening'];
  };

  return (
    <section id="studio" className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-brand-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800/80 px-4 py-1.5 rounded-full text-xs font-semibold text-brand-700 dark:text-brand-300 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Interactive Innovation Studio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            See How We Turn Ideas into{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-blue-500 to-indigo-600">
              Intelligent Reality
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Explore our signature AI-powered video pipeline or calculate an instant timeline estimate for your next software initiative.
          </p>

          {/* Mode Tabs */}
          <div className="inline-flex p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 mt-8 shadow-sm">
            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'video'
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>AI Video Studio Pipeline</span>
            </button>

            <button
              onClick={() => setActiveTab('estimator')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'estimator'
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Project Scope & Timeline Estimator</span>
            </button>
          </div>
        </div>

        {/* Tab 1: AI Video Studio Pipeline */}
        {activeTab === 'video' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
            
            {/* Left Steps Column */}
            <div className="lg:col-span-5 space-y-3">
              {pipelineSteps.map((step, idx) => (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 text-left ${
                    activeStep === idx
                      ? 'bg-blue-50/80 dark:bg-blue-950/50 border-brand-500 dark:border-brand-500 shadow-md scale-[1.02]'
                      : 'bg-white dark:bg-slate-800/80 border-slate-200/80 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400">
                      STEP {step.step}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {step.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Interactive Simulator Screen */}
            <div className="lg:col-span-7 bg-slate-950 rounded-3xl p-6 sm:p-8 border-2 border-slate-800 shadow-2xl text-white relative overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs mb-6">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 font-mono text-slate-400 text-[11px]">
                    aarohan-ai-video-engine.pipeline
                  </span>
                </div>
                <span className="flex items-center space-x-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>ONLINE • GPU ACCELERATED</span>
                </span>
              </div>

              {/* Active Step Highlight Box */}
              <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-bold text-brand-400 flex items-center space-x-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>CURRENT EXECUTION: {pipelineSteps[activeStep].title}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Step {activeStep + 1} of 4
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pipelineSteps[activeStep].description}
                </p>
              </div>

              {/* Interactive Config Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-left">
                
                {/* Style */}
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                    Output Genre
                  </span>
                  <select
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="w-full bg-slate-800 text-white text-xs rounded-lg px-2 py-1.5 border border-slate-700 focus:outline-none"
                  >
                    <option value="Commercial Reel">Commercial Reel</option>
                    <option value="Product Showcase">Product Showcase</option>
                    <option value="Social Media Short">Social Media Short</option>
                    <option value="Executive Avatar">Executive Avatar</option>
                  </select>
                </div>

                {/* Resolution */}
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                    Render Quality
                  </span>
                  <select
                    value={selectedResolution}
                    onChange={(e) => setSelectedResolution(e.target.value)}
                    className="w-full bg-slate-800 text-white text-xs rounded-lg px-2 py-1.5 border border-slate-700 focus:outline-none"
                  >
                    <option value="4K Ultra HD">4K Ultra HD (60 FPS)</option>
                    <option value="1080p Cinematic">1080p Cinematic (30 FPS)</option>
                    <option value="Vertical 9:16 Shorts">Vertical 9:16 Shorts</option>
                  </select>
                </div>

                {/* Audio Engine */}
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                    Voiceover Engine
                  </span>
                  <select
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    className="w-full bg-slate-800 text-white text-xs rounded-lg px-2 py-1.5 border border-slate-700 focus:outline-none"
                  >
                    <option value="Nepali & English Multilingual">Nepali & English</option>
                    <option value="Global English Neutral">Global English</option>
                    <option value="Studio Human Clone">Studio Voice Clone</option>
                  </select>
                </div>

              </div>

              {/* Status & CTA Bar */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-400 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Full Commercial IP Ownership Guaranteed</span>
                </div>

                <button
                  onClick={() => onOpenContact('AI-Powered Video Creation')}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-lg shadow-brand-600/30 transition duration-200"
                >
                  <span>Build an AI Video Campaign</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Project Scope & Timeline Estimator */}
        {activeTab === 'estimator' && (
          <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-700 shadow-xl max-w-5xl mx-auto animate-fade-in text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Configuration Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Project Type Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    1. Select Core Service Pillar
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      'AI-Powered Video Creation',
                      'Software Development',
                      'Web & Digital Platform',
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProjectType(type)}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition ${
                          projectType === type
                            ? 'bg-brand-50 dark:bg-brand-950/60 border-brand-600 text-brand-700 dark:text-brand-300 shadow-sm'
                            : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Scale Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    2. Project Scope & Architecture Scale
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['Startup MVP', 'Medium Enterprise', 'Large-Scale Solution'].map((scale) => (
                      <button
                        key={scale}
                        type="button"
                        onClick={() => setProjectScale(scale)}
                        className={`p-3 rounded-xl border text-xs font-bold text-center transition ${
                          projectScale === scale
                            ? 'bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-600/30'
                            : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {scale}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Addon Features */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    3. Key Specialized Modules (Select All That Apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Automated Voiceover',
                      'Custom 3D Avatars',
                      'MERN & Microservices API',
                      'Multi-tenant Cloud Cluster',
                      'Real-time Analytics Dashboard',
                      'Enterprise SLA & 24/7 Support',
                    ].map((addon) => (
                      <div
                        key={addon}
                        onClick={() => handleToggleAddon(addon)}
                        className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-between cursor-pointer transition ${
                          selectedAddons.includes(addon)
                            ? 'bg-blue-50 dark:bg-blue-950/60 border-brand-500 text-brand-700 dark:text-brand-300'
                            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                        }`}
                      >
                        <span>{addon}</span>
                        <div className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-bold ${
                          selectedAddons.includes(addon) ? 'bg-brand-600 text-white' : 'border border-slate-300 dark:border-slate-600'
                        }`}>
                          {selectedAddons.includes(addon) ? '✓' : ''}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Summary & Blueprint Column */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-xl border border-slate-800">
                <div>
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-[11px] font-bold mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Estimated Sprint Delivery</span>
                  </div>

                  <div className="text-3xl font-extrabold text-white mb-1">
                    {getEstimatedTimeline()}
                  </div>
                  <p className="text-xs text-slate-400 mb-6">
                    Structured agile sprints with weekly milestone reviews and staging demos.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block">
                      Included Deliverables
                    </span>
                    {getEstimatedDeliverables().map((item) => (
                      <div key={item} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onOpenContact(projectType)}
                    className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-brand-600/30 transition duration-200"
                  >
                    <span>Request Exact Quote & Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Free technical consultation • No obligation
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default AIStudioPreview;
