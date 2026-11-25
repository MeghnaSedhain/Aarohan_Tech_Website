import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, Moon, ArrowRight, Menu, X, Inbox, ChevronDown, 
  Code, Globe, Cpu, Cloud, Video 
} from 'lucide-react';
import logoImg from '../assets/logo.png';

const serviceMenuItems = [
  {
    title: 'Software Development',
    icon: Code,
    anchor: '#services',
    color: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60',
  },
  {
    title: 'Web Development',
    icon: Globe,
    anchor: '#services',
    color: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60',
  },
  {
    title: 'AI Solutions',
    icon: Cpu,
    anchor: '#services',
    color: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/60',
  },
  {
    title: 'Digital Solutions',
    icon: Cloud,
    anchor: '#services',
    color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60',
  },
  {
    title: 'AI-Powered Video Creation',
    icon: Video,
    anchor: '#services',
    color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60',
  },
];

const Navbar = ({ onOpenContact, onOpenInbox, inquiryCount, onSelectService }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const handleServiceClick = (serviceTitle) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/85 dark:bg-slate-900/85 border-b border-blue-100/70 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-22 flex items-center justify-between">
        
        {/* Brand Logo with Official Uploaded Image */}
        <a href="#home" className="flex items-center space-x-3.5 group">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-brand-200/80 dark:border-brand-700/80 bg-white/95 dark:bg-slate-800/95 p-1 shadow-md transform group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
            <img src={logoImg} alt="Aarohan Technology Logo" className="w-full h-full object-contain filter drop-shadow-sm" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl sm:text-[28px] tracking-tight text-slate-900 dark:text-white leading-none">
              Aarohan
            </span>
            <span className="text-xs sm:text-[13px] uppercase tracking-[0.24em] font-extrabold text-brand-600 dark:text-brand-400 mt-1">
              Technology
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-xs xl:text-sm font-semibold">
          <a href="#home" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition">
            Home
          </a>

          {/* Services Dropdown */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center space-x-1.5 py-2 text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 font-bold transition focus:outline-none cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-brand-600' : 'text-slate-500'
                }`} 
              />
            </button>

            {/* Dropdown Menu Card Matching User Mockup */}
            {servicesDropdownOpen && (
              <div 
                className="absolute top-full left-0 pt-2 z-50 w-88 sm:w-96"
              >
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-3 border border-slate-200/90 dark:border-slate-800 shadow-2xl shadow-slate-900/15 dark:shadow-black/70 transition-all">
                  <div className="space-y-1">
                    {serviceMenuItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.anchor}
                        onClick={() => handleServiceClick(item.title)}
                        className="flex items-center space-x-3.5 px-3.5 py-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors text-slate-900 dark:text-white group cursor-pointer"
                      >
                        <div className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-[14px] text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition tracking-tight">
                          {item.title}
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="my-2 border-t border-slate-100 dark:border-slate-800"></div>

                  <a
                    href="#services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="px-4 py-2 flex items-center justify-between text-[11px] font-extrabold tracking-widest uppercase text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition"
                  >
                    <span>VIEW ALL SERVICES</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition">
            Industries
          </a>

          <a href="#studio" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition">
            Products
          </a>

          <a href="#team" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition">
            About
          </a>

          <a href="#process" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition">
            Process
          </a>

          <a href="#reviews" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition">
            Reviews
          </a>

          <a href="#faq" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition">
            FAQ
          </a>

          <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition">
            Contact
          </a>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center space-x-3">
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition border border-slate-200 dark:border-slate-700"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Inbox Button */}
          <button
            onClick={onOpenInbox}
            className="relative flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold rounded-full bg-blue-50 dark:bg-blue-950/60 text-brand-700 dark:text-brand-300 border border-blue-200 dark:border-blue-800/80 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition shadow-sm"
            title="View Inquiries Inbox"
          >
            <Inbox className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Inbox</span>
            {inquiryCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-brand-600 text-white text-[10px] flex items-center justify-center font-bold">
                {inquiryCount}
              </span>
            )}
          </button>

          {/* Get in Touch CTA */}
          <button
            onClick={onOpenContact}
            className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-brand-500/25 hover:shadow-md transition duration-200 flex items-center space-x-2 group"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 space-y-2.5">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-brand-600 dark:text-brand-400"
          >
            Home
          </a>

          {/* Expandable Services Accordion on Mobile */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-800 dark:text-slate-100"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-2 pr-1 py-2 space-y-1 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 mt-1">
                {serviceMenuItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.anchor}
                    onClick={() => handleServiceClick(item.title)}
                    className="flex items-center space-x-3 py-2 px-3 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/50 transition"
                  >
                    <div className={`w-7 h-7 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                      <item.icon className="w-3.5 h-3.5" />
                    </div>
                    <span>{item.title}</span>
                  </a>
                ))}
                <div className="pt-1 border-t border-slate-200/50 dark:border-slate-700/50 mt-1">
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 px-3 text-[10px] font-extrabold uppercase tracking-widest text-brand-600 dark:text-brand-400"
                  >
                    VIEW ALL SERVICES &rarr;
                  </a>
                </div>
              </div>
            )}
          </div>

          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Industries
          </a>
          <a
            href="#studio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Products
          </a>
          <a
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            About
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Process
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Reviews
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Contact
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInbox();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 text-xs font-semibold rounded-xl bg-blue-50 dark:bg-blue-950 text-brand-600 dark:text-brand-300 border border-blue-200 dark:border-blue-800"
            >
              <Inbox className="w-4 h-4" />
              <span>Inbox</span>
              {inquiryCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 rounded-full bg-brand-600 text-white text-[10px] font-bold">
                  {inquiryCount}
                </span>
              )}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 text-sm font-semibold rounded-xl bg-brand-600 text-white"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
