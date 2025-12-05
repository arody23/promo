import { MessageCircle } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  const whatsappNumber = "242067458011";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Bonjour, je suis intéressé par votre offre spéciale de décembre pour les campagnes publicitaires.`;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Offre limitée — décembre 2025</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Lance tes </span>
            <span className="text-primary">campagnes pub</span>
            <br />
            <span className="text-foreground">comme un </span>
            <span className="text-secondary">PRO</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Tu perds de l'argent en faisant tes pubs toi-même ? Laisse un expert gérer tes campagnes Meta, Google & TikTok pour maximiser ton ROI.
          </p>
          
          {/* Value proposition */}
          <p className="text-base text-muted-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            +300% de retour sur investissement pour mes clients — c'est maintenant ton tour.
          </p>
          
          {/* CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <MessageCircle className="w-5 h-5" />
            Réserver mon offre maintenant
          </a>
          
          {/* Countdown */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-sm text-muted-foreground mb-4">L'offre expire dans :</p>
            <CountdownTimer targetDate={new Date("2025-12-30T23:59:59")} />
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-xs text-muted-foreground">ans d'expérience</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-secondary">50+</div>
              <div className="text-xs text-muted-foreground">projets réussis</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-primary">300%</div>
              <div className="text-xs text-muted-foreground">ROI moyen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
