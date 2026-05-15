import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Award, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import PropertyCard from '../components/PropertyCard';

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    price: "₹5.2 Cr",
    title: "Authority Plot — Prime Location",
    location: "Sector 4, Greater Noida",
    features: [
      { icon: "square_foot", text: "500 sqm" },
      { icon: "verified", text: "Authority Approved", highlight: true },
    ],
    tag: "Featured",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=800&q=80",
    price: "₹3.1 Cr",
    title: "Corner Plot — High ROI Zone",
    location: "Sector 10, Noida Extension",
    features: [
      { icon: "square_foot", text: "300 sqm" },
      { icon: "verified", text: "Authority Approved", highlight: true },
    ],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=800&q=80",
    price: "₹1.5 Cr",
    title: "Residential Plot — Starter Invest",
    location: "Sector 1, Greater Noida West",
    features: [
      { icon: "square_foot", text: "150 sqm" },
      { icon: "verified", text: "Clear Title", highlight: true },
    ],
    tag: "Best Value",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=800&q=80",
    price: "₹2.4 Cr",
    title: "GNIDA Plot — Sec 22",
    location: "Sector 22, Greater Noida",
    features: [
      { icon: "square_foot", text: "200 sqm" },
      { icon: "verified", text: "GNIDA Approved", highlight: true },
    ],
    tag: "Authority Plot",
  },
];

const whyInvest = [
  { icon: TrendingUp, title: '18–22% ROI', desc: 'Historical appreciation in prime sectors since 2018.' },
  { icon: Shield, title: 'RERA Verified', desc: 'All plots come with clear legal titles and RERA registration.' },
  { icon: Award, title: 'Authority Backed', desc: 'GNIDA & NIDA authority plots — zero encumbrance.' },
];

export default function Plots() {
  return (
    <div style={{ background: '#0B0F19', minHeight: '100vh' }}>
      <PageHero
        title="Authority"
        titleAccent="Plots"
        subtitle="Secure your future with verified authority plots in prime sectors of Noida Extension and Greater Noida — the safest real estate investment."
        breadcrumb={[{ label: 'Plots' }]}
      />

      {/* Why Invest Strip */}
      <section className="py-14" style={{ background: '#080C14', borderTop: '1px solid rgba(212,175,55,0.10)', borderBottom: '1px solid rgba(212,175,55,0.10)' }}>
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,48px)]">
          <div className="section-label mb-8 inline-flex">Why Invest in Plots?</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyInvest.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 p-6 bg-surface-2/40 border border-brand-gold/10 rounded-xl hover:border-brand-gold/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-gold/12 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-brand-gold" />
                </div>
                <div>
                  <div className="font-manrope font-bold text-white text-[15px] mb-1">{title}</div>
                  <div className="text-gray-400 text-[13px] font-workSans leading-relaxed">{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,48px)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <h2 className="font-manrope font-black text-white leading-tight"
                style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em' }}>
                Available <span className="text-gradient-gold">Plots</span>
              </h2>
              <p className="text-gray-400 text-[14px] font-workSans mt-2">{properties.length} plots available now</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((prop, i) => (
              <PropertyCard key={prop.id} {...prop} index={i} ctaLabel="Enquire Now" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
