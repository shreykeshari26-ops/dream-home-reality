import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle, ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';

const WA_URL = "https://wa.me/919582838885?text=Hi%20Dream%20Home%20Reality!%20I'd%20like%20to%20get%20in%20touch.";
const MAPS_LINK = "https://maps.google.com/?q=Galaxy+Blue+Sapphire+Plaza+TS-1024+Haibatpur+Sector+4+Greater+Noida";

const contactInfo = [
  {
    icon: MapPin,
    label: 'Our Office',
    value: '10th Floor, Galaxy Blue Sapphire Plaza, TS-1024, Haibatpur, Sector 4, Greater Noida',
    href: MAPS_LINK,
    isAddress: true,
  },
  {
    icon: Phone,
    label: 'Primary Number',
    value: '+91 9582838885',
    href: 'tel:+919582838885',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@dreamhomereality.com',
    href: 'mailto:info@dreamhomereality.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Sat: 10:00 AM – 7:00 PM\nSunday: By Appointment Only',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/[\s+\-()]/g, ''))) e.phone = 'Enter a valid 10-digit mobile number';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    const msg = `Hi Dream Home Reality!\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.open(`https://wa.me/919582838885?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div style={{ background: '#0B0F19', minHeight: '100vh' }}>
      <PageHero
        title="Get In"
        titleAccent="Touch"
        subtitle="Connect with our expert advisors for personalized real estate guidance across Noida Extension and Greater Noida."
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="py-16 relative">
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,48px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Contact info + Map */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div>
                <div className="section-label mb-4">Find Us</div>
                <h2 className="font-manrope font-black text-white text-3xl leading-tight mb-2" style={{ letterSpacing: '-0.02em' }}>
                  Our <span className="text-gradient-gold">Office</span>
                </h2>
              </div>

              {/* Contact Details */}
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href, isAddress }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.55 }}
                    className="flex items-start gap-4 p-4 bg-surface-2/40 border border-brand-gold/10 rounded-xl hover:border-brand-gold/25 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/12 border border-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-brand-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-manrope font-semibold text-[11px] uppercase tracking-widest text-brand-gold/70 mb-1">{label}</div>
                      {href ? (
                        <a
                          href={href}
                          target={isAddress ? '_blank' : undefined}
                          rel={isAddress ? 'noopener noreferrer' : undefined}
                          className="text-slate-100 text-[14px] font-workSans leading-relaxed hover:text-brand-gold transition-colors flex items-start gap-1.5 group"
                        >
                          <span>{value}</span>
                          {isAddress && <ExternalLink size={12} className="text-gray-500 group-hover:text-brand-gold mt-1 flex-shrink-0 transition-colors" />}
                        </a>
                      ) : (
                        <p className="text-slate-100 text-[14px] font-workSans leading-relaxed whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Square Google Map */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-md md:max-w-lg"
              >
                <div className="aspect-square w-full rounded-2xl overflow-hidden border-2 border-brand-gold/50 shadow-gold-md">
                  <iframe
                    title="Dream Home Reality Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9254870986835!2d77.50655537607847!3d28.468611592021705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e16c6ddf8b%3A0xa5d4c1e61249e9c5!2sGalaxy%20Blue%20Sapphire%20Plaza%2C%20Sector%204%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1716234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) saturate(0.8)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Map caption */}
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-gray-400 text-[12px] font-workSans">Galaxy Blue Sapphire Plaza, Sector 4, Greater Noida</p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-brand-gold text-[12px] font-manrope font-semibold uppercase tracking-wider transition-colors flex items-center gap-1"
                  >
                    Open Map <ExternalLink size={11} />
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp Direct */}
              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex mt-2 text-[12px] tracking-widest uppercase font-bold px-8 py-4 rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={18} />
                Chat on WhatsApp Now
              </motion.a>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-surface-2 border border-brand-gold/15 rounded-2xl p-8 md:p-12 overflow-hidden sticky top-28"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold/3 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 relative z-10"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.12, 1] }}
                      transition={{ repeat: 2, duration: 0.4 }}
                      className="w-20 h-20 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/25"
                    >
                      <CheckCircle size={36} className="text-green-400" />
                    </motion.div>
                    <h3 className="font-manrope font-black text-white text-2xl mb-3">Opening WhatsApp!</h3>
                    <p className="text-slate-200 font-workSans mb-2">We've received your inquiry.</p>
                    <p className="text-gray-400 text-[13px] font-workSans mb-8">Our team will respond within 2–4 hours during business hours.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-brand-gold text-[12px] font-manrope font-bold uppercase tracking-widest hover:underline"
                    >
                      ← Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10">
                    <h3 className="font-manrope font-black text-white text-2xl mb-1">Send us a Message</h3>
                    <p className="text-slate-300 text-[14px] font-workSans mb-8">We'll get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      {/* Name */}
                      <div>
                        <label className="block font-manrope font-semibold text-[11px] uppercase tracking-[0.12em] text-slate-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className={`input-dark ${errors.name ? 'border-red-400' : ''}`}
                          placeholder="Rahul Sharma"
                          value={form.name}
                          onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: '' })); }}
                        />
                        {errors.name && <p className="text-red-400 text-[11px] mt-1 font-workSans">{errors.name}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block font-manrope font-semibold text-[11px] uppercase tracking-[0.12em] text-slate-300 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          className={`input-dark ${errors.phone ? 'border-red-400' : ''}`}
                          placeholder="+91 9582838885"
                          value={form.phone}
                          onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(er => ({ ...er, phone: '' })); }}
                        />
                        {errors.phone && <p className="text-red-400 text-[11px] mt-1 font-workSans">{errors.phone}</p>}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block font-manrope font-semibold text-[11px] uppercase tracking-[0.12em] text-slate-300 mb-2">
                          Your Message *
                        </label>
                        <textarea
                          rows={4}
                          className={`input-dark resize-none ${errors.message ? 'border-red-400' : ''}`}
                          placeholder="I'm interested in a 3BHK flat in Sector 1, Noida Extension..."
                          value={form.message}
                          onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: '' })); }}
                        />
                        {errors.message && <p className="text-red-400 text-[11px] mt-1 font-workSans">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        className="w-full btn-gold py-4 rounded-xl mt-2 flex items-center justify-center gap-2 text-[13px]"
                      >
                        <MessageCircle size={16} />
                        Submit via WhatsApp
                      </button>

                      <p className="text-gray-500 text-[11px] font-workSans text-center">
                        By submitting you'll be redirected to WhatsApp to confirm your message.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
