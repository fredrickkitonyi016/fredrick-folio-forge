import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';
import { Crown, Shield, Zap, Target, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const FrimatTech = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Sovereign Security',
      description: 'Infrastructure built for absolute data sovereignty',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Strategic Precision',
      description: 'Every solution architected with intent',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Scalable Power',
      description: 'Systems designed to grow with your ambition',
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Legacy Engineering',
      description: 'Built to withstand, adapt, and lead',
    },
  ];

  return (
    <section id="frimat" className="py-20 bg-card relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      
      <div className="absolute top-20 right-10 w-64 h-64 border border-secondary/10 rotate-45"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-secondary/10 -rotate-12"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Crown className="w-6 h-6 text-secondary" />
            <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase">The Venture</span>
            <Crown className="w-6 h-6 text-secondary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            FRIMAT <span className="text-gradient-gold">TECHNOLOGIES</span>
          </h2>
          <div className="w-20 h-0.5 bg-secondary mx-auto mb-8"></div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
            Providing <span className="text-secondary font-semibold">Sovereign-Grade ICT Architecture</span>—where 
            every system is built not only to perform but to withstand, adapt, and lead. 
            For leaders who see technology as a throne, not a tool.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-muted/50 p-6 border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
            >
              <div className="inline-flex p-3 bg-secondary/10 text-secondary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground font-serif">{feature.title}</h3>
              <p className="text-sm text-muted-foreground font-sans">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Elevator Pitch */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="bg-background/50 p-8 border border-secondary/30 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-card">
              <span className="text-secondary font-mono text-xs tracking-widest uppercase">The Vision</span>
            </div>
            <p className="text-lg text-muted-foreground italic font-sans leading-relaxed">
              "I don't just build systems—I architect digital sovereignty. I design ICT ecosystems where 
              security is inherent, scalability is effortless, and technology serves not just to function, 
              but to elevate. I am Fredrick Kitonyi, and I turn complex challenges into sovereign solutions."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6 font-sans">
            Follow our journey and witness sovereign innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold transform transition-all hover:scale-105 sovereign-glow"
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
              className="border-secondary/50 text-foreground hover:bg-secondary hover:text-secondary-foreground font-semibold transform transition-all hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/company/frimat-technologies', '_blank')}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FrimatTech;
