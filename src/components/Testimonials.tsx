import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Crown } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "James Mwangi",
      role: "CTO, KenTech Solutions",
      content: "Fredrick architected a security infrastructure that transformed our entire digital operations. His sovereign approach to cybersecurity gave us complete confidence in our data protection.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      name: "Grace Wanjiku",
      role: "Director, Digital Africa Initiative",
      content: "Working with the Sovereign ICT Architect was a game-changer. His ability to design scalable cloud kingdoms while maintaining bulletproof security is unmatched in the industry.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      name: "David Ochieng",
      role: "CEO, Nairobi FinTech Hub",
      content: "FRIMAT TECHNOLOGIES delivered a sovereign-grade solution that exceeded our expectations. Fredrick's precision in every protocol and excellence in execution speaks volumes about his craft.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground mt-2">
            Council of Clients
          </h2>
          <div className="w-20 h-0.5 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            What leaders say about partnering with the Sovereign ICT Architect
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-border bg-card hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10"></div>
                <div className="absolute top-2 right-2">
                  <Crown className="w-4 h-4 text-secondary" />
                </div>
                
                <CardContent className="pt-8">
                  <Quote className="w-10 h-10 text-secondary/50 mb-4" />
                  <p className="text-foreground mb-6 leading-relaxed font-sans italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-border pt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 object-cover border-2 border-secondary"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground font-serif">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground font-sans">{testimonial.role}</p>
                    </div>
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

export default Testimonials;
