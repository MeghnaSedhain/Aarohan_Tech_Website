import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NonstopFeatureLine from './components/NonstopFeatureLine';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectsSection from './components/ProjectsSection';
import TeamSection from './components/TeamSection';
import TechStack from './components/TechStack';
import CTASection from './components/CTASection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import AdminInboxModal from './components/AdminInboxModal';
import ReviewsSection from './components/ReviewsSection';
import AIStudioPreview from './components/AIStudioPreview';
import WorkflowSection from './components/WorkflowSection';
import FAQSection from './components/FAQSection';
import FloatingQuickConnect from './components/FloatingQuickConnect';
import { checkHealth, getInquiries } from './services/api';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isInboxOpen, setIsInboxOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Software Development');
  const [inquiryInitialMessage, setInquiryInitialMessage] = useState('');
  const [inquiryCount, setInquiryCount] = useState(0);
  const [backendHealth, setBackendHealth] = useState({ status: 'checking' });
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Check backend and fetch inquiry count
  useEffect(() => {
    checkHealth().then((res) => {
      setBackendHealth(res);
    });

    getInquiries().then((res) => {
      if (res && res.data) {
        setInquiryCount(res.data.length);
      }
    });
  }, [refreshTrigger]);

  const handleOpenContactForService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setInquiryInitialMessage(`Inquiry regarding ${serviceTitle} services and engineering architecture.`);
    setIsContactOpen(true);
  };

  const handleOpenContactForProject = (projectTitle) => {
    setSelectedService('Software Development');
    setInquiryInitialMessage(`Interested in building a platform similar to the "${projectTitle}" case study.`);
    setIsContactOpen(true);
  };

  const handleContactSuccess = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 transition-colors duration-300 flex flex-col justify-between">
      
      {/* Top Backend Status Banner */}
      <div className="bg-gradient-to-r from-brand-700 via-brand-600 to-indigo-600 text-white text-[11px] py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="bg-white/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-[10px]">
              Registered AI & Tech • Nepal
            </span>
            <span className="hidden sm:inline">
              Aarohan Technology • Build. Innovate. Success.
            </span>
          </div>

          <div className="flex items-center space-x-3 text-[11px] text-blue-100 font-medium">
            <span>📍 Balkumari, Lalitpur</span>
            <span>•</span>
            <span>Build. Innovate. Success.</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navbar
        onOpenContact={() => {
          setSelectedService('Software Development');
          setInquiryInitialMessage('');
          setIsContactOpen(true);
        }}
        onOpenInbox={() => setIsInboxOpen(true)}
        inquiryCount={inquiryCount}
        onSelectService={handleOpenContactForService}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onOpenContact={() => {
            setSelectedService('Software Development');
            setInquiryInitialMessage('');
            setIsContactOpen(true);
          }}
        />

        {/* Nonstop Moving Feature Stream */}
        <NonstopFeatureLine />

        <StatsSection />

        <ServicesSection onSelectService={handleOpenContactForService} />

        <AIStudioPreview onOpenContact={handleOpenContactForService} />

        <WorkflowSection onOpenContact={handleOpenContactForService} />

        <WhyChooseUs />

        <ProjectsSection onSelectProject={handleOpenContactForProject} />

        <TeamSection />

        <ReviewsSection />

        <TechStack />

        <FAQSection onOpenContact={handleOpenContactForService} />

        <LocationSection
          onOpenContact={() => {
            setSelectedService('Software Development');
            setInquiryInitialMessage('');
            setIsContactOpen(true);
          }}
        />

        <CTASection
          onOpenContact={() => {
            setSelectedService('Software Development');
            setInquiryInitialMessage('');
            setIsContactOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => {
          setSelectedService('Software Development');
          setInquiryInitialMessage('');
          setIsContactOpen(true);
        }}
      />

      {/* Floating Action Hub (WhatsApp & Quick Inquiry) */}
      <FloatingQuickConnect onOpenContact={handleOpenContactForService} />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={selectedService}
        initialMessage={inquiryInitialMessage}
        onSuccess={handleContactSuccess}
      />

      {/* Admin / Live Inquiries Inbox Modal */}
      <AdminInboxModal
        isOpen={isInboxOpen}
        onClose={() => setIsInboxOpen(false)}
        refreshTrigger={refreshTrigger}
      />

    </div>
  );
}

export default App;
