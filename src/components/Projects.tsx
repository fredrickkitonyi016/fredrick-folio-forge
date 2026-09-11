import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Shield, Lock, Server, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
  icon: JSX.Element;
  liveUrl: string;
  githubUrl: string;
  challenge: string;
  architecture: string[];
  specs: { label: string; value: string }[];
  outcomes: string[];
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [active, setActive] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Enterprise Security Gateway",
      description: "A sovereign-grade cybersecurity infrastructure protecting enterprise data with multi-layered defense protocols.",
      technologies: ["Python", "Kubernetes", "AWS", "Zero Trust"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      category: "Digital Citadels",
      icon: <Shield className="w-5 h-5" />,
      liveUrl: "https://frimattechnologies.co.ke",
      githubUrl: "https://github.com/fredrickkitonyi",
      challenge:
        "A regional financial group ran flat network trust with perimeter-only defenses, leaving lateral movement unchecked across 12 branch sites.",
      architecture: [
        "Identity-aware proxy fronting every internal service — no implicit trust by network location",
        "Policy engine evaluating device posture, identity and risk score on every request",
        "Segmented Kubernetes namespaces with mutual TLS between all service meshes",
        "Central SIEM pipeline streaming signed audit events to immutable cold storage",
      ],
      specs: [
        { label: "Trust Model", value: "Zero Trust (NIST SP 800-207)" },
        { label: "Auth", value: "OIDC + hardware-backed MFA" },
        { label: "Encryption", value: "TLS 1.3 in transit, AES-256 at rest" },
        { label: "Uptime SLO", value: "99.95%" },
      ],
      outcomes: [
        "Blocked 15+ critical exploit attempts within the first quarter",
        "Reduced mean time to detect from 9 hours to under 12 minutes",
        "Passed external penetration test with zero critical findings",
      ],
    },
    {
      title: "Cloud Kingdom Infrastructure",
      description: "Scalable cloud architecture with automated DevOps pipelines and sovereign data governance.",
      technologies: ["Terraform", "Docker", "Azure", "GitOps"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      category: "Cloud Kingdoms",
      icon: <Server className="w-5 h-5" />,
      liveUrl: "https://frimattechnologies.co.ke",
      githubUrl: "https://github.com/fredrickkitonyi",
      challenge:
        "Manual environment provisioning took three weeks per release and produced drift between staging and production.",
      architecture: [
        "Fully declarative infrastructure defined in Terraform modules with remote state locking",
        "GitOps reconciliation loop — the repository is the single source of truth",
        "Blue/green deployment slots with automated rollback on failed health probes",
        "Data residency controls pinning regulated workloads to in-country regions",
      ],
      specs: [
        { label: "Provisioning", value: "Terraform + Azure Resource Manager" },
        { label: "Delivery", value: "GitOps, signed container images" },
        { label: "Scaling", value: "Horizontal autoscale, 4–60 nodes" },
        { label: "Recovery", value: "RPO 5 min / RTO 20 min" },
      ],
      outcomes: [
        "Cut environment provisioning from 3 weeks to 40 minutes",
        "Reduced deployment downtime by 40%",
        "Lowered monthly cloud spend by 27% through right-sizing",
      ],
    },
    {
      title: "Network Nebula Framework",
      description: "Advanced network infrastructure design with real-time monitoring and threat intelligence integration.",
      technologies: ["Cisco", "Fortinet", "Prometheus", "Grafana"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
      category: "Network Nebulas",
      icon: <Lock className="w-5 h-5" />,
      liveUrl: "https://frimattechnologies.co.ke",
      githubUrl: "https://github.com/fredrickkitonyi",
      challenge:
        "Distributed campus sites had no unified visibility; outages were reported by users before monitoring caught them.",
      architecture: [
        "Hierarchical core/distribution/access topology with redundant uplinks",
        "Next-generation firewalls enforcing per-VLAN inspection policies",
        "Prometheus exporters on every edge device feeding a central time-series store",
        "Grafana command dashboards with threshold-based escalation to on-call",
      ],
      specs: [
        { label: "Backbone", value: "Dual 10 GbE with LACP failover" },
        { label: "Segmentation", value: "VLAN + inter-VLAN policy control" },
        { label: "Telemetry", value: "15-second scrape interval" },
        { label: "Threat Feed", value: "Automated IOC ingestion" },
      ],
      outcomes: [
        "Achieved 99.98% network availability across all sites",
        "Detected and contained 3 intrusion attempts before data access",
        "Reduced incident triage time by 60%",
      ],
    },
    {
      title: "Sovereign Code Platform",
      description: "Custom software solutions with encrypted data handling and compliance-ready architecture.",
      technologies: ["TypeScript", "Node.js", "PostgreSQL", "E2E Encryption"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      category: "The Sovereign Code",
      icon: <Shield className="w-5 h-5" />,
      liveUrl: "https://frimattechnologies.co.ke",
      githubUrl: "https://github.com/fredrickkitonyi",
      challenge:
        "The client needed a records platform that satisfied data-protection law without surrendering custody of keys to a vendor.",
      architecture: [
        "Client-side envelope encryption — the platform never sees plaintext records",
        "Row-level security policies enforced at the database layer, not the application",
        "Append-only audit ledger recording every read and mutation",
        "Modular service boundaries allowing on-premise or sovereign-cloud deployment",
      ],
      specs: [
        { label: "Runtime", value: "Node.js + TypeScript (strict)" },
        { label: "Datastore", value: "PostgreSQL with RLS" },
        { label: "Crypto", value: "AES-256-GCM, customer-held keys" },
        { label: "Compliance", value: "Kenya DPA 2019 aligned" },
      ],
      outcomes: [
        "Delivered a full compliance audit trail with zero manual reporting",
        "Onboarded 4,000+ records with no data-integrity incidents",
        "Reduced report generation from 2 days to under 5 minutes",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground mt-2">
            Digital Citadels
          </h2>
          <div className="w-20 h-0.5 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Sovereign-grade solutions engineered for legacy, designed for tomorrow
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden h-full hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 border-border bg-card group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category} architecture preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-mono rounded">
                    {project.icon}
                    {project.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground font-serif">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground font-sans">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono bg-muted text-muted-foreground border border-border rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      onClick={() => setActive(project)}
                    >
                      <Layers className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button size="sm" variant="outline" className="border-secondary/50 hover:bg-secondary hover:text-secondary-foreground" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Source code for ${project.title}`}>
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-secondary/30">
          {active && (
            <>
              <DialogHeader>
                <span className="text-secondary font-mono text-xs tracking-[0.25em] uppercase">
                  {active.category}
                </span>
                <DialogTitle className="font-serif text-2xl text-foreground">{active.title}</DialogTitle>
                <DialogDescription className="font-sans">{active.challenge}</DialogDescription>
              </DialogHeader>

              <img
                src={active.image}
                alt={`${active.title} overview`}
                className="w-full h-44 object-cover border border-secondary/30"
              />

              <div>
                <h4 className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-secondary mb-3">
                  <Layers className="w-4 h-4" /> Architecture
                </h4>
                <ul className="space-y-2">
                  {active.architecture.map((line, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-sans">
                      <span className="text-secondary mt-0.5">▸</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-secondary mb-3">
                  <Cpu className="w-4 h-4" /> Technical Specifications
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {active.specs.map((spec, i) => (
                    <div key={i} className="border border-border bg-muted/40 p-3">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                        {spec.label}
                      </p>
                      <p className="text-sm text-foreground font-sans">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-secondary mb-3">
                  <CheckCircle2 className="w-4 h-4" /> Measured Outcomes
                </h4>
                <ul className="space-y-2">
                  {active.outcomes.map((line, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground font-sans">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                {active.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono bg-muted text-muted-foreground border border-border rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                  <a href={active.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" className="flex-1 border-secondary/50 hover:bg-secondary hover:text-secondary-foreground" asChild>
                  <a href={active.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
