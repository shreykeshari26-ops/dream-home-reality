import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import PropertyCard from '../components/PropertyCard';

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    price: "₹45,000 / mo",
    title: "3 BHK Fully Furnished Flat",
    location: "Sector 16B, Noida Extension",
    features: [
      { icon: "bed", text: "3 Beds" },
      { icon: "bathtub", text: "3 Baths" },
      { icon: "square_foot", text: "1,800 sqft" },
    ],
    tag: "Available Now",
    furnished: 'Furnished',
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1502672260266-1c1e5240980c?auto=format&fit=crop&w=800&q=80",
    price: "₹65,000 / mo",
    title: "4 BHK Premium Apartment",
    location: "Sector 150, Noida",
    features: [
      { icon: "bed", text: "4 Beds" },
      { icon: "bathtub", text: "4 Baths" },
      { icon: "square_foot", text: "2,400 sqft" },
    ],
    tag: "Featured",
    furnished: 'Furnished',
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    price: "₹25,000 / mo",
    title: "2 BHK Semi-Furnished",
    location: "Sector 10, Greater Noida West",
    features: [
      { icon: "bed", text: "2 Beds" },
      { icon: "bathtub", text: "2 Baths" },
      { icon: "square_foot", text: "1,200 sqft" },
    ],
    tag: "Available Now",
    furnished: 'Semi-Furnished',
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    price: "₹18,000 / mo",
    title: "2 BHK Budget Rental",
    location: "Sector 12, Noida Extension",
    features: [
      { icon: "bed", text: "2 Beds" },
      { icon: "bathtub", text: "2 Baths" },
      { icon: "square_foot", text: "1,050 sqft" },
    ],
    tag: "Available Now",
    furnished: 'Unfurnished',
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    price: "₹35,000 / mo",
    title: "3 BHK Semi-Furnished Luxury",
    location: "Sector 1, Noida Extension",
    features: [
      { icon: "bed", text: "3 Beds" },
      { icon: "bathtub", text: "3 Baths" },
      { icon: "square_foot", text: "1,700 sqft" },
    ],
    furnished: 'Semi-Furnished',
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    price: "₹90,000 / mo",
    title: "5 BHK Ultra Luxury Penthouse",
    location: "Sector 150, Noida",
    features: [
      { icon: "bed", text: "5 Beds" },
      { icon: "bathtub", text: "6 Baths" },
      { icon: "square_foot", text: "5,000 sqft" },
    ],
    tag: "Premium",
    furnished: 'Furnished',
  },
];

const FURNISHED_TABS = ['All', 'Furnished', 'Semi-Furnished', 'Unfurnished'];

export default function Rent() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? properties
    : properties.filter(p => p.furnished === activeTab);

  return (
    <div style={{ background: '#0B0F19', minHeight: '100vh' }}>
      <PageHero
        title="Premium"
        titleAccent="Rentals"
        subtitle="High-end rental apartments offering unmatched comfort, curated lifestyle amenities, and prime locations across Noida Extension."
        breadcrumb={[{ label: 'Rent' }]}
      />

      <section className="py-16 relative">
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,48px)]">
          {/* Furnished filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 mb-10 flex-wrap"
          >
            {FURNISHED_TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2 rounded-full font-manrope font-bold text-[12px] uppercase tracking-wider transition-all duration-200 border ${
                  activeTab === tab
                    ? 'bg-brand-gold text-surface-0 border-brand-gold'
                    : 'border-brand-gold/20 text-gray-400 hover:border-brand-gold/50 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
            <span className="ml-auto text-gray-500 text-[13px] font-workSans">{filtered.length} properties</span>
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((prop, i) => (
                <PropertyCard key={prop.id} {...prop} index={i} ctaLabel="Enquire Now" />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
