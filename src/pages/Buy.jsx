import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import PageHero from '../components/PageHero';
import PropertyCard from '../components/PropertyCard';

const properties = [
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
    tag: "Ready to Move",
    bhk: '4BHK',
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    price: "₹2.8 Cr",
    title: "3 BHK Premium Flat",
    location: "Sector 1, Noida Extension",
    features: [
      { icon: "bed", text: "3 Beds" },
      { icon: "bathtub", text: "3 Baths" },
      { icon: "square_foot", text: "2,100 sqft" },
    ],
    tag: "Under Construction",
    bhk: '3BHK',
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    price: "₹4.1 Cr",
    title: "4 BHK Ultra Luxury Villa",
    location: "Sector 10, Greater Noida West",
    features: [
      { icon: "bed", text: "4 Beds" },
      { icon: "bathtub", text: "5 Baths" },
      { icon: "square_foot", text: "4,500 sqft" },
    ],
    tag: "Premium",
    bhk: '4BHK',
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1502672260266-1c1e5240980c?auto=format&fit=crop&w=800&q=80",
    price: "₹1.9 Cr",
    title: "3 BHK Smart Home",
    location: "Sector 16B, Noida Extension",
    features: [
      { icon: "bed", text: "3 Beds" },
      { icon: "bathtub", text: "3 Baths" },
      { icon: "square_foot", text: "1,650 sqft" },
    ],
    tag: "New Launch",
    bhk: '3BHK',
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    price: "₹1.45 Cr",
    title: "2 BHK Contemporary Flat",
    location: "Sector 12, Noida Extension",
    features: [
      { icon: "bed", text: "2 Beds" },
      { icon: "bathtub", text: "2 Baths" },
      { icon: "square_foot", text: "1,100 sqft" },
    ],
    tag: "Ready to Move",
    bhk: '2BHK',
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    price: "₹5.8 Cr",
    title: "5 BHK Penthouse",
    location: "Sector 150, Noida",
    features: [
      { icon: "bed", text: "5 Beds" },
      { icon: "bathtub", text: "6 Baths" },
      { icon: "square_foot", text: "6,000 sqft" },
    ],
    tag: "Featured",
    bhk: '4BHK',
  },
];

const BHK_FILTERS = ['All', '2BHK', '3BHK', '4BHK'];

export default function Buy() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? properties
    : properties.filter(p => p.bhk === activeFilter);

  return (
    <div style={{ background: '#0B0F19', minHeight: '100vh' }}>
      <PageHero
        title="Properties"
        titleAccent="For Sale"
        subtitle="Curated selection of premium flats and villas available for purchase in Noida Extension — transparent pricing, verified titles."
        breadcrumb={[{ label: 'Buy' }]}
      />

      <section className="py-16 relative">
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,48px)]">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 mb-10 flex-wrap"
          >
            <SlidersHorizontal size={16} className="text-brand-gold" />
            <span className="text-gray-500 text-[12px] font-manrope uppercase tracking-wider mr-2">Filter:</span>
            {BHK_FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`relative px-5 py-2 rounded-full font-manrope font-bold text-[12px] uppercase tracking-wider transition-all duration-200 border ${
                  activeFilter === f
                    ? 'bg-brand-gold text-surface-0 border-brand-gold'
                    : 'border-brand-gold/20 text-gray-400 hover:border-brand-gold/50 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto text-gray-500 text-[13px] font-workSans">{filtered.length} properties</span>
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
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
