import { TrendingUp, DollarSign, Clock, Target, ShieldCheck, Zap } from "lucide-react";

const WhyMeSection = () => {
  const reasons = [
    {
      icon: DollarSign,
      title: "tu brûles ton budget",
      description: "sans expertise, chaque franc dépensé en pub peut partir en fumée. un pro optimise chaque centime pour des résultats réels.",
      color: "text-destructive",
    },
    {
      icon: Target,
      title: "ciblage approximatif",
      description: "tu montres tes pubs aux mauvaises personnes ? je cible précisément ton audience idéale pour maximiser les conversions.",
      color: "text-secondary",
    },
    {
      icon: TrendingUp,
      title: "pas de croissance",
      description: "tes ventes stagnent ? des campagnes bien structurées peuvent multiplier tes revenus de 2x à 10x.",
      color: "text-primary",
    },
    {
      icon: Clock,
      title: "tu perds du temps",
      description: "gérer des pubs prend des heures. libère-toi pour te concentrer sur ton business pendant que je m'occupe du reste.",
      color: "text-secondary",
    },
    {
      icon: ShieldCheck,
      title: "erreurs coûteuses",
      description: "un compte bloqué ou une campagne mal configurée peut te coûter cher. évite les pièges avec un expert.",
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "résultats rapides",
      description: "avec une stratégie éprouvée, tu verras des résultats dès les premiers jours de ta campagne.",
      color: "text-secondary",
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block glass-card px-4 py-2 text-sm text-muted-foreground mb-4">
            pourquoi tu as besoin d'un pro ?
          </span>
          <h2 className="section-title mb-4">
            <span className="text-foreground">arrête de </span>
            <span className="text-destructive">perdre</span>
            <span className="text-foreground"> de l'argent</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            gérer ses pubs soi-même sans expérience, c'est comme conduire les yeux fermés. voici pourquoi confier tes campagnes à un expert change tout.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${reason.color}`}>
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
