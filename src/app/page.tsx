import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
