import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/buy', label: 'Buy' },
  { to: '/rent', label: 'Rent' },
  { to: '/plots', label: 'Plots' },
  { to: '/contact', label: 'Contact' },
];

const WA_URL = "https://wa.me/919582838885?text=Hi%20Dream%20Home%20Reality!%20I%20found%20your%20website%20and%20I'm%20interested%20in%20learning%20more.";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative font-manrope text-[12px] tracking-widest uppercase font-semibold transition-all duration-200 py-1
    ${isActive
      ? 'text-brand-gold after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-brand-gold'
      : 'text-gray-400 hover:text-white'}`;

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-surface-1">
        <motion.div
          className="h-full bg-brand-gold origin-left"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-nav'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="flex justify-between items-center h-20 px-[clamp(16px,4vw,48px)] max-w-[1280px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-md group-hover:bg-brand-gold/35 transition-all" />
              <img
                src={logo}
                alt="Dream Home Reality"
                className="relative w-[45px] h-[45px] object-cover rounded-full border border-brand-gold/25"
              />
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-manrope font-black text-white text-[17px] tracking-tight leading-none block">
                Dream Home
              </span>
              <span className="font-manrope font-medium text-brand-gold text-[11px] tracking-[0.2em] uppercase">
                Reality
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919582838885"
              className="font-manrope text-[11px] tracking-widest uppercase text-gray-400 hover:text-brand-gold transition-colors font-semibold"
            >
              +91 9582838885
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-bright text-surface-0 font-manrope font-bold text-[11px] tracking-widest uppercase px-5 py-2.5 rounded transition-all duration-200 hover:shadow-gold-md"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden p-2 text-white hover:text-brand-gold transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden glass-nav border-t border-brand-gold/10"
            >
              <nav className="flex flex-col px-6 py-6 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `block py-3 px-4 rounded-lg font-manrope font-semibold text-[13px] uppercase tracking-widest transition-all duration-200 border border-transparent
                        ${isActive ? 'text-brand-gold bg-brand-gold/8 border-brand-gold/20' : 'text-gray-300 hover:text-white hover:bg-white/5'}`
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-4 pt-4 border-t border-brand-gold/10 flex flex-col gap-3"
                >
                  <a
                    href="tel:+919582838885"
                    className="text-center py-3 border border-brand-gold/25 rounded-lg text-brand-gold font-manrope font-semibold text-[12px] tracking-widest uppercase"
                  >
                    📞 +91 9582838885
                  </a>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-center py-3 rounded-lg text-[12px] tracking-widest"
                    onClick={() => setMobileOpen(false)}
                  >
                    💬 Chat on WhatsApp
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
