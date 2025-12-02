import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AppsShowcase } from "../components/AppsShowcase";
import { Features } from "../components/Features";
import { SystemOverview } from "../components/SystemOverview";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <AppsShowcase />
      <Features />
      <SystemOverview />
      <Team />
      <Footer />
    </div>
  );
}
