import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Shield, MessageCircle } from 'lucide-react';
import ownerProfile from '../assets/owner-profile.png';

const WA_URL = "https://wa.me/919582838885?text=Hi!%20I'd%20like%20to%20consult%20with%20your%20expert%20about%20a%20property%20in%20Noida%20Extension.";

const credentials = [
  { icon: Award, label: 'RERA Registered', sub: 'Certified Agent' },
  { icon: Star, label: '5.0 Rating', sub: '135+ Reviews' },
  { icon: Shield, label: 'Authority Plots', sub: 'Legal Expert' },
];

export default function ExpertSection() {
  return (
    <section className="py-[clamp(60px,8vw,120px)] relative overflow-hidden" style={{ background: '#0F1520' }}>
      {/* BG accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(212,175,55,1) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-[clamp(16px,4vw,48px)]">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 relative"
          >
            {/* Gold ring glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-gold/10 blur-xl animate-float" />
            <div className="absolute -inset-1 rounded-full border border-brand-gold/30" />
            <img
              src={ownerProfile}
              alt="Noida Extension Property Expert"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-brand-gold/25 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
            />
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-2 -right-2 bg-surface-2 border border-brand-gold/30 rounded-xl px-4 py-3 shadow-gold-sm"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-brand-gold text-xs">★</span>)}
                </div>
                <span className="font-manrope font-bold text-white text-[13px]">5.0</span>
              </div>
              <div className="text-gray-400 text-[11px] font-workSans mt-0.5">Google Verified</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center md:text-left"
          >
            <div className="section-label mb-6 inline-flex">Meet Your Expert</div>

            <h2 className="font-manrope font-black text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.02em' }}>
              Noida Extension's{' '}
              <span className="text-gradient-gold">Property Expert</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg font-workSans">
              With over a decade of expertise in the luxury real estate market, I specialize in finding premium addresses in Noida Extension's most coveted sectors — delivering transparent deals and white-glove service every step of the way.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {credentials.map(({ icon: Icon, label, sub }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-surface-2/60 border border-brand-gold/12 rounded-xl p-4 text-center hover:border-brand-gold/30 transition-all"
                >
                  <Icon size={20} className="text-brand-gold mx-auto mb-2" />
                  <div className="font-manrope font-bold text-white text-[13px] leading-snug">{label}</div>
                  <div className="text-gray-500 text-[11px] font-workSans mt-0.5">{sub}</div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-8 py-4 rounded-lg inline-flex items-center gap-2"
              >
                <MessageCircle size={15} />
                Consult Now
              </a>
              <a
                href="tel:+919582838885"
                className="px-8 py-4 border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/8 font-manrope font-bold text-[12px] tracking-widest uppercase rounded-lg transition-all inline-flex items-center gap-2"
              >
                📞 Call Direct
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
