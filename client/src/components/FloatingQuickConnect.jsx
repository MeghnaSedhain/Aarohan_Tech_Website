import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  ArrowUp, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Zap,
  Code,
  Globe,
  Cpu,
  Cloud,
  Video
} from 'lucide-react';
import logoImg from '../assets/logo.png';

// =========================================================================
// 📞 OFFICIAL COMPANY WHATSAPP NUMBER
// Format: 19702793295 (Country code 1 + 970 279-3295)
// Notice: Strictly for WhatsApp chat/quotes only. No voice calls.
// =========================================================================
export const OFFICIAL_WHATSAPP_NUMBER = '19702793295';
export const DISPLAY_WHATSAPP_NUMBER = '+1 (970) 279-3295';

const services = [
  { id: 'software', label: 'Software Dev', icon: Code, title: 'Software Development' },
  { id: 'web', label: 'Web Dev', icon: Globe, title: 'Web Development' },
  { id: 'ai', label: 'AI Solutions', icon: Cpu, title: 'AI Solutions' },
  { id: 'cloud', label: 'Cloud & Digital', icon: Cloud, title: 'Digital Solutions' },
  { id: 'video', label: 'AI Video', icon: Video, title: 'AI-Powered Video Creation' },
];

const timelines = [
  '⚡ Fast-Track (1-3 Weeks)',
  '🚀 Standard (1-2 Months)',
  '🏢 Enterprise (3+ Months)',
  '🤝 Flexible Roadmap',
];

const budgets = [
  '<$1,000 (NPR ~1.3 Lakhs)',
  '$1,000 - $5,000 (NPR 1.3L - 6.5L)',
  '$5,000 - $15,000',
  '$15,000+',
  'Undisclosed / Discuss',
];

