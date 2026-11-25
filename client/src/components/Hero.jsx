import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Sparkles, Video, Code, CheckCircle, Briefcase } from 'lucide-react';
import logoImg from '../assets/logo.png';
import HeroVideoShowcase from './HeroVideoShowcase';

const Hero = ({ onOpenContact }) => {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-mesh-light transition-colors">
      
      {/* Standard Tech Ambient Multi-Tone Glows */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-violet-500/20 dark:bg-violet-600/18 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-400/18 dark:bg-cyan-500/14 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/18 dark:bg-blue-600/16 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-indigo-500/15 dark:bg-indigo-600/12 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 z-10 space-y-6 text-left">
          
          {/* Official Registered Pill Badge with Standard Colorful Accents */}
          <div className="inline-flex items-center space-x-2 bg-white/90 dark:bg-slate-800/90 border border-blue-200/90 dark:border-slate-700 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-brand-700 dark:text-brand-300 font-bold">A Registered AI & Tech Company in Nepal</span>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <span className="font-bold text-slate-700 dark:text-slate-300">3K Followers</span>
          </div>

          {/* Main Headline with Standard Enterprise Tech Gradient */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Turning Ideas into{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              Intelligent Solutions.
            </span>
          </h1>

          {/* Official Company Bio from Registered Profile */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            We turn ideas into intelligent solutions through <strong className="text-violet-600 dark:text-violet-400 font-bold">AI-powered video creation</strong>, <strong className="text-blue-600 dark:text-blue-400 font-bold">software development</strong>, and <strong className="text-cyan-600 dark:text-cyan-400 font-bold">digital innovation</strong>.
          </p>

          {/* Official Motto Banner */}
          <div className="inline-flex items-center space-x-3 py-1.5 px-4 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-xs">
            <span className="text-blue-500">●</span>
            <span>Build.</span>
            <span className="text-amber-500">●</span>
            <span>Innovate.</span>
            <span className="text-emerald-500">●</span>
            <span>Success.</span>
          </div>

          {/* Action Buttons matching Social Profile Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            
            {/* Primary Action: Message Us */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-brand-600/25 hover:shadow-brand-600/35 transition duration-200 group"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message Us</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Action: Explore Services */}
            <a
              href="#services"
              className="inline-flex items-center space-x-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-brand-600 dark:text-brand-400 font-semibold px-6 py-3.5 rounded-full border border-blue-200 dark:border-slate-700 shadow-sm transition duration-200"
            >
              <span>Explore Services</span>
            </a>

          </div>

          {/* Trust Mini Badges with Standard Color Chips */}
          <div className="pt-6 border-t border-slate-200/70 dark:border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-300 font-medium">
            <div className="flex items-center space-x-2.5">
              <div className="w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Video className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold">AI-Powered Video Creation</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Code className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold">Full-Cycle Software Dev</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <div className="w-6 h-6 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold">Digital Innovation</span>
            </div>
          </div>

        </div>

        {/* Right Visual Column (Interactive Company Reel Video Showcase & Ascent Crest) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <HeroVideoShowcase />
        </div>

      </div>
    </section>
  );
};

export default Hero;
