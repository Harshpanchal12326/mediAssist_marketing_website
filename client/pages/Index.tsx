import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AppsShowcase } from "../components/AppsShowcase";
import { Features } from "../components/Features";
import { SystemOverview } from "../components/SystemOverview";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";
import { BackgroundGraphPattern } from "../components/BackgroundGraphPattern";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background graph pattern */}
      <BackgroundGraphPattern />

      {/* Content wrapper with relative positioning to sit on top of background */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <AppsShowcase />
        <Features />
        <SystemOverview />
        <Team />
        <Footer />
      </div>
    </div>
  );
}
