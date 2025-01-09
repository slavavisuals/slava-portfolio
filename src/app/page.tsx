import MobileNavbar from '@/components/Navbar';
import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import Experience from '@/sections/Experience';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';
import { TestimonialsSection } from '@/sections/Testimonials';
export default function Home() {
  return (
    <div>
      <MobileNavbar />
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <Experience />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
