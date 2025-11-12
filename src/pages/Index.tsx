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
import profileImage from "@/assets/fredrick-profile.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background with profile image */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `url(${profileImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(2px)',
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Blog />
        <FrimatTech />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
