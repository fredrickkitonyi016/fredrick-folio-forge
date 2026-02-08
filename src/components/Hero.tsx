import { TypeAnimation } from 'react-type-animation';
import { Button } from './ui/button';
import { ChevronDown, Shield, Crown, Download } from 'lucide-react';
import profileImage from '@/assets/fredrick-profile.jpg';
import heroVideo from '@/assets/hero-video.mp4';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 dark:opacity-15"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-muted/50 z-[1]"></div>
      
      {/* Animated geometric patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-10 z-[2]">
        <div className="absolute top-20 left-10 w-64 h-64 border border-secondary/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-secondary/20 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-secondary/40 rotate-45"></div>
      </div>

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-secondary/30 to-transparent z-[2]"></div>
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-secondary/30 to-transparent z-[2]"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            {/* Crown icon and tagline */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-secondary">
              <Crown className="w-5 h-5" />
              <span className="text-sm font-mono tracking-[0.3em] uppercase">Architecting Digital Realms</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              FREDRICK
              <span className="block text-gradient-gold">KITONYI</span>
            </h1>
            
            <div className="h-20 md:h-16">
              <TypeAnimation
                sequence={[
                  'Sovereign ICT Architect',
                  2000,
                  'Cybersecurity Strategist',
                  2000,
                  'Cloud Infrastructure Expert',
                  2000,
                  'CEO of FRIMAT TECHNOLOGIES',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-2xl md:text-3xl font-medium text-muted-foreground font-sans"
                repeat={Infinity}
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-xl font-sans leading-relaxed">
              I don't just build systems—I architect digital sovereignty. Where security is inherent, 
              scalability is effortless, and technology serves not just to function, but to elevate.
            </p>

            {/* Signature line */}
            <p className="text-sm text-secondary font-mono italic">
              "Precision in every protocol, excellence in every execution."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold transform transition-all hover:scale-105 sovereign-glow"
                onClick={() => scrollToSection('projects')}
              >
                <Shield className="w-4 h-4 mr-2" />
                View Digital Citadels
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary/50 text-foreground hover:bg-secondary hover:text-secondary-foreground font-semibold transform transition-all hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                Build Your Throne
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary/50 text-foreground hover:bg-secondary hover:text-secondary-foreground font-semibold transform transition-all hover:scale-105"
                asChild
              >
                <a href="/Fredrick_Kitonyi_Resume.pdf" download="Fredrick_Kitonyi_Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Strategic • Secure • Sovereign badge */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-sm font-mono text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                Strategic
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                Secure
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                Sovereign
              </span>
            </div>
          </motion.div>

          {/* Right side - Profile image with crowned circuit aesthetic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Geometric shield frame */}
              <div className="absolute -inset-4 border-2 border-secondary/30 rotate-3"></div>
              <div className="absolute -inset-8 border border-secondary/20 -rotate-3"></div>
              
              {/* Gold accent glow */}
              <div className="absolute inset-0 bg-secondary/10 blur-3xl animate-pulse"></div>
              
              {/* Profile image */}
              <img
                src={profileImage}
                alt="Fredrick Kitonyi - Sovereign ICT Architect"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-2 border-secondary shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* FK Monogram badge */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-2xl font-serif">FK</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-secondary">
          <span className="text-xs font-mono tracking-widest uppercase">Explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
