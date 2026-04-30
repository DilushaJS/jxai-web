import Hero from './components/home/Hero';
import AdvantagesSection from './components/home/AdvantagesSection';
import ToolsSection from './components/home/ToolsSection';
import HowItWorksSection from './components/home/HowItWorksSection';
import TestimonialsSection from './components/home/TestimonialSection';
import ClientsSection from './components/home/ClientsSection';
import CaseStudies from './components/home/CaseStudies';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AdvantagesSection />
      <ToolsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ClientsSection />
      <CaseStudies />
    </main>
  );
}
