import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PageHero({ title, titleAccent, subtitle, breadcrumb = [], bgImage = null }) {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B0F19 0%, #111827 60%, #1a2030 100%)' }}>
      {/* Background image with overlay */}
      {bgImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-0/95 via-surface-0/80 to-surface-0/60" />
        </>
      )}

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gold glow blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-[clamp(16px,4vw,48px)]">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-[12px] font-manrope uppercase tracking-widest text-gray-500 mb-8"
          >
            <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
            {breadcrumb.map((item, i) => (
              <React.Fragment key={i}>
                <ChevronRight size={12} className="text-gray-600" />
                {item.href ? (
                  <Link to={item.href} className="hover:text-brand-gold transition-colors">{item.label}</Link>
                ) : (
                  <span className="text-brand-gold">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-manrope font-extrabold text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.02em' }}
        >
          {title}
          {titleAccent && (
            <>
              {' '}<span className="text-gradient-gold">{titleAccent}</span>
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-lg max-w-2xl leading-relaxed font-workSans"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Gold line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '60px' }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="h-0.5 bg-brand-gold mt-8 rounded-full"
        />
      </div>
    </section>
  );
}
