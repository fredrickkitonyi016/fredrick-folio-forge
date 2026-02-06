import { Button } from './ui/button';
import { Copy, Check, Crown, Shield, Mail, Phone, Linkedin, Globe } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EmailSignature = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const copySignature = () => {
    const signatureHtml = `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif;">
  <tr>
    <td style="padding-right: 15px; border-right: 2px solid #D4AF37;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="background: #D4AF37; padding: 8px 12px;">
            <span style="color: #0A1F3E; font-weight: bold; font-size: 18px;">FK</span>
          </td>
        </tr>
      </table>
    </td>
    <td style="padding-left: 15px;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-size: 16px; font-weight: bold; color: #0A1F3E;">FREDRICK KITONYI</td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #D4AF37; padding-top: 2px;">Sovereign ICT Architect</td>
        </tr>
        <tr>
          <td style="font-size: 11px; color: #666; padding-top: 8px;">
            📧 frimattechnologies016@gmail.com | 📱 +254 112 277 289
          </td>
        </tr>
        <tr>
          <td style="font-size: 11px; color: #666; padding-top: 2px;">
            🔗 LinkedIn: FRIMAT TECHNOLOGIES | 🌐 fredrickkitonyi.com
          </td>
        </tr>
        <tr>
          <td style="font-size: 11px; color: #999; font-style: italic; padding-top: 10px; border-top: 1px solid #eee; margin-top: 8px;">
            "Precision in every protocol, excellence in every execution."
          </td>
        </tr>
        <tr>
          <td style="font-size: 10px; color: #999; padding-top: 5px;">
            🔒 This email is secured with end-to-end encryption.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;

    navigator.clipboard.writeText(signatureHtml);
    setCopied(true);
    
    toast({
      title: "Signature copied!",
      description: "HTML signature copied to clipboard. Paste it in your email settings.",
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const copyPlainText = () => {
    const plainText = `FREDRICK KITONYI
Sovereign ICT Architect

📧 frimattechnologies016@gmail.com
📱 +254 112 277 289
🔗 LinkedIn: FRIMAT TECHNOLOGIES
🌐 fredrickkitonyi.com

"Precision in every protocol, excellence in every execution."

🔒 This email is secured with end-to-end encryption.`;

    navigator.clipboard.writeText(plainText);
    
    toast({
      title: "Plain text signature copied!",
      description: "Text signature copied to clipboard.",
    });
  };

  return (
    <section id="email-signature" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-[0.3em] uppercase">Professional</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground mt-2">
            Email Signature
          </h2>
          <div className="w-20 h-0.5 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Copy my professional email signature for consistent branding
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {/* Signature Preview */}
          <div className="bg-white p-8 border border-secondary/30 shadow-lg mb-6">
            <div className="flex gap-4">
              {/* FK Logo */}
              <div className="flex-shrink-0 pr-4 border-r-2 border-secondary">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-xl font-serif">FK</span>
                </div>
              </div>

              {/* Signature Content */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-primary font-serif">FREDRICK KITONYI</h3>
                  <Crown className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-secondary font-medium">Sovereign ICT Architect</p>
                
                <div className="space-y-1 pt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3 text-secondary" />
                    <span>frimattechnologies016@gmail.com</span>
                    <span className="text-gray-400">|</span>
                    <Phone className="w-3 h-3 text-secondary" />
                    <span>+254 112 277 289</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-3 h-3 text-secondary" />
                    <span>FRIMAT TECHNOLOGIES</span>
                    <span className="text-gray-400">|</span>
                    <Globe className="w-3 h-3 text-secondary" />
                    <span>fredrickkitonyi.com</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200 mt-3">
                  <p className="text-sm text-gray-500 italic">
                    "Precision in every protocol, excellence in every execution."
                  </p>
                  <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    This email is secured with end-to-end encryption.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={copySignature}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold transform transition-all hover:scale-105 sovereign-glow"
            >
              {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copied ? 'Copied!' : 'Copy HTML Signature'}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={copyPlainText}
              className="border-secondary/50 text-foreground hover:bg-secondary hover:text-secondary-foreground font-semibold"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Plain Text
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6 font-sans">
            Paste the HTML signature in Gmail, Outlook, or any email client that supports rich text signatures.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSignature;
