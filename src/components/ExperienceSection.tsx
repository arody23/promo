import { Award, Users, Briefcase, Globe } from "lucide-react";

const ExperienceSection = () => {
  const stats = [
    { icon: Briefcase, value: "5+", label: "années d'expérience", color: "text-primary" },
    { icon: Users, value: "50+", label: "clients accompagnés", color: "text-secondary" },
    { icon: Award, value: "300%", label: "ROI moyen généré", color: "text-primary" },
    { icon: Globe, value: "Multi", label: "plateformes maîtrisées", color: "text-secondary" },
  ];

  const platforms = [
    "Meta (Facebook & Instagram)",
    "Google Ads",
    "TikTok Ads",
    "LinkedIn Ads",
    "Snapchat Ads",
    "Twitter/X Ads",
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block glass-card px-4 py-2 text-sm text-muted-foreground mb-4">
              à propos de moi
            </span>
            <h2 className="section-title mb-6">
              <span className="text-foreground">je suis </span>
              <span className="text-primary">aroman emetshu</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                média buyer & consultant expert en publicités multi-plateformes avec plus de 5 ans d'expérience dans l'accompagnement des e-commerces et entreprises.
              </p>
              <p>
                j'achète les emplacements publicitaires là où se trouve ton audience : Meta, Google, TikTok, LinkedIn, Snapchat et plus encore.
              </p>
              <p>
                mon approche est simple : comprendre ton business, identifier ton audience idéale, et créer des campagnes qui convertissent. pas de blabla, que des résultats.
              </p>
            </div>
            
            {/* Platforms */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-foreground mb-3">plateformes maîtrisées :</h4>
              <div className="flex flex-wrap gap-2">
                {platforms.map((platform) => (
                  <span key={platform} className="glass-card px-3 py-1.5 text-xs text-muted-foreground">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
