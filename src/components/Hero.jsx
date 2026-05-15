import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Search, MapPin, Home, ChevronDown, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import shopFront from '../assets/shop-front.png';

const WA_URL = "https://wa.me/919582838885?text=Hi%20Dream%20Home%20Reality!%20I'd%20like%20to%20schedule%20a%20site%20visit.";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState('buy');
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  const handleSearch = () => {
    navigate(`/${activeTab}`);
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0B0F19' }}
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <motion.img
          src={shopFront}
          alt="Dream Home Reality Office Front"
          className="w-full h-full object-cover"
          style={{ opacity: bgOpacity }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Layered overlays */}
      <div className="absolute inset-0 z-[1]" style={{
        background: 'linear-gradient(to bottom, rgba(11,15,25,0.7) 0%, rgba(11,15,25,0.5) 40%, rgba(11,15,25,0.9) 100%)',
      }} />
      <div className="absolute inset-0 z-[2]" style={{
        background: 'radial-gradient(ellipse at 60% 40%, rgba(212,175,55,0.04) 0%, transparent 70%)',
      }} />

      {/* Decorative grid */}
      <div className="absolute inset-0 z-[3] opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,48px)] pt-28 pb-24">
        {/* Label pill */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <span className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block animate-pulse" />
            Noida Extension's Premier Real Estate Agency
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-manrope font-black text-white leading-tight mb-6 max-w-4xl"
          style={{ fontSize: 'clamp(38px, 6vw, 80px)', letterSpacing: '-0.025em' }}
        >
          FIND YOUR{' '}
          <span className="text-gradient-gold">PREMIUM ADDRESS</span>
          <br />
          IN NOIDA EXTENSION
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-workSans font-light"
        >
          Specializing in luxury flats &amp; authority plots. Expert guidance, transparent deals, premium addresses.
        </motion.p>

        {/* Search Interface */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="bg-surface-2/90 backdrop-blur-sm border border-brand-gold/15 rounded-xl p-2 max-w-3xl shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
        >
          {/* Tabs */}
          <div className="flex gap-1 mb-3 px-2 pt-2">
            {[
              { id: 'buy', label: 'Buy' },
              { id: 'rent', label: 'Rent' },
              { id: 'plots', label: 'Plots' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2 rounded-lg font-manrope font-bold text-[11px] uppercase tracking-widest transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'text-surface-0'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand-gold rounded-lg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Search Row */}
          <div className="flex flex-col md:flex-row gap-0 md:gap-0 bg-surface-1/80 rounded-lg overflow-hidden border border-white/5">
            {/* Location Input */}
            <div className="flex-1 flex items-center px-4 py-4 border-b md:border-b-0 md:border-r border-white/5">
              <MapPin size={16} className="text-brand-gold mr-3 flex-shrink-0" />
              <input
                className="w-full bg-transparent outline-none text-white placeholder:text-gray-500 text-[14px] font-workSans"
                placeholder="Search by sector or project..."
                type="text"
              />
            </div>

            {/* Property Type */}
            <div className="flex-1 flex items-center px-4 py-4 border-b md:border-b-0 md:border-r border-white/5 relative">
              <Home size={16} className="text-brand-gold mr-3 flex-shrink-0" />
              <select className="w-full bg-transparent outline-none text-[14px] font-workSans appearance-none cursor-pointer text-gray-300">
                <option className="text-surface-0 bg-surface-2">Property Type</option>
                <option className="text-surface-0 bg-surface-2">2 BHK Flat</option>
                <option className="text-surface-0 bg-surface-2">3 BHK Flat</option>
                <option className="text-surface-0 bg-surface-2">4 BHK Luxury</option>
                <option className="text-surface-0 bg-surface-2">Authority Plot</option>
              </select>
              <ChevronDown size={14} className="text-gray-500 absolute right-4 pointer-events-none" />
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-bright text-surface-0 font-manrope font-bold text-[11px] tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:shadow-gold-md"
            >
              <Search size={16} />
              Search
            </button>
          </div>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-6 mt-10"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="text-brand-gold text-sm">★</span>
              ))}
            </div>
            <span className="text-gray-400 text-[13px] font-workSans">5.0 on Google · 135+ reviews</span>
          </div>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <span className="text-gray-400 text-[13px] font-workSans">500+ families housed</span>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#25D366] hover:text-green-400 text-[13px] font-manrope font-semibold transition-colors"
          >
            <MessageCircle size={14} />
            Quick Inquiry
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-[10px] font-manrope uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-brand-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
