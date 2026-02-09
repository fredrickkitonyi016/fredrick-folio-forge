import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FrimatTech from "@/components/FrimatTech";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CircuitBackground from "@/components/CircuitBackground";
import BusinessCard from "@/components/BusinessCard";
import EmailSignature from "@/components/EmailSignature";
import SovereignDossier from "@/components/SovereignDossier";
import SignatureTalks from "@/components/SignatureTalks";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Circuit particle background */}
      <CircuitBackground />
      
      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Blog />
        <SovereignDossier />
        <SignatureTalks />
        <FrimatTech />
        <BusinessCard />
        <EmailSignature />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
