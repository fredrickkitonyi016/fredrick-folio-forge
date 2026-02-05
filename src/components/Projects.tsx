import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Shield, Lock, Server } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Enterprise Security Gateway",
      description: "A sovereign-grade cybersecurity infrastructure protecting enterprise data with multi-layered defense protocols.",
      technologies: ["Python", "Kubernetes", "AWS", "Zero Trust"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      category: "Digital Citadels",
      icon: <Shield className="w-5 h-5" />,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Cloud Kingdom Infrastructure",
      description: "Scalable cloud architecture with automated DevOps pipelines and sovereign data governance.",
      technologies: ["Terraform", "Docker", "Azure", "GitOps"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      category: "Cloud Kingdoms",
      icon: <Server className="w-5 h-5" />,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Network Nebula Framework",
      description: "Advanced network infrastructure design with real-time monitoring and threat intelligence integration.",
      technologies: ["Cisco", "Fortinet", "Prometheus", "Grafana"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
      category: "Network Nebulas",
      icon: <Lock className="w-5 h-5" />,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Sovereign Code Platform",
      description: "Custom software solutions with encrypted data handling and compliance-ready architecture.",
      technologies: ["TypeScript", "Node.js", "PostgreSQL", "E2E Encryption"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      category: "The Sovereign Code",
      icon: <Shield className="w-5 h-5" />,
      liveUrl: "#",
      githubUrl: "#",
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
                    alt={project.title}
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
                    <Button size="sm" className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="border-secondary/50 hover:bg-secondary hover:text-secondary-foreground" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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
    </section>
  );
};

export default Projects;
