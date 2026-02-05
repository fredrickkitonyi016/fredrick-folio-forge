import { useInView } from 'react-intersection-observer';
import { Code2, Network, Briefcase, Shield, Cloud, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'The Sovereign Code',
      subtitle: 'Software & Development',
      icon: <Code2 className="w-8 h-8" />,
      skills: ['Java', 'Python', 'TypeScript', 'Web Development', 'Mobile App Development'],
    },
    {
      title: 'Digital Citadels',
      subtitle: 'Cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      skills: ['Penetration Testing', 'Security Architecture', 'Threat Intelligence', 'Zero Trust Design'],
    },
    {
      title: 'Network Nebulas',
      subtitle: 'Infrastructure Design',
      icon: <Network className="w-8 h-8" />,
      skills: ['Network Configuration', 'System Administration', 'Hardware Support', 'Technical Support'],
    },
    {
      title: 'Cloud Kingdoms',
      subtitle: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      skills: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'CI/CD Pipelines'],
    },
    {
      title: 'Sovereign Strategy',
      subtitle: 'Entrepreneurship',
      icon: <Briefcase className="w-8 h-8" />,
      skills: ['Business Strategy', 'Leadership', 'Project Management', 'Digital Marketing'],
    },
    {
      title: 'Data Vaults',
      subtitle: 'Data Protection',
      icon: <Lock className="w-8 h-8" />,
      skills: ['Encryption', 'Compliance', 'GDPR', 'Data Governance'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--secondary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground mt-2">
            My Arsenal
          </h2>
          <div className="w-20 h-0.5 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Sovereign-grade capabilities engineered for excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card p-8 border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10 h-full relative overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-secondary/10 transition-all duration-300 group-hover:bg-secondary/20"></div>
                
                <div className="inline-flex p-4 bg-secondary/10 text-secondary mb-6">
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-1 text-foreground font-serif">
                  {category.title}
                </h3>
                <p className="text-sm text-secondary font-mono mb-4">{category.subtitle}</p>
                
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-sans text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
