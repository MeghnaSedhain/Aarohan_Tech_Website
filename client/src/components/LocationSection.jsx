import React from 'react';
import { MapPin, Navigation, Clock, Mail, Phone, ExternalLink, Building2, MessageSquare } from 'lucide-react';

const LocationSection = ({ onOpenContact }) => {
  const address = "1st Floor, Nepal Red Cross Society Building, Balkumari, Lalitpur, Nepal";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Nepal Red Cross Society Building, Balkumari, Lalitpur, Nepal")}`;
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent("Nepal Red Cross Society Building, Balkumari, Lalitpur, Nepal")}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1 rounded-full border border-blue-200/50 dark:border-blue-800/50">
          LOCATION & HEADQUARTERS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
          Find Us in Lalitpur
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
          Drop by our engineering office for a coffee or architecture whiteboard session.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Office Details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white dark:bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700 shadow-sm text-left">
          
          <div className="space-y-6">
            
            {/* Office Title */}
            <div className="flex items-center space-x-3 pb-4 border-b border-slate-100 dark:border-slate-700/80">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                  Aarohan Technology Pvt. Ltd.
                </h3>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold">
                  Engineering Headquarters
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="flex items-start space-x-3.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Physical Address
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mt-0.5">
                  1st Floor, Nepal Red Cross Society Building<br />
                  Balkumari, Lalitpur, Bagmati Province, Nepal
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start space-x-3.5">
              <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Working Hours
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-0.5">
                  Sunday – Friday: 10:00 AM – 6:00 PM (NPT)<br />
                  <span className="text-[11px] text-slate-400">Engineering support 24/7 on-call</span>
                </p>
              </div>
            </div>

            {/* Email & Contact */}
            <div className="flex items-start space-x-3.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Email & Inquiries
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-0.5">
                  info@aarohantech.com<br />
                  contact@aarohantech.com
                </p>
              </div>
            </div>

            {/* Official WhatsApp Support */}
            <div className="flex items-start space-x-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Official WhatsApp
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-0.5">
                  <a 
                    href="https://wa.me/19702793295" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                  >
                    +1 (970) 279-3295
                  </a>
                  <span className="block text-[11px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">
                    (WhatsApp Messages & Quotes Only • No Direct Calls)
                  </span>
                </p>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-700/80 flex flex-wrap gap-3">
            <a
              href="https://wa.me/19702793295?text=Hello%20Aarohan%20Technology,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-emerald-600/25 transition group"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Message</span>
              <ExternalLink className="w-3 h-3 opacity-75" />
            </a>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-brand-500/25 transition group"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3 opacity-75" />
            </a>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center space-x-2 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-semibold px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-600 transition"
            >
              <span>Schedule a Visit</span>
            </button>
          </div>

        </div>

        {/* Right Column: Interactive Google Map */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700 shadow-lg relative min-h-[360px] lg:min-h-[460px] bg-slate-100 dark:bg-slate-800">
          
          {/* Google Maps iFrame */}
          <iframe
            title="Aarohan Technology Office Location"
            src={embedUrl}
            className="w-full h-full min-h-[380px] lg:min-h-[460px] border-0 filter contrast-[1.02]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Overlay Pill Badge on Top of Map */}
          <div className="absolute top-4 left-4 right-4 sm:right-auto z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-blue-100 dark:border-slate-700 shadow-xl flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 animate-bounce" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                Aarohan Technology
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                1st Floor, Nepal Red Cross Society Bldg, Balkumari
              </div>
            </div>
          </div>

          {/* Open full map shortcut in bottom right */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 z-10 bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-brand-600 dark:text-brand-400 shadow-md flex items-center space-x-1.5 transition"
          >
            <span>View Full Map</span>
            <ExternalLink className="w-3 h-3" />
          </a>

        </div>

      </div>

    </section>
  );
};

export default LocationSection;
