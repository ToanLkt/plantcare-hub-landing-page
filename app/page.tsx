import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { DemoArea } from '@/components/DemoArea';
import { MainStatement } from '@/components/MainStatement';
import { FeatureGrid } from '@/components/FeatureGrid';
import { HowItWorks } from '@/components/HowItWorks';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'PlantCare - Intelligent Plant Monitoring & Care',
  description: 'AI-powered plant monitoring with real-time insights. Never kill a plant again with personalized watering schedules and expert guidance.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Marquee />
      <DemoArea />
      <MainStatement />
      <FeatureGrid />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
