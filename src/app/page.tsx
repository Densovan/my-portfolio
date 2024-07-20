import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Experience from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skill";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <ContactSection />
    </main>
  );
}
