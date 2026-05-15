import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '../assets/logo.png';

const WA_URL = "https://wa.me/919582838885?text=Hello!%20I%20found%20your%20website%20and%20I'm%20interested%20in%20learning%20more.";

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Properties For Sale', to: '/buy' },
  { label: 'Rental Properties', to: '/rent' },
  { label: 'Authority Plots', to: '/plots' },
  { label: 'Contact Us', to: '/contact' },
];

const services = [
  'Luxury Flats — Noida Ext.',
  'Authority Plots — Greater Noida',
  'Premium Rentals',
  'Investment Advisory',
  'Site Visit Booking',
  'Property Documentation',
];

export default function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden pt-20 pb-8" style={{ background: '#06090F', borderTop: '1px solid rgba(212,175,55,0.12)' }}>
        {/* Gold gradient top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/3 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-[clamp(16px,4vw,48px)]">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-gold/15 rounded-full blur-md" />
                  <img src={logo} alt="Dream Home Reality" className="relative w-12 h-12 object-cover rounded-full border border-brand-gold/20 bg-white" />
                </div>
                <div>
                  <span className="font-manrope font-black text-white text-lg leading-none block">Dream Home</span>
                  <span className="font-manrope font-medium text-brand-gold text-[11px] tracking-[0.2em] uppercase">Reality</span>
                </div>
              </Link>
              <p className="text-gray-400 text-[14px] leading-relaxed mb-6 font-workSans">
                Noida Extension's premier luxury real estate agency. Specializing in high-end flats and authority plots since 2014.
              </p>
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {['RERA Reg.', 'Google ⭐ 5.0', 'MahaRERA'].map(b => (
                  <span key={b} className="px-3 py-1 rounded-full text-[10px] font-manrope font-bold uppercase tracking-wider bg-brand-gold/8 border border-brand-gold/20 text-brand-gold">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-manrope font-bold text-white text-[12px] tracking-[0.15em] uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-brand-gold" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-brand-gold text-[14px] font-workSans transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-brand-gold transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-manrope font-bold text-white text-[12px] tracking-[0.15em] uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-brand-gold" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map(s => (
                  <li key={s} className="text-gray-400 text-[14px] font-workSans flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-gold/60 rounded-full flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-manrope font-bold text-white text-[12px] tracking-[0.15em] uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-brand-gold" />
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="text-brand-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-[13px] leading-relaxed font-workSans">
                    10th Floor, Galaxy Blue Sapphire Plaza,<br />
                    TS-1024, Haibatpur, Sector 4,<br />
                    Greater Noida
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} className="text-brand-gold flex-shrink-0" />
                  <a href="tel:+919582838885" className="text-gray-400 hover:text-brand-gold text-[13px] font-workSans transition-colors">
                    +91 9582838885
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={15} className="text-brand-gold flex-shrink-0" />
                  <a href="mailto:info@dreamhomereality.com" className="text-gray-400 hover:text-brand-gold text-[13px] font-workSans transition-colors">
                    info@dreamhomereality.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={15} className="text-brand-gold flex-shrink-0" />
                  <span className="text-gray-400 text-[13px] font-workSans">Mon–Sat: 10 AM – 7 PM</span>
                </li>
              </ul>

              {/* WhatsApp CTA */}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-2 btn-whatsapp text-[11px] tracking-widest uppercase"
              >
                <MessageCircle size={15} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-[12px] font-workSans">
              © 2025 Dream Home Reality. All rights reserved. Noida Extension's Premier Agency.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-brand-gold text-[11px] font-manrope uppercase tracking-wider transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-brand-gold text-[11px] font-manrope uppercase tracking-wider transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-brand-gold text-[11px] font-manrope uppercase tracking-wider transition-colors">Investment Guide</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Badge */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 300 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
          animation: 'pulseGold 2.5s ease-in-out infinite',
        }}
        title="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </motion.a>
    </>
  );
}
