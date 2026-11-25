import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowUpRight, MapPin } from 'lucide-react';
import { subscribeNewsletter } from '../services/api';
import logoImg from '../assets/logo.png';

const Footer = ({ onOpenContact }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await subscribeNewsletter(email);
      setStatus({ type: 'success', message: res.message || 'Subscribed successfully!' });
      setEmail('');
      setTimeout(() => setStatus({ type: '', message: '' }), 4000);
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
      setTimeout(() => setStatus({ type: '', message: '' }), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80 dark:border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center space-x-3.5">
              <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-brand-200/80 dark:border-brand-700/80 bg-white/95 dark:bg-slate-800/95 p-1 shadow-md flex items-center justify-center shrink-0">
                <img src={logoImg} alt="Aarohan Technology" className="w-full h-full object-contain filter drop-shadow-sm" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tight text-slate-900 dark:text-white leading-none">
                  Aarohan
                </span>
                <span className="text-xs uppercase tracking-[0.22em] font-extrabold text-brand-600 dark:text-brand-400 mt-1">
                  Technology
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              A registered AI & Tech company in Nepal. We turn ideas into intelligent solutions through AI-powered video creation, software development, and digital innovation. <strong>Build. Innovate. Success.</strong>
            </p>

            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 space-y-1">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800 dark:text-slate-200">Headquarters:</strong><br />
                  1st Floor, Nepal Red Cross Society Building,<br />
                  Balkumari, Lalitpur, Nepal
                </span>
              </div>
              <div className="flex items-center space-x-2 pt-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <a 
                  href="https://wa.me/19702793295" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline font-bold"
                >
                  WhatsApp: +1 (970) 279-3295 <span className="text-[10px] font-medium opacity-90">(Chat Only • No Calls)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li><a href="#home" className="hover:text-brand-600 transition">Home</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition">Services</a></li>
              <li><a href="#about" className="hover:text-brand-600 transition">Why Aarohan</a></li>
              <li><a href="#projects" className="hover:text-brand-600 transition">Case Studies</a></li>
              <li><a href="#team" className="hover:text-brand-600 transition">Leadership & Team</a></li>
              <li><button onClick={onOpenContact} className="hover:text-brand-600 transition text-left">Get in Touch</button></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>AI-Powered Video Creation</li>
              <li>Custom Software Development</li>
              <li>Web & Digital Innovation</li>
              <li>Intelligent AI Solutions</li>
              <li>Cloud & DevOps Transformation</li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Tech & AI Insights
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Subscribe to our engineering newsletter for AI breakthroughs and software insights.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-brand-600"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs font-semibold flex items-center transition"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {status.message && (
                <p className={`text-[11px] ${status.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} Aarohan Technology Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span>Modern Cloud Architecture</span>
            <span>Enterprise Quality</span>
            <span>Privacy & Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
