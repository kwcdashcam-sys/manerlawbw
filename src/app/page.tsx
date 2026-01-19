'use client';
import { Hero, FirmOverview, PracticeAreas, Contact, MapSection, Footer } from '@/components/sections';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FirmOverview />
      <PracticeAreas />
      <Contact />
      <MapSection />
      <Footer />
    </div>
  );
}
