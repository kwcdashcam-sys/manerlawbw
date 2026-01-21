'use client';
import { Hero, FirmOverview, PracticeAreas, Contact, MapSection, OurPeople, WhyWorkWithUs, LegalDisclaimer } from '@/components/sections';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FirmOverview />
      <OurPeople />
      <WhyWorkWithUs />
      <PracticeAreas />
      <Contact />
      <LegalDisclaimer />
      <MapSection />
    </div>
  );
}
