import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Amit Sharma',
    handle: '@amitsharma_ncr',
    rating: 5,
    text: 'Deepak Chauhan helped us find the perfect 3BHK flat in Greater Noida West. Very professional service and completely transparent dealing! Could not have asked for a better experience.',
    location: 'Greater Noida West',
    date: '2 weeks ago',
    avatar: 'AS',
    color: '#4F46E5',
  },
  {
    id: 2,
    name: 'Rajesh Keshari',
    handle: '@rajeshkeshari',
    rating: 5,
    text: 'Best real estate consultant for Authority Plots in Noida Extension. Highly recommended for their honest advice. The team went above and beyond to ensure we got the right plot at the right price.',
    location: 'Sector 4, Greater Noida',
    date: '1 month ago',
    avatar: 'RK',
    color: '#D4AF37',
  },
  {
    id: 3,
    name: 'Preeti Singh',
    handle: '@preetisingh_noida',
    rating: 5,
    text: 'Great experience purchasing our luxury apartment through Dream Home Reality. Their office at Galaxy Blue Sapphire Plaza made the documentation process completely seamless. Truly a 5-star agency.',
    location: 'Sector 150, Noida',
    date: '3 weeks ago',
    avatar: 'PS',
    color: '#10B981',
  },
  {
    id: 4,
    name: 'Manish Agarwal',
    handle: '@manishagarwal',
    rating: 5,
    text: 'Fantastic service! Got exactly what I was looking for — a RERA-certified 4BHK in Sector 1. The team was always available and made the entire process stress-free.',
    location: 'Noida Extension',
    date: '2 months ago',
    avatar: 'MA',
    color: '#EF4444',
  },
];

const AUTOPLAY_MS = 4500;

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent(c => (c + 1) % reviews.length);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const go = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    startTimer();
  };
  const prev = () => go((current - 1 + reviews.length) % reviews.length);
  const next = () => go((current + 1) % reviews.length);

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40, scale: 0.97, transition: { duration: 0.35 } }),
  };

  const review = reviews[current];

  return (
    <section className="py-[clamp(60px,8vw,120px)] relative overflow-hidden" style={{ background: '#0B0F19' }}>
      {/* Gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      {/* Decorative blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-[clamp(16px,4vw,48px)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-label mb-4 inline-flex">What Our Clients Say</div>
          <h2 className="font-manrope font-black text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.02em' }}>
            Trusted By Buyers{' '}
            <span className="text-gradient-gold">Across NCR</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Card */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={review.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-surface-2 border border-brand-gold/12 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

              {/* Quote icon */}
              <Quote size={40} className="text-brand-gold/20 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="text-brand-gold text-lg"
                  >★</motion.span>
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-100 text-lg md:text-xl leading-relaxed font-workSans font-light mb-8">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-manrope font-black text-white text-[15px] flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${review.color}90, ${review.color}40)`, border: `2px solid ${review.color}40` }}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="font-manrope font-bold text-white text-[15px]">{review.name}</div>
                  <div className="text-gray-400 text-[13px] font-workSans">{review.location} · {review.date}</div>
                </div>

                {/* Google logo */}
                <div className="ml-auto flex items-center gap-1.5 text-gray-500 text-[11px] font-manrope uppercase tracking-wider">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google Review
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-brand-gold w-8' : 'bg-white/15 hover:bg-white/30 w-1.5'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-brand-gold/25 text-brand-gold hover:bg-brand-gold hover:text-surface-0 flex items-center justify-center transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-brand-gold/25 text-brand-gold hover:bg-brand-gold hover:text-surface-0 flex items-center justify-center transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-px bg-white/5 rounded-full overflow-hidden">
            <motion.div
              key={`progress-${current}`}
              className="h-full bg-brand-gold/50 rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
