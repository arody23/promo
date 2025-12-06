import { Check, Star, MessageCircle } from "lucide-react";

const PricingGrid = () => {
  const whatsappNumber = "242067458011";
  
  const packages = [
    {
      name: "essentiel",
      originalPrice: 80,
      price: 40,
      priceCFA: "24 000",
      description: "pour démarrer rapidement",
      features: [
        "1 campagne publicitaire pro",
        "configuration complète",
        "ciblage audience optimisé",
        "création du compte pub si besoin",
      ],
      notIncluded: ["suivi post-lancement", "optimisation"],
      color: "border-muted-foreground/30",
      bgGradient: "from-muted/50 to-muted/20",
      popular: false,
    },
    {
      name: "standard",
      originalPrice: 120,
      price: 65,
      priceCFA: "39 000",
      description: "le plus demandé",
      features: [
        "2 campagnes publicitaires pro",
        "configuration complète",
        "ciblage audience optimisé",
        "suivi pendant 3 jours",
        "optimisation post-lancement",
        "rapport de performance",
      ],
      notIncluded: [],
      color: "border-primary",
      bgGradient: "from-primary/20 to-primary/5",
      popular: true,
    },
    {
      name: "premium",
      originalPrice: 180,
      price: 95,
      priceCFA: "57 000",
      description: "résultats maximums",
      features: [
        "4 campagnes publicitaires pro",
        "4 visuels publicitaires pro",
        "configuration complète",
        "ciblage audience avancé",
        "suivi pendant 10 jours",
        "optimisation quotidienne",
        "rapports détaillés",
        "conseils stratégiques",
      ],
      notIncluded: [],
      color: "border-secondary",
      bgGradient: "from-secondary/20 to-secondary/5",
      popular: false,
    },
  ];

  const getWhatsappLink = (packageName: string) => {
    return `https://wa.me/${whatsappNumber}?text=Bonjour, je suis intéressé par le forfait ${packageName} de votre offre spéciale décembre.`;
  };

  return (
    <section id="forfaits" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block glass-card px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
            offre spéciale décembre
          </span>
          <h2 className="section-title mb-3 md:mb-4">
            <span className="text-foreground">Choisis ton </span>
            <span className="text-primary">forfait</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-3 md:mb-4">
            des prix exceptionnels pour lancer tes campagnes comme un pro. offre valable jusqu'au 30 décembre 2024.
          </p>
          <div className="glass-card inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm flex-col sm:flex-row">
            <span className="text-secondary">⚠️</span>
            <span className="text-muted-foreground">
              les tarifs n'incluent pas le budget publicitaire Meta/Google/TikTok
            </span>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative glass-card border-2 ${pkg.color} p-4 md:p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in bg-gradient-to-b ${pkg.bgGradient}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 md:px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" fill="currentColor" />
                    populaire
                  </span>
                </div>
              )}
              
              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{pkg.description}</p>
              </div>
              
              <div className="text-center mb-4 md:mb-6">
                <div className="flex items-center justify-center gap-2 mb-1 flex-wrap">
                  <span className="text-sm md:text-lg text-muted-foreground line-through">${pkg.originalPrice}</span>
                  <span className="bg-destructive/20 text-destructive text-xs px-2 py-0.5 rounded">
                    -{Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}%
                  </span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  ${pkg.price}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  ({pkg.priceCFA} FCFA)
                </div>
              </div>
              
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs md:text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
                {pkg.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs md:text-sm opacity-50">
                    <span className="w-4 h-4 mt-0.5 shrink-0 text-center">✗</span>
                    <span className="text-muted-foreground line-through">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={getWhatsappLink(pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-2 md:py-3 px-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)]"
                    : pkg.name === "premium"
                    ? "bg-secondary text-secondary-foreground hover:shadow-[var(--shadow-gold)]"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                je choisis ce forfait
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingGrid;
