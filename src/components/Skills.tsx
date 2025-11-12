import { useInView } from 'react-intersection-observer';
import { Code2, Network, Briefcase, Smartphone } from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Software Development',
      icon: <Code2 className="w-8 h-8" />,
      skills: ['Java', 'Python', 'Web Development (HTML, CSS, JavaScript)', 'Mobile App Development'],
      color: 'primary',
    },
    {
      title: 'ICT & Networking',
      icon: <Network className="w-8 h-8" />,
      skills: ['Network Configuration', 'System Administration', 'Hardware Support', 'Technical Support'],
      color: 'secondary',
    },
    {
      title: 'Entrepreneurship',
      icon: <Briefcase className="w-8 h-8" />,
      skills: ['Business Strategy', 'Leadership', 'Project Management', 'Digital Marketing'],
      color: 'accent',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          My Arsenal
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group ${inView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2 h-full">
                <div className={`inline-flex p-4 rounded-lg bg-${category.color}/10 text-${category.color} mb-6`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {category.title}
                </h3>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
