import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Network, Cloud, Code, Users, ChevronRight, Crown } from 'lucide-react';

const pillars = [
  {
    id: 'fortress',
    name: 'FORTRESS',
    subtitle: 'Cybersecurity & Ethical Resilience',
    icon: Shield,
    color: 'from-red-500/20 to-orange-500/20',
    borderColor: 'border-red-500/30',
    glowColor: 'shadow-red-500/10',
    description:
      'An impenetrable digital perimeter built on zero-trust architecture, advanced threat intelligence, and ethical resilience protocols. Your data doesn\'t just stay safe—it stays sovereign.',
    capabilities: [
      'Zero-Trust Architecture & IAM',
      'Advanced Threat Intelligence & SIEM',
      'Penetration Testing & Red Team Ops',
      'Compliance & Governance Frameworks',
    ],
  },
  {
    id: 'nexus',
    name: 'NEXUS',
    subtitle: 'Converged Network & Intelligent Infrastructure',
    icon: Network,
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/10',
    description:
      'The neural backbone of your enterprise. Converged, intelligent, and self-healing networks designed to carry the weight of sovereign operations with zero compromise.',
    capabilities: [
      'SD-WAN & Network Convergence',
      'Intelligent Traffic Engineering',
      'Self-Healing Infrastructure',
      'Unified Communications & Collaboration',
    ],
  },
  {
    id: 'stratos',
    name: 'STRATOS',
    subtitle: 'Sovereign Cloud & Strategic Automation',
    icon: Cloud,
    color: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-purple-500/10',
    description:
      'Cloud infrastructure that you own, not rent. Strategic automation that eliminates human error and accelerates deployment from days to minutes. Your cloud, your rules.',
    capabilities: [
      'Multi-Cloud & Hybrid Orchestration',
      'Infrastructure as Code (IaC)',
      'CI/CD Pipeline Architecture',
      'Kubernetes & Container Strategy',
    ],
  },
  {
    id: 'coda',
    name: 'CODA',
    subtitle: 'Bespoke Software & Data Allegiance',
    icon: Code,
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    glowColor: 'shadow-emerald-500/10',
    description:
      'Custom-forged software and data systems that pledge allegiance to your business logic alone. No vendor lock-in. No compromised algorithms. Pure, sovereign code.',
    capabilities: [
      'Full-Stack Application Development',
      'Data Architecture & Analytics',
      'API Design & Microservices',
      'AI/ML Integration & Data Pipelines',
    ],
  },
  {
    id: 'council',
    name: 'COUNCIL',
    subtitle: 'Continuous Strategy & Vanguard Advisory',
    icon: Users,
    color: 'from-secondary/20 to-yellow-500/20',
    borderColor: 'border-secondary/30',
    glowColor: 'shadow-secondary/10',
    description:
      'Technology is not installed—it is orchestrated. Ongoing strategic counsel ensures your sovereign stack evolves with the landscape, keeping you perpetually ahead.',
    capabilities: [
      'CTO-as-a-Service Advisory',
      'Digital Transformation Roadmaps',
      'Technology Due Diligence',
      'Annual State of Sovereignty Reviews',
    ],
  },
];

const KSSFramework = () => {
  const [activePillar, setActivePillar] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const ActiveIcon = pillars[activePillar].icon;

  return (
    <section id="kss" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase">Proprietary Methodology</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground mt-2">
            The Kitonyi Sovereign Stack
          </h2>
          <div className="w-20 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-sans">
            A five-pillar architectural framework that transforms your technology from a cost center into a crown jewel—autonomous, secure, and perpetually authoritative.
          </p>
        </motion.div>

        {/* Pillar Selector + Detail */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Left: Pillar Nav */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
          >
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              const isActive = i === activePillar;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal min-w-[160px] lg:min-w-0 border ${
                    isActive
                      ? 'bg-secondary/10 border-secondary/40 text-foreground sovereign-glow'
                      : 'border-border/50 text-muted-foreground hover:border-secondary/20 hover:text-foreground'
                  }`}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-secondary' : ''}`} />
                  <div>
                    <span className="font-bold text-sm font-serif block">{pillar.name}</span>
                    <span className="text-xs text-muted-foreground hidden lg:block">{pillar.subtitle}</span>
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4 text-secondary ml-auto hidden lg:block" />}
                </button>
              );
            })}
          </motion.div>

          {/* Right: Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className={`border ${pillars[activePillar].borderColor} rounded-xl p-8 bg-gradient-to-br ${pillars[activePillar].color} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                  <ActiveIcon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground font-serif">{pillars[activePillar].name}</h3>
                  <p className="text-secondary font-medium text-sm">{pillars[activePillar].subtitle}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 font-sans">
                {pillars[activePillar].description}
              </p>

              <div>
                <h4 className="text-sm font-mono text-secondary tracking-wider uppercase mb-4">Core Capabilities</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {pillars[activePillar].capabilities.map((cap, i) => (
                    <motion.div
                      key={cap}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/30"
                    >
                      <Crown className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground font-sans">{cap}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default KSSFramework;
