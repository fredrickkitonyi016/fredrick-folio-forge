import { useInView } from 'react-intersection-observer';
import { GraduationCap, School } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      institution: 'Zetech University',
      location: 'Nairobi Branch',
      degree: 'Diploma in Software Engineering & ICT',
      period: '2023 - Present',
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      institution: 'ICS Technical College',
      degree: 'Diploma in ICS',
      period: '2022 - Present',
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
    <section id="about" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          My Journey
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Story Section */}
          <div className={`space-y-6 ${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate and dedicated technology student currently honing my skills in 
                <span className="text-primary font-semibold"> Software Engineering & ICT at Zetech University, Nairobi</span>, 
                complemented by a Diploma in ICS from ICS Technical College.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My foundation was built at Katelembo Centre of Excellence and Machakos Primary School, 
                instilling in me a discipline for excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am channeling this knowledge into real-world impact as the 
                <span className="text-secondary font-semibold"> Founder and CEO of FRIMAT TECHNOLOGIES</span>, 
                where we strive to innovate and solve pressing challenges through technology.
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className={`space-y-6 ${inView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-20 pb-8 last:pb-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>

                  <div className="bg-muted p-6 rounded-lg hover:bg-muted/80 transition-colors border border-border hover:border-primary">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="text-primary mt-1">{edu.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
                        {edu.location && (
                          <p className="text-sm text-muted-foreground">{edu.location}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-foreground font-medium">{edu.degree}</p>
                    <p className="text-sm text-primary font-semibold mt-2">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
