import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Mic, Crown, Presentation, Flame, Users, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const SignatureTalks = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const talks = [
    {
      icon: <Crown className="w-6 h-6" />,
      type: 'The Keynote',
      title: 'Building Your Digital Throne: The Three Edicts of Sovereign IT',
      description:
        'A commanding keynote on why technology leadership demands sovereignty—not just adoption. Explores three non-negotiable principles every CTO must enforce.',
      audience: 'C-Suite & Board-Level Audiences',
      duration: '45–60 min',
    },
    {
      icon: <Presentation className="w-6 h-6" />,
      type: 'The Deep Dive',
      title: 'Deconstructing the KSS: A Live Architecture Session',
      description:
        'An interactive, whiteboard-style session that walks through the Kitonyi Sovereign Stack pillar by pillar, applied to real-world enterprise challenges.',
      audience: 'Technical Leaders & Architects',
      duration: '90 min workshop',
    },
    {
      icon: <Flame className="w-6 h-6" />,
      type: 'The Provocation',
      title: "Why Your Cloud Strategy is Making You a Tenant, Not a King",
      description:
        'A provocative talk challenging the status quo of cloud-first dogma. Makes the case for sovereign cloud strategies that restore control to the enterprise.',
      audience: 'Industry Conferences & Summits',
      duration: '30 min',
    },
  ];

  const alliance = [
    {
      role: 'Legal Tech Counsel',
      value: 'Data protection, compliance & regulatory strategy',
    },
    {
      role: 'Management Consulting',
      value: 'Organizational change management for digital transformation',
    },
    {
      role: 'Cybersecurity Intelligence',
      value: 'Threat landscape analysis & incident response planning',
    },
  ];

  return (
    <section id="talks" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-secondary/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-secondary/10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Mic className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase">
              Stage & Strategy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Signature <span className="text-gradient-gold">Talks</span>
          </h2>
          <div className="w-20 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Three signature presentations crafted to inspire, challenge, and redefine how leaders approach technology.
          </p>
        </motion.div>

        {/* Talks Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {talks.map((talk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-card border border-border hover:border-secondary/50 p-8 transition-all duration-300 group relative"
            >
              {/* Type badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-secondary/10 text-secondary">{talk.icon}</div>
                <span className="text-xs font-mono text-secondary tracking-[0.2em] uppercase font-semibold">
                  {talk.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground font-serif mb-3 leading-tight">
                {talk.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6">
                {talk.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <Users className="w-3.5 h-3.5 text-secondary" />
                  {talk.audience}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <Mic className="w-3.5 h-3.5 text-secondary" />
                  {talk.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Curated Alliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase">
              Network Strategy
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              The Curated <span className="text-gradient-gold">Alliance</span>
            </h3>
            <p className="text-muted-foreground font-sans mt-3 max-w-xl mx-auto text-sm">
              A shortlist of top-tier experts I bring into joint "Sovereign Consultations." 
              I become your gateway to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {alliance.map((ally, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="bg-muted/50 border border-border hover:border-secondary/40 p-6 text-center transition-all duration-300"
              >
                <h4 className="text-foreground font-bold font-serif mb-2">{ally.role}</h4>
                <p className="text-xs text-muted-foreground font-sans">{ally.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold transform transition-all hover:scale-105 sovereign-glow"
              onClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book a Speaking Engagement
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignatureTalks;
