import { TypeAnimation } from 'react-type-animation';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import profileImage from '@/assets/fredrick-profile.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Fredrick Kitonyi Kiio
            </h1>
            
            <div className="h-20 md:h-16">
              <TypeAnimation
                sequence={[
                  'Aspiring Software Engineer',
                  2000,
                  'ICT Specialist',
                  2000,
                  'CEO of FRIMAT TECHNOLOGIES',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-3xl md:text-4xl font-semibold text-primary"
                repeat={Infinity}
              />
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Bridging academic excellence with innovative technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transform transition-all hover:scale-105"
                onClick={() => scrollToSection('about')}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transform transition-all hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <img
                src={profileImage}
                alt="Fredrick Kitonyi Kiio"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
