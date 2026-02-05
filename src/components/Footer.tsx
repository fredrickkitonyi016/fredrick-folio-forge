import { Crown, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Crown className="w-6 h-6 text-secondary" />
            <span className="text-2xl font-bold font-serif text-foreground">FK</span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-center font-sans">
            Architecting Digital Realms • Strategic • Secure • Sovereign
          </p>

          {/* Signature */}
          <p className="text-sm text-secondary italic font-sans">
            "Precision in every protocol, excellence in every execution."
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://www.tiktok.com/@frimattechnologies1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/frimat-technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:frimattechnologies016@gmail.com"
              className="text-muted-foreground hover:text-secondary transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Fredrick Kitonyi Kiio.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-secondary" />
              All rights reserved.
            </span>
          </div>

          {/* Closing Statement */}
          <p className="text-xs text-muted-foreground text-center max-w-lg font-sans">
            "Thank you for your time. Remember: in a world of digital tenants, be sovereign. Let's build your throne."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
