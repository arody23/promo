import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const pricingSection = document.getElementById("forfaits");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Decorative elements - hidden on mobile */}
      <div className="absolute top-20 left-10 w-64 h-64 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute bottom-20 right-10 w-80 h-80 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl hidden sm:block" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6 animate-fade-in text-xs md:text-sm">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-muted-foreground">Offre limitée — décembre 2025</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in leading-tight" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Lance tes </span>
            <span className="text-primary">campagnes pub</span>
            <br />
            <span className="text-foreground">comme un </span>
            <span className="text-secondary">PRO</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg md:text-xl text-muted-foreground mb-3 md:mb-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Tu perds de l'argent en faisant tes pubs toi-même ? Laisse un expert gérer tes campagnes Meta, Google & TikTok pour maximiser ton ROI.
          </p>
          
          {/* Value proposition */}
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground/80 mb-6 md:mb-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Rejoins les +50 PME qui ont boosté leur chiffre d'affaires grâce à mes campagnes.
          </p>
          
          {/* CTA */}
          <button
            onClick={handleCTAClick}
            className="btn-primary inline-flex items-center gap-3 animate-fade-in cursor-pointer"
            style={{ animationDelay: "0.4s" }}
          >
            Choisir mon forfait
          </button>
          
          {/* Countdown */}
          <div className="mt-8 md:mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 md:mb-6">L'offre expire dans :</p>
            <CountdownTimer targetDate={new Date("2025-12-30T23:59:59")} />
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 mt-12 md:mt-16 max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="glass-card p-3 md:p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-primary">5+</div>
              <div className="text-xs text-muted-foreground">Ans d'expérience</div>
            </div>
            <div className="glass-card p-3 md:p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-secondary">+50</div>
              <div className="text-xs text-muted-foreground">PME accompagnées</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
