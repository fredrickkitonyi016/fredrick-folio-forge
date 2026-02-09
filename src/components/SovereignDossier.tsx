import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Crown, BookOpen, Users, ScrollText, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const SovereignDossier = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const glossaryTerms = [
    {
      term: 'Digital Sovereignty',
      definition:
        'The measured capability of an organization to assert autonomous control over its core technologies, data assets, and algorithmic processes, irrespective of external ecosystem pressures.',
    },
    {
      term: 'Sovereign Stack',
      definition:
        'A proprietary, vertically-integrated technology architecture designed to eliminate dependency on external actors for critical infrastructure operations and data governance.',
    },
    {
      term: 'Architectural Allegiance',
      definition:
        'The principle that all software, data pipelines, and cloud configurations must serve the strategic autonomy of the organization—never the vendor.',
    },
    {
      term: 'Vanguard Advisory',
      definition:
        'An ongoing strategic counsel model that positions the CTO/CIO not as a maintainer, but as a forward-deployed technology commander.',
    },
  ];

  const offerings = [
    {
      icon: <ScrollText className="w-7 h-7" />,
      title: 'The Sovereign Dossier',
      subtitle: 'Quarterly Strategic Briefing',
      description:
        'A visually stunning PDF report on 1–2 key trends shaping sovereign IT. Not a blog—a classified briefing for technology leaders.',
      examples: [
        'Quantum-Resistant Cryptography in African Fintech',
        'Sovereign AI Infrastructure for East Africa',
      ],
      cta: 'Request the Latest Dossier',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "The Architect's Table",
      subtitle: 'Invitation-Only Roundtable',
      description:
        'An exclusive quarterly virtual roundtable for 5–6 CTOs & CIOs to discuss strategic challenges under Chatham House Rule. Moderated by Fredrick Kitonyi.',
      examples: [
        'Cloud Repatriation Strategies',
        'Building Cyber-Resilient Supply Chains',
      ],
      cta: 'Request an Invitation',
    },
  ];

  return (
    <section id="dossier" className="py-20 bg-card relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute top-20 right-10 w-64 h-64 border border-secondary/10 rotate-45" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-secondary/10 -rotate-12" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase">
              Intellectual Arsenal
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Sovereign <span className="text-gradient-gold">Dossier</span>
          </h2>
          <div className="w-20 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Flagship content that commands authority. Strategic intelligence for visionary leaders.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {offerings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-muted/50 border border-border hover:border-secondary/50 transition-all duration-300 p-8 group"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="p-3 bg-secondary/10 text-secondary">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground font-serif">{item.title}</h3>
                  <span className="text-xs font-mono text-secondary tracking-widest uppercase">
                    {item.subtitle}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground font-sans mt-4 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 space-y-1">
                <span className="text-xs font-mono text-muted-foreground tracking-wide uppercase">
                  Sample Topics:
                </span>
                {item.examples.map((ex, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-secondary mt-0.5">▸</span>
                    <span className="italic">{ex}</span>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="mt-6 border-secondary/50 text-foreground hover:bg-secondary hover:text-secondary-foreground font-semibold group-hover:border-secondary transition-all"
                onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.cta}
                <ExternalLink className="w-3.5 h-3.5 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Glossary of Sovereignty */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <Crown className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase">
                Lexicon
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Glossary of <span className="text-gradient-gold">Sovereignty</span>
            </h3>
            <p className="text-muted-foreground font-sans mt-3 max-w-xl mx-auto text-sm">
              Terms redefined through the lens of sovereign ICT architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {glossaryTerms.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="bg-background/50 border border-border hover:border-secondary/40 p-6 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-foreground font-serif flex items-center gap-2">
                  <span className="text-secondary text-sm">§</span>
                  {item.term}
                </h4>
                <p className="text-sm text-muted-foreground font-sans mt-2 leading-relaxed italic">
                  "{item.definition}"
                </p>
                <p className="text-xs text-secondary font-mono mt-3 tracking-wide">
                  — Defined by Fredrick Kitonyi
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SovereignDossier;
