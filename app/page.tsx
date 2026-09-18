import Hero from './components/home/Hero';
import AdvantagesSection from './components/home/AdvantagesSection';
import ToolsSection from './components/home/ToolsSection';
import HowItWorksSection from './components/home/HowItWorksSection';
import TestimonialsSection from './components/home/TestimonialSection';
import ClientsSection from './components/home/ClientsSection';
import CaseStudies from './components/home/CaseStudies';
import IconStrip from './components/common/IconStrip';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IconStrip />
      <ToolsSection />
      <AdvantagesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ClientsSection />
      <CaseStudies />
    </main>
  );
}
