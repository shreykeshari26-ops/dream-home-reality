import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, MessageCircle, User, Phone, Home } from 'lucide-react';

const WA_BOOK = "https://wa.me/919582838885?text=Hi%20Dream%20Home%20Reality!%20I'd%20like%20to%20book%20a%20private%20site%20visit.";

const testimonials = [
  { name: 'Rahul Sharma', text: 'Found our dream 4 BHK in just 2 weeks. Exceptional service!', sector: 'Sector 150, Noida' },
  { name: 'Priya Mehta', text: 'Very professional. Got us an authority plot at the best price.', sector: 'Sector 4, Greater Noida' },
  { name: 'Anil Gupta', text: 'Complete transparency throughout the entire process. Highly recommended.', sector: 'Noida Extension' },
];

export default function LeadGen() {
  const [form, setForm] = useState({ name: '', phone: '', interest: 'Luxury Flat' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, ''))) e.phone = 'Enter a valid 10-digit mobile number';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    const waMsg = `Hi Dream Home Reality! I'm ${form.name} and I'm interested in ${form.interest}. My number is ${form.phone}.`;
    window.open(`https://wa.me/919582838885?text=${encodeURIComponent(waMsg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="leadgen" className="py-[clamp(60px,8vw,120px)] relative overflow-hidden" style={{ background: '#0F1520' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-[clamp(16px,4vw,48px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label mb-6">Trusted By Hundreds</div>
            <h2 className="font-manrope font-black text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.02em' }}>
              Trusted By{' '}
              <span className="text-gradient-gold">Discerning</span>
              <br />Buyers Across NCR
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg font-workSans">
              Our commitment to transparency, exclusivity, and architectural precision has made us the premier choice for luxury real estate in Noida Extension.
            </p>

            {/* Google Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-5 bg-surface-2/60 border border-brand-gold/15 rounded-xl px-6 py-5 mb-10 hover:border-brand-gold/30 transition-all"
            >
              <div className="text-center">
                <div className="font-manrope font-black text-white text-3xl leading-none">5.0</div>
                <div className="flex mt-1">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-brand-gold text-sm">★</span>)}
                </div>
              </div>
              <div className="h-12 w-px bg-white/8" />
              <div>
                <div className="font-manrope font-bold text-white text-lg leading-none">135+ Reviews</div>
                <div className="text-gray-400 text-[13px] font-workSans mt-1 flex items-center gap-1">
                  on Google <span className="text-brand-gold ml-1">✓</span>
                </div>
              </div>
            </motion.div>

            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-surface-2/40 border border-white/5 rounded-xl hover:border-brand-gold/15 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-gold/15 border border-brand-gold/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User size={14} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-[13px] font-workSans leading-relaxed italic mb-1">"{t.text}"</p>
                    <p className="text-brand-gold text-[11px] font-manrope font-bold">{t.name} · {t.sector}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-surface-2 border border-brand-gold/15 rounded-2xl p-8 md:p-12 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: 2 }}
                    className="w-16 h-16 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle size={32} className="text-green-400" />
                  </motion.div>
                  <h3 className="font-manrope font-bold text-white text-2xl mb-3">Opening WhatsApp!</h3>
                  <p className="text-gray-400 font-workSans mb-6">We'll get back to you within hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-brand-gold text-[12px] font-manrope font-bold uppercase tracking-widest hover:underline">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="font-manrope font-black text-white text-2xl mb-1 relative z-10">Schedule a Private Viewing</h3>
                  <p className="text-gray-400 text-[14px] font-workSans mb-8 relative z-10">Connect with our dedicated luxury property advisors.</p>

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
                    <div>
                      <label className="block font-manrope font-semibold text-[11px] uppercase tracking-[0.12em] text-gray-400 mb-2">
                        Full Name
                      </label>
                      <input
                        className={`input-dark ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="Rahul Sharma"
                        type="text"
                        value={form.name}
                        onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: '' })); }}
                      />
                      {errors.name && <p className="text-red-400 text-[11px] mt-1 font-workSans">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block font-manrope font-semibold text-[11px] uppercase tracking-[0.12em] text-gray-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        className={`input-dark ${errors.phone ? 'border-red-500' : ''}`}
                        placeholder="+91 9582838885"
                        type="tel"
                        value={form.phone}
                        onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(er => ({ ...er, phone: '' })); }}
                      />
                      {errors.phone && <p className="text-red-400 text-[11px] mt-1 font-workSans">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block font-manrope font-semibold text-[11px] uppercase tracking-[0.12em] text-gray-400 mb-2">
                        Property Interest
                      </label>
                      <select
                        className="input-dark"
                        value={form.interest}
                        onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}
                        style={{ WebkitAppearance: 'none' }}
                      >
                        <option className="bg-surface-2 text-white">Luxury Flat</option>
                        <option className="bg-surface-2 text-white">Authority Plot</option>
                        <option className="bg-surface-2 text-white">Commercial Space</option>
                        <option className="bg-surface-2 text-white">Rental Property</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-gold py-4 rounded-lg mt-4 flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={15} />
                      Book Site Visit via WhatsApp
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
