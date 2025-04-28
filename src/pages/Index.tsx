
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DestinationsSection from '@/components/DestinationsSection';
import CultureSection from '@/components/CultureSection';
import CuisineSection from '@/components/CuisineSection';
import PlanTripSection from '@/components/PlanTripSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
 
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top navigation bar */}
      <Navbar transparent={true} />
      <main>
        {/* Main sections of the homepage */}
        <HeroSection />
        <DestinationsSection />
        <CultureSection />
        <CuisineSection />
        <PlanTripSection />
      </main>
      {/* Footer at the bottom */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
