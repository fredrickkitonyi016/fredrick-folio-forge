import { useRef } from 'react';
import { Button } from './ui/button';
import { Download, Crown, Shield, Mail, Phone, Linkedin, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BusinessCard = () => {
  const { toast } = useToast();
  const cardRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Kitonyi;Fredrick;;;
FN:Fredrick Kitonyi
ORG:FRIMAT TECHNOLOGIES
TITLE:Sovereign ICT Architect
TEL;TYPE=WORK,VOICE:+254112277289
EMAIL:frimattechnologies016@gmail.com
URL:https://id-preview--5231c1bf-ba6c-4ffb-a689-82fc8b3d07b4.lovable.app
NOTE:Precision in every protocol, excellence in every execution.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Fredrick_Kitonyi.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "Contact card downloaded!",
      description: "The vCard has been saved to your device.",
    });
  };

  return (
    <section id="business-card" className="py-20 bg-muted/30 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase">Digital Card</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground mt-2">
            Business Card
          </h2>
          <div className="w-20 h-0.5 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Download my contact details or scan the QR code
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Business Card Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Front of Card */}
            <div 
              ref={cardRef}
              className="relative aspect-[1.75/1] bg-gradient-to-br from-primary to-primary/90 p-8 flex flex-col justify-between border border-secondary/30 shadow-2xl"
              style={{ minHeight: '280px' }}
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-secondary"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-secondary"></div>
              
              {/* Logo and Crown */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-xl font-serif">FK</span>
                </div>
                <Crown className="w-6 h-6 text-secondary" />
              </div>

              {/* Name and Title */}
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white font-serif tracking-wide">
                  FREDRICK KITONYI
                </h3>
                <p className="text-secondary font-medium text-lg">
                  Sovereign ICT Architect
                </p>
                <div className="flex items-center gap-4 text-white/70 text-sm font-mono">
                  <span>Strategic</span>
                  <span className="w-1 h-1 bg-secondary rounded-full"></span>
                  <span>Secure</span>
                  <span className="w-1 h-1 bg-secondary rounded-full"></span>
                  <span>Sovereign</span>
                </div>
              </div>
            </div>

            {/* Back of Card */}
            <div 
              className="relative aspect-[1.75/1] bg-card p-8 flex flex-col justify-between border border-secondary/30 shadow-2xl"
              style={{ minHeight: '280px' }}
            >
              {/* QR Code Placeholder with styled border */}
              <div className="absolute top-4 right-4 w-24 h-24 border-2 border-secondary/50 p-2">
                <div className="w-full h-full bg-white flex items-center justify-center">
                  {/* QR Code pattern */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect fill="#0A1F3E" x="10" y="10" width="25" height="25"/>
                    <rect fill="#0A1F3E" x="65" y="10" width="25" height="25"/>
                    <rect fill="#0A1F3E" x="10" y="65" width="25" height="25"/>
                    <rect fill="#D4AF37" x="17" y="17" width="11" height="11"/>
                    <rect fill="#D4AF37" x="72" y="17" width="11" height="11"/>
                    <rect fill="#D4AF37" x="17" y="72" width="11" height="11"/>
                    <rect fill="#0A1F3E" x="45" y="10" width="10" height="10"/>
                    <rect fill="#0A1F3E" x="45" y="45" width="10" height="10"/>
                    <rect fill="#0A1F3E" x="65" y="45" width="10" height="10"/>
                    <rect fill="#0A1F3E" x="80" y="45" width="10" height="10"/>
                    <rect fill="#0A1F3E" x="45" y="65" width="10" height="10"/>
                    <rect fill="#0A1F3E" x="65" y="65" width="25" height="25"/>
                    <rect fill="#D4AF37" x="72" y="72" width="11" height="11"/>
                  </svg>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 mt-2">
                <a 
                  href="mailto:frimattechnologies016@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors"
                >
                  <Mail className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-sans">frimattechnologies016@gmail.com</span>
                </a>
                <a 
                  href="https://wa.me/254112277289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors"
                >
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-sans">+254 112 277 289</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/frimat-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-sans">FRIMAT TECHNOLOGIES</span>
                </a>
                <a 
                  href="#"
                  className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors"
                >
                  <Globe className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-sans">fredrickkitonyi.com</span>
                </a>
              </div>

              {/* Tagline */}
              <div className="border-t border-secondary/20 pt-4 mt-auto">
                <p className="text-xs text-muted-foreground italic font-sans flex items-center gap-2">
                  <Shield className="w-3 h-3 text-secondary" />
                  "Precision in every protocol, excellence in every execution."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Button
              size="lg"
              onClick={downloadVCard}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold transform transition-all hover:scale-105 sovereign-glow"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Contact Card
            </Button>
            <p className="text-sm text-muted-foreground mt-4 font-sans">
              Saves as vCard (.vcf) - compatible with all devices
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCard;
