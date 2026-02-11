import { useInView } from 'react-intersection-observer';
import { GraduationCap, School, Crown, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      institution: 'Zetech University',
      location: 'Nairobi Branch',
      degree: 'Bachelor\'s Degree in Software Engineering',
      period: '2024 - Present',
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      institution: 'ICS Technical College',
      degree: 'Diploma in ICT',
      period: '2022 - 2023',
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      institution: 'Katelembo Centre of Excellence',
      degree: 'Secondary Education',
      period: '2015 - 2018',
      icon: <School className="w-6 h-6" />,
    },
    {
      institution: 'Machakos Primary School',
      degree: 'Primary Education',
      period: '2007 - 2014',
      icon: <School className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-secondary/20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-secondary/20"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase">About</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground mt-2">
            My Journey
          </h2>
          <div className="w-20 h-0.5 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Story Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Crown className="w-6 h-6 text-secondary" />
              <h3 className="text-2xl font-bold text-foreground font-serif">The Architect's Path</h3>
            </div>

            <div className="space-y-4 font-sans">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate and dedicated technology strategist currently pursuing my 
                <span className="text-secondary font-semibold"> Bachelor's Degree in Software Engineering at Zetech University, Nairobi</span>, 
                complemented by a Diploma in ICT from ICS Technical College.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My foundation was built at Katelembo Centre of Excellence and Machakos Primary School, 
                instilling in me a discipline for excellence and an unwavering commitment to mastery.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am channeling this knowledge into real-world impact as the 
                <span className="text-secondary font-semibold"> Founder and CEO of FRIMAT TECHNOLOGIES</span>, 
                where we architect sovereign digital solutions that don't just function—they elevate.
              </p>
            </div>

            {/* Brand Mantras */}
            <div className="pt-6 border-t border-border">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-secondary" />
                <span className="text-sm font-mono text-muted-foreground tracking-wide">BRAND MANTRAS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Architect with intent. Secure with intelligence.",
                  "Technology is not installed—it is orchestrated.",
                  "From infrastructure to insight.",
                  "Engineered for legacy, designed for tomorrow."
                ].map((mantra, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground italic">
                    <span className="text-secondary mt-1">•</span>
                    <span>{mantra}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-secondary/30"></div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-0 w-6 h-6 bg-secondary flex items-center justify-center">
                    <div className="w-2 h-2 bg-secondary-foreground"></div>
                  </div>

                  <div className="bg-muted p-6 border border-border hover:border-secondary/50 transition-colors">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="text-secondary mt-1">{edu.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground font-serif">{edu.institution}</h3>
                        {edu.location && (
                          <p className="text-sm text-muted-foreground font-sans">{edu.location}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-foreground font-medium font-sans">{edu.degree}</p>
                    <p className="text-sm text-secondary font-mono mt-2">{edu.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
