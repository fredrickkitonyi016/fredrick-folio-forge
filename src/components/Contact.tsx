import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, MessageSquare, Linkedin, Phone, Crown, Shield, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { z } from 'zod';

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must be less than 100 characters' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address' })
    .max(255, { message: 'Email must be less than 255 characters' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must be less than 1000 characters' }),
});

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof typeof errors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast({
        title: 'Please review the form',
        description: 'Some fields need your attention.',
        variant: 'destructive',
      });
      return;
    }

    setErrors({});
    const { name, email, message } = result.data;
    const whatsappMessage = encodeURIComponent(
      `Hello! I'm ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
    );
    const whatsappUrl = `https://wa.me/254112277289?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    toast({
      title: 'Message sent successfully!',
      description: 'Your message has opened in WhatsApp — hit send to complete delivery.',
    });

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'frimattechnologies016@gmail.com',
      link: 'mailto:frimattechnologies016@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'WhatsApp',
      value: '+254 112 277 289',
      link: 'https://wa.me/254112277289',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'FRIMAT TECHNOLOGIES',
      link: 'https://www.linkedin.com/company/frimat-technologies',
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: 'TikTok',
      value: '@frimattechnologies016',
      link: 'https://www.tiktok.com/@frimattechnologies016',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground mt-2">
            Let's Connect
          </h2>
          <div className="w-20 h-0.5 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Ready to build your digital throne? Let's architect your sovereign solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground font-serif">Get in Touch</h3>
              </div>
              <p className="text-muted-foreground mb-8 font-sans">
                I'm always open to discussing strategic partnerships, innovative projects, 
                or opportunities to architect sovereign digital solutions.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border hover:border-secondary/50 transition-all transform hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono">{info.label}</p>
                    <p className="font-semibold text-foreground font-sans">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Email Signature Preview */}
            <div className="mt-8 p-6 bg-card border border-secondary/30">
              <p className="text-sm text-muted-foreground font-mono mb-4">EMAIL SIGNATURE</p>
              <div className="space-y-1">
                <p className="font-bold text-foreground font-serif">FREDRICK KITONYI</p>
                <p className="text-secondary font-sans">Sovereign ICT Architect</p>
                <p className="text-sm text-muted-foreground italic font-sans mt-2">
                  "Precision in every protocol, excellence in every execution."
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-2 mt-2">
                  <Shield className="w-3 h-3" />
                  This email is secured with end-to-end encryption.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-6 bg-card p-8 border border-border">
              <div className="text-center mb-6">
                <p className="text-secondary font-mono text-sm tracking-wide">SECURE CHANNEL</p>
              </div>

              {submitted && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 border border-secondary/40 bg-secondary/10 p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground font-sans">Message sent successfully</p>
                    <p className="text-sm text-muted-foreground font-sans">
                      WhatsApp opened in a new tab — press send there to complete delivery.
                    </p>
                  </div>
                </div>
              )}

              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  maxLength={100}
                  aria-invalid={!!errors.name}
                  className="bg-background border-border focus:border-secondary transition-colors font-sans"
                />
                {errors.name && <p className="text-xs text-destructive mt-1 font-sans">{errors.name}</p>}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  maxLength={255}
                  aria-invalid={!!errors.email}
                  className="bg-background border-border focus:border-secondary transition-colors font-sans"
                />
                {errors.email && <p className="text-xs text-destructive mt-1 font-sans">{errors.email}</p>}
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  maxLength={1000}
                  aria-invalid={!!errors.message}
                  className="bg-background border-border focus:border-secondary transition-colors resize-none font-sans"
                />
                <div className="flex justify-between mt-1">
                  {errors.message ? (
                    <p className="text-xs text-destructive font-sans">{errors.message}</p>
                  ) : (
                    <span />
                  )}
                  <p className="text-xs text-muted-foreground font-mono">{formData.message.length}/1000</p>
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold transform transition-all hover:scale-105 sovereign-glow"
              >
                <Shield className="w-4 h-4 mr-2" />
                Send Secure Message
              </Button>

              <p className="text-center text-sm text-muted-foreground italic font-sans">
                "In a world of digital tenants, be sovereign."
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
