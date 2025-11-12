import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';
import { Rocket, TrendingUp, Users, Zap } from 'lucide-react';

const FrimatTech = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Innovation First',
      description: 'Cutting-edge solutions that push boundaries',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Growth Focused',
      description: 'Empowering businesses to scale effectively',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client-Centric',
      description: 'Your success is our priority',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast & Reliable',
      description: 'Efficient delivery without compromise',
    },
  ];

  return (
    <section id="frimat" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            My Venture: <span className="text-primary">FRIMAT TECHNOLOGIES</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FRIMAT TECHNOLOGIES is a forward-thinking tech company dedicated to 
            <span className="text-secondary font-semibold"> delivering cutting-edge software solutions and IT services to empower businesses in Kenya and beyond</span>.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ${inView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-muted-foreground mb-6">
            Follow our journey and see what we're building
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold transform transition-all hover:scale-105"
              onClick={() => window.open('https://www.tiktok.com/@frimattechnologies1', '_blank')}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              Follow on TikTok
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transform transition-all hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/company/frimat-technologies', '_blank')}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrimatTech;