const FloatingQuickConnect = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState('quote'); // 'quote' | 'info'
  
  // Quote Builder State
  const [selectedService, setSelectedService] = useState('Software Development');
  const [selectedTimeline, setSelectedTimeline] = useState('🚀 Standard (1-2 Months)');
  const [selectedBudget, setSelectedBudget] = useState('$1,000 - $5,000 (NPR 1.3L - 6.5L)');
  const [clientName, setClientName] = useState('');
  const [projectNote, setProjectNote] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate WhatsApp formatted message
  const generateMessage = () => {
    let msg = `Namaste Aarohan Technology! 🙏\n\n`;
    msg += `I would like an instant quote for my project:\n`;
    msg += `📌 Service: ${selectedService}\n`;
    msg += `⏱️ Timeline: ${selectedTimeline}\n`;
    msg += `💰 Estimated Budget: ${selectedBudget}\n`;
    if (clientName.trim()) {
      msg += `👤 From: ${clientName.trim()}\n`;
    }
    if (projectNote.trim()) {
      msg += `📝 Project Notes: ${projectNote.trim()}\n`;
    }
    msg += `\nPlease let me know your availability and initial proposal. Thank you!`;
    return msg;
  };

  const handleLaunchWhatsApp = () => {
    const message = generateMessage();
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    const message = generateMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center group"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 text-brand-600 dark:text-brand-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Floating Popup Card (Instant WhatsApp Quote Generator) */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[420px] max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl p-5 sm:p-6 text-left animate-in fade-in slide-in-from-bottom-2 duration-200 relative mb-2">
          
          {/* Top Banner Accent */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-brand-600 to-indigo-600"></div>

          {/* Card Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-brand-200 dark:border-brand-800 p-0.5 bg-white dark:bg-slate-800 flex items-center justify-center shrink-0">
                <img src={logoImg} alt="Aarohan Crest" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Aarohan Technology
                  </h4>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-extrabold uppercase tracking-wider">
                    WhatsApp
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Instant Quote Engine • Online</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl mb-4 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('quote')}
              className={`flex-1 py-1.5 rounded-lg text-center transition flex items-center justify-center space-x-1.5 ${
                activeTab === 'quote'
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp Quote Generator</span>
            </button>

            <button
              onClick={() => setActiveTab('info')}
              className={`py-1.5 px-3 rounded-lg text-center transition ${
                activeTab === 'info'
                  ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Office Info</span>
            </button>
          </div>

          {/* TAB 1: WhatsApp Quote Generator */}
          {activeTab === 'quote' && (
            <div className="space-y-3.5">
              
              {/* Step 1: Select Service */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  1. Select Service
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {services.map((s) => {
                    const Icon = s.icon;
                    const isSelected = selectedService === s.title;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(s.title)}
                        className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-semibold border transition text-left ${
                          isSelected
                            ? 'bg-brand-50 dark:bg-brand-950/60 border-brand-500 text-brand-700 dark:text-brand-300 ring-1 ring-brand-500/30'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'}`} />
                        <span className="truncate">{s.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Timeline & Budget */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    2. Timeline
                  </label>
                  <select
                    value={selectedTimeline}
                    onChange={(e) => setSelectedTimeline(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
                  >
                    {timelines.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    3. Budget Range
                  </label>
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
                  >
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional: Name or Short Scope Note */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    Your Name / Org (Optional)
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Roshan Sharma"
                    className="w-full px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    Specific Feature (Optional)
                  </label>
                  <input
                    type="text"
                    value={projectNote}
                    onChange={(e) => setProjectNote(e.target.value)}
                    placeholder="e.g. AI Video reel or CRM"
                    className="w-full px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
                  />
                </div>
              </div>

              {/* Real-time WhatsApp Message Preview Bubble */}
              <div className="bg-[#e7fedb] dark:bg-[#073620] border border-emerald-300 dark:border-emerald-800/80 rounded-2xl p-3 text-[11px] text-emerald-950 dark:text-emerald-100 relative shadow-sm">
                <div className="flex items-center justify-between font-bold text-[10px] uppercase text-emerald-800 dark:text-emerald-300 mb-1">
                  <span>💬 WhatsApp Message Preview:</span>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="flex items-center space-x-1 text-emerald-700 dark:text-emerald-300 hover:underline"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <p className="font-mono text-[10.5px] leading-relaxed whitespace-pre-line opacity-95">
                  {generateMessage()}
                </p>
              </div>

              {/* Launch WhatsApp CTA */}
              <div className="pt-1 space-y-2">
                <button
                  type="button"
                  onClick={handleLaunchWhatsApp}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/30 hover:shadow-emerald-600/40 transition group"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Launch WhatsApp & Send Quote</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <p className="text-[10px] text-center text-slate-500 dark:text-slate-400">
                  💬 WhatsApp: <span className="font-mono font-bold text-slate-800 dark:text-slate-100">{DISPLAY_WHATSAPP_NUMBER}</span>
                  <span className="block text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">
                    (WhatsApp Messages Only • No Voice Calls)
                  </span>
                </p>
              </div>

            </div>
          )}

          {/* TAB 2: Office & Direct Form */}
          {activeTab === 'info' && (
            <div className="space-y-3 py-1">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Connect directly with our engineering department or visit our registered physical office:
              </p>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenContact('Software Development');
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200/80 dark:border-blue-800/80 text-brand-700 dark:text-brand-300 text-xs font-bold transition group"
              >
                <div className="flex items-center space-x-2.5">
                  <Send className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  <span>Submit Web Contact Inquiry</span>
                </div>
                <span className="text-xs">→</span>
              </button>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                  <span>1st Floor, Nepal Red Cross Society Bldg, Balkumari, Lalitpur, Nepal</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">WhatsApp: {DISPLAY_WHATSAPP_NUMBER}</span>
                    <span className="block text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                      WhatsApp Chat & Quotes Only (No Direct Calls)
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                  <span>contact@aarohantech.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                  <span>Hours: Sunday – Friday: 10:00 AM – 6:00 PM (NPT)</span>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Quote Generator & Chat"
        className="relative group flex items-center space-x-2 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-600/35 hover:shadow-emerald-600/45 transition-all duration-300 focus:outline-none"
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <>
            <div className="relative">
              <MessageSquare className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 border-2 border-emerald-600 animate-pulse"></span>
            </div>
            <span className="text-xs font-bold hidden sm:inline">
              Instant WhatsApp Quote
            </span>
          </>
        )}
      </button>

    </div>
  );
};

export default FloatingQuickConnect;
