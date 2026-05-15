import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize2, Heart, Eye, Phone } from 'lucide-react';

const iconMap = {
  bed: Bed,
  bathtub: Bath,
  square_foot: Maximize2,
  verified: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
    </svg>
  ),
};

const TAG_COLORS = {
  'Featured':         'bg-brand-gold text-surface-0',
  'Ready to Move':    'bg-green-500/90 text-white',
  'Under Construction':'bg-amber-500/90 text-white',
  'Premium':          'bg-purple-500/90 text-white',
  'New Launch':       'bg-blue-500/90 text-white',
  'Available Now':    'bg-green-500/90 text-white',
  'Best Value':       'bg-rose-500/90 text-white',
  'Authority Plot':   'bg-brand-gold text-surface-0',
};

export default function PropertyCard({ image, price, title, location, features = [], tag, ctaLabel = 'View Details', index = 0 }) {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const tagClass = TAG_COLORS[tag] || 'bg-brand-gold text-surface-0';

  const waLink = `https://wa.me/919582838885?text=Hi%20Dream%20Home%20Reality!%20I'm%20interested%20in%20${encodeURIComponent(title)}%20at%20${encodeURIComponent(location)}%20priced%20at%20${encodeURIComponent(price)}.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-surface-2 border border-brand-gold/10 rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:border-brand-gold/35 transition-all duration-400 flex flex-col"
      style={{ transition: 'box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease' }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-0/80 via-transparent to-transparent" />

        {/* Tag */}
        {tag && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase font-manrope ${tagClass}`}>
            {tag}
          </div>
        )}

        {/* Like */}
        <button
          onClick={() => setLiked(l => !l)}
          className="absolute top-3 right-3 p-2 rounded-full bg-surface-0/50 backdrop-blur-sm border border-white/10 hover:border-brand-gold/40 transition-all"
        >
          <Heart
            size={16}
            className={liked ? 'fill-rose-500 text-rose-500' : 'text-white/70 hover:text-brand-gold'}
            style={{ transition: 'all 0.2s' }}
          />
        </button>

        {/* Price badge at bottom of image */}
        <div className="absolute bottom-3 left-3">
          <span className="text-xl font-bold font-manrope text-white drop-shadow-lg">{price}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-manrope font-700 text-[17px] text-white mb-1 leading-snug group-hover:text-brand-gold transition-colors">{title}</h3>
        <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
          <MapPin size={13} className="text-brand-gold flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/5 text-gray-400 text-[13px] mb-5 flex-wrap">
          {features.map((f, i) => {
            const IconComp = iconMap[f.icon];
            return (
              <div key={i} className={`flex items-center gap-1 ${f.highlight ? 'text-brand-gold' : ''}`}>
                {IconComp && <IconComp size={14} className={f.highlight ? 'text-brand-gold' : 'text-gray-500'} />}
                <span>{f.text}</span>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex gap-2 mt-auto">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-bright text-surface-0 font-manrope font-bold text-[11px] tracking-widest uppercase py-3 rounded transition-all duration-200 hover:shadow-gold-md"
          >
            <Phone size={13} />
            {ctaLabel}
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-3 border border-brand-gold/25 hover:border-brand-gold/60 rounded text-brand-gold/70 hover:text-brand-gold transition-all"
            title="Quick View"
          >
            <Eye size={15} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
