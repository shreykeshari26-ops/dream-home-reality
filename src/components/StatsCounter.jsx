import React, { useRef } from 'react';
import { motion, useInView, useSpring, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

function CountUp({ target, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const controls = animate(0, parseInt(target), {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = prefix + Math.floor(value) + suffix;
        }
      },
    });
    return controls.stop;
  }, [isInView, target, suffix, prefix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const stats = [
  { value: '500', suffix: '+', label: 'Happy Families', sublabel: 'Homes Delivered', icon: '🏡' },
  { value: '200', suffix: 'Cr+', prefix: '₹', label: 'In Transactions', sublabel: 'Total Deal Value', icon: '💰' },
  { value: '10', suffix: '+', label: 'Years Experience', sublabel: 'Market Expertise', icon: '🏆' },
  { value: '135', suffix: '+', label: 'Google Reviews', sublabel: '5.0 ★ Rating', icon: '⭐' },
];

export default function StatsCounter() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden" style={{ background: '#080C14' }}>
      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

      {/* Decorative bg pattern */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(212,175,55,1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-[clamp(16px,4vw,48px)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-center lg:text-left flex flex-col items-center lg:items-start px-6 py-8 rounded-xl border border-brand-gold/8 bg-surface-2/30 hover:border-brand-gold/25 transition-all duration-300 group"
            >
              <span className="text-3xl mb-3">{stat.icon}</span>
              <div className="font-manrope font-black text-4xl md:text-5xl text-white leading-none mb-2 group-hover:text-brand-gold transition-colors">
                {isInView && <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix || ''} />}
              </div>
              <div className="font-manrope font-600 text-brand-gold text-[13px] uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-gray-500 text-[12px] font-workSans">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
    </section>
  );
}
