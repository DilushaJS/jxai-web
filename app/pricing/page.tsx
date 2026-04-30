import PricingTable from "../components/pricing/PricingTable";
import Hero from "../components/pricing/Hero";
import TrustedCompanies from "../components/pricing/TrustedCompanies";
import WaitlistCTA from "../components/pricing/WaitlistCTA";
import MoreInfoBlog from "../components/pricing/MoreInfoBlog";

export default function PricingPage() {
  return (
    <main className="min-h-screen">
        <Hero />
        <PricingTable />
        <TrustedCompanies />
        <WaitlistCTA />
        <MoreInfoBlog />
    </main>
  );
}
