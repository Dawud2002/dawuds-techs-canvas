import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                Dawud Salifu
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Tech Solutions Expert specializing in Computer Networking, 
                Web Development, and Graphic Design in Koforidua, Ghana.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(`#${link.toLowerCase()}`);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {[
                  'Computer Networking',
                  'Web Development',
                  'Graphic Design',
                  'WordPress Solutions',
                  'Network Security'
                ].map((service) => (
                  <li key={service}>
                    <span className="text-primary-foreground/80">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-primary-foreground/80">
                  &copy; {currentYear} Dawud Salifu. All rights reserved.
                </p>
                <p className="text-primary-foreground/60 flex items-center justify-center md:justify-start gap-1 mt-1">
                  Made with <Heart className="h-4 w-4 text-accent" /> in Koforidua, Ghana
                </p>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground rounded-full"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;