import { MessageCircle, Mail, MapPin, Phone, ArrowUp, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "242067458011";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const email = "contact@aromanemetshu.com";
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    "Campagnes Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "Stratégie publicitaire",
    "Création de visuels",
    "Optimisation & suivi",
  ];

  const quickLinks = [
    { label: "Accueil", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent" />
      
      {/* Main footer content */}
      <div className="relative z-10 pt-16 pb-8 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">aroman emetshu</h3>
              <p className="text-primary font-medium text-sm mb-4">Média buyer & consultant expert</p>
              <p className="text-muted-foreground text-sm mb-6">
                J'aide les e-commerces et PME à maximiser leur ROI grâce à des campagnes publicitaires professionnelles et structurées.
              </p>
              
              {/* Social links */}
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com/aromanemetshu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card flex items-center justify-center hover:bg-primary/20 transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://facebook.com/aromanemetshu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card flex items-center justify-center hover:bg-primary/20 transition-colors group"
                >
                  <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://linkedin.com/in/aromanemetshu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card flex items-center justify-center hover:bg-primary/20 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
            
            {/* Services column */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick links column */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact column */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 glass-card flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <MessageCircle className="w-5 h-5 group-hover:text-secondary" />
                    </div>
                    <div>
                      <span className="text-xs block text-muted-foreground/70">WhatsApp</span>
                      <span className="text-sm">+{whatsappNumber}</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 glass-card flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 group-hover:text-primary" />
                    </div>
                    <div>
                      <span className="text-xs block text-muted-foreground/70">Email</span>
                      <span className="text-sm">{email}</span>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 glass-card flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs block text-muted-foreground/70">Localisation</span>
                      <span className="text-sm">Brazzaville, Congo</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 aroman emetshu. Tous droits réservés.
            </p>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              Retour en haut
              <div className="w-8 h-8 glass-card flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:-translate-y-1">
                <ArrowUp className="w-4 h-4 group-hover:text-primary" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
