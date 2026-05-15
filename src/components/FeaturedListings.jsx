import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from './PropertyCard';

const featuredProperties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    price: "₹3.5 Cr",
    title: "4 BHK Luxury Apartment",
    location: "Sector 150, Noida",
    features: [
      { icon: "bed", text: "4 Beds" },
      { icon: "bathtub", text: "4 Baths" },
      { icon: "square_foot", text: "3,200 sqft" },
    ],
    tag: "Featured",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    price: "₹5.2 Cr",
    title: "Authority Plot — Prime Sector",
    location: "Sector 4, Greater Noida",
    features: [
      { icon: "square_foot", text: "500 sqm" },
      { icon: "verified", text: "Authority Approved", highlight: true },
    ],
    tag: "Authority Plot",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    price: "₹2.8 Cr",
    title: "3 BHK Premium Flat",
    location: "Sector 1, Noida Extension",
    features: [
      { icon: "bed", text: "3 Beds" },
      { icon: "bathtub", text: "3 Baths" },
      { icon: "square_foot", text: "2,100 sqft" },
    ],
    tag: "Ready to Move",
  },
];

export default function FeaturedListings() {
  return (
    <section id="featured" className="py-[clamp(60px,8vw,120px)] relative overflow-hidden" style={{ background: '#0B0F19' }}>
      {/* Gold orb */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-[clamp(16px,4vw,48px)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4"
        >
          <div>
            <div className="section-label mb-4">Curated Portfolio</div>
            <h2 className="font-manrope font-black text-white leading-tight"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}>
              Premium Listings
              <br />
              <span className="text-gradient-gold">Noida Extension</span>
            </h2>
          </div>
          <Link
            to="/buy"
            className="flex items-center gap-2 text-brand-gold hover:text-brand-gold-bright font-manrope font-semibold text-[12px] uppercase tracking-widest transition-colors group"
          >
            View All Properties
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((prop, i) => (
            <PropertyCard key={prop.id} {...prop} index={i} ctaLabel="Enquire Now" />
          ))}
        </div>
      </div>
    </section>
  );
}
