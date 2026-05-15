import React from 'react';
import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import ExpertSection from '../components/ExpertSection';
import FeaturedListings from '../components/FeaturedListings';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import LeadGen from '../components/LeadGen';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <ExpertSection />
      <FeaturedListings />
      <TestimonialsCarousel />
      <LeadGen />
    </>
  );
}
