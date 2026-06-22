import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { DemoArea } from '@/components/DemoArea';
import { MainStatement } from '@/components/MainStatement';
import { HowItWorks } from '@/components/HowItWorks';
import { PlantTips } from '@/components/PlantTips';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'PlantCare Hub - Chăm cây thông minh bằng AI',
  description: 'Chẩn đoán bệnh cây bằng AI, nhắc lịch chăm sóc và quản lý vườn nhà lẫn vườn ươm trong một ứng dụng.',
};

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <Hero />
      <Marquee />
      <DemoArea />
      <MainStatement />
      <HowItWorks />
      <PlantTips />
      <Footer />
    </main>
  );
}
