import { MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "242067458011";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">aroman emetshu</h3>
          <p className="text-muted-foreground mb-6">média buyer & consultant expert</p>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            +{whatsappNumber}
          </a>
          
          <div className="mt-8 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © 2024 aroman emetshu. tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
