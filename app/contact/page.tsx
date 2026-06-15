import TrustedCompanies from "../components/pricing/TrustedCompanies";
import WaitlistCTA from "../components/pricing/WaitlistCTA";
import MoreInfoBlog from "../components/pricing/MoreInfoBlog";
import Hero from "../components/contact/Hero";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
        <Hero />
        <TrustedCompanies />
        <WaitlistCTA />
        <MoreInfoBlog />
    </main>
  );
}
