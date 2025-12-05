import { Award, Users, Briefcase } from "lucide-react";

// SVG Platform Logos
const MetaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12">
    <defs>
      <linearGradient id="metaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0081FB" />
        <stop offset="100%" stopColor="#00D4FF" />
      </linearGradient>
    </defs>
    <path fill="url(#metaGrad)" d="M50 10c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm20 52c0 4.4-3.6 8-8 8H38c-4.4 0-8-3.6-8-8V38c0-4.4 3.6-8 8-8h24c4.4 0 8 3.6 8 8v24z"/>
    <path fill="currentColor" className="text-background" d="M58 42c-3.3 0-6 2.7-6 6v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-3.3-2.7-6-6-6zm-16 0c-3.3 0-6 2.7-6 6v14c0 1.1.9 2 2 2s2-.9 2-2V48c0-1.1.9-2 2-2s2 .9 2 2v14c0 1.1.9 2 2 2s2-.9 2-2V48c0-3.3-2.7-6-6-6z"/>
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const TikTokLogo = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
    <path fill="#25F4EE" d="M34.35 15.05c-2.84-1.82-4.73-4.94-4.94-8.55h-6.68v27.83c0 3.75-3.04 6.79-6.79 6.79s-6.79-3.04-6.79-6.79 3.04-6.79 6.79-6.79c.7 0 1.38.11 2.02.31v-6.84c-.66-.07-1.33-.12-2.02-.12-7.46 0-13.5 6.04-13.5 13.5s6.04 13.5 13.5 13.5 13.5-6.04 13.5-13.5V22.31c2.58 1.86 5.75 2.95 9.17 2.95v-6.68c-1.72 0-3.33-.48-4.72-1.3-.48-.29-.94-.6-1.37-.93l-.17-.13z"/>
    <path fill="#FE2C55" d="M36.72 16.75c1.97 2.06 4.7 3.36 7.73 3.51v-6.68c-1.72 0-3.33-.48-4.72-1.3-.48-.29-.94-.6-1.37-.93l-.17-.13c-2.84-1.82-4.73-4.94-4.94-8.55h-6.68v27.83c0 3.75-3.04 6.79-6.79 6.79-2.18 0-4.13-1.03-5.38-2.63 2.45-.5 4.45-2.32 5.18-4.71.18-.58.27-1.2.27-1.84V6.5h6.68c0 3.94 2.39 7.31 5.8 8.78.59.26 1.21.46 1.85.59.53.11 1.08.17 1.63.18.32.01.64 0 .96-.03z"/>
    <path fill="#000" d="M22.64 21.63v-6.84c-.66-.07-1.33-.12-2.02-.12-7.46 0-13.5 6.04-13.5 13.5s6.04 13.5 13.5 13.5c1.36 0 2.67-.2 3.91-.58-1.41-1.3-2.3-3.16-2.3-5.22V21.63z" opacity=".1"/>
  </svg>
);

const LinkedInLogo = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
    <path fill="#0A66C2" d="M44.45 0H3.55A3.5 3.5 0 000 3.46v41.07A3.5 3.5 0 003.55 48h40.9A3.5 3.5 0 0048 44.54V3.46A3.5 3.5 0 0044.45 0zM14.24 40.9H7.12V18h7.12v22.9zm-3.56-26.03a4.12 4.12 0 110-8.24 4.12 4.12 0 010 8.24zm30.22 26.03h-7.11V29.77c0-2.65-.05-6.07-3.7-6.07-3.7 0-4.26 2.89-4.26 5.88V40.9h-7.12V18h6.83v3.13h.1c.95-1.8 3.28-3.7 6.75-3.7 7.22 0 8.56 4.76 8.56 10.95v12.52z"/>
  </svg>
);

const SnapchatLogo = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
    <path fill="#FFFC00" d="M24 0C10.75 0 0 10.75 0 24s10.75 24 24 24 24-10.75 24-24S37.25 0 24 0z"/>
    <path fill="#000" d="M38.12 31.68c-4.67-.77-6.77-5.37-6.85-5.56-.07-.15-.27-.52-.27-.85 0-.4.27-.68.52-.85.68-.45 1.35-.88 1.77-1.2.7-.52 1.15-.95 1.35-1.57.15-.45.17-.88.05-1.3-.2-.7-.77-1.12-1.47-1.12-.17 0-.35.02-.52.07-.4.12-.75.2-1.05.2-.12 0-.2-.02-.27-.05.02-.45.07-.95.12-1.42.22-2.82.5-6.32-1.02-8.52-1.75-2.52-4.67-3.85-7.82-3.85h-.27c-3.15 0-6.07 1.32-7.82 3.85-1.52 2.2-1.25 5.7-1.02 8.52.05.47.1.97.12 1.42-.07.02-.15.05-.27.05-.3 0-.65-.07-1.05-.2-.17-.05-.35-.07-.52-.07-.7 0-1.27.42-1.47 1.12-.12.42-.1.85.05 1.3.2.62.65 1.05 1.35 1.57.42.32 1.1.75 1.77 1.2.25.17.52.45.52.85 0 .32-.2.7-.27.85-.07.2-2.17 4.8-6.85 5.56-.42.07-.72.45-.7.87.02.35.17.52.32.67.77.8 1.77 1.15 2.77 1.42.25.07.5.12.72.2.35.1.6.32.75.65.12.27.17.55.22.82.05.22.1.45.17.65.15.45.5.72 1.02.72.25 0 .52-.05.87-.12.55-.12 1.27-.27 2.27-.27.7 0 1.45.07 2.27.25 1.17.25 2.17 1.17 3.35 2.22 1.35 1.22 2.9 2.6 5.17 2.6h.27c2.27 0 3.82-1.37 5.17-2.6 1.17-1.05 2.17-1.97 3.35-2.22.82-.17 1.57-.25 2.27-.25 1 0 1.72.15 2.27.27.35.07.62.12.87.12.52 0 .87-.27 1.02-.72.07-.2.12-.42.17-.65.05-.27.1-.55.22-.82.15-.32.4-.55.75-.65.22-.07.47-.12.72-.2 1-.27 2-.62 2.77-1.42.15-.15.3-.32.32-.67.02-.42-.27-.8-.7-.87z"/>
  </svg>
);

const TwitterLogo = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-12 md:h-12">
    <path fill="currentColor" className="text-foreground" d="M36.65 3.81H43.1L28.52 20.48 45.6 44.19h-13.5L21.66 30.46 9.72 44.19H3.27L18.8 26.48 2.4 3.81h13.85l9.4 12.43L36.65 3.81zm-2.27 36.28h3.58L13.84 7.47h-3.84l24.38 32.62z"/>
  </svg>
);

const ExperienceSection = () => {
  const stats = [
    { icon: Briefcase, value: "5+", label: "Années d'expérience", color: "text-primary" },
    { icon: Users, value: "+50", label: "PME accompagnées", color: "text-secondary" },
    { icon: Award, value: "Multi", label: "Plateformes maîtrisées", color: "text-primary" },
  ];

  const platforms = [
    { name: "Meta (Facebook & Instagram)", logo: MetaLogo },
    { name: "Google Ads", logo: GoogleLogo },
    { name: "TikTok Ads", logo: TikTokLogo },
    { name: "LinkedIn Ads", logo: LinkedInLogo },
    { name: "Snapchat Ads", logo: SnapchatLogo },
    { name: "Twitter/X Ads", logo: TwitterLogo },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <span className="inline-block glass-card px-4 py-2 text-sm text-muted-foreground mb-4">
              À propos de moi
            </span>
            <h2 className="section-title mb-6">
              <span className="text-foreground">Je suis </span>
              <span className="text-primary">aroman emetshu</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Média buyer & consultant expert en publicités multi-plateformes avec plus de 5 ans d'expérience dans l'accompagnement des e-commerces et entreprises.
              </p>
              <p>
                J'achète les emplacements publicitaires là où se trouve ton audience : Meta, Google, TikTok, LinkedIn, Snapchat et plus encore.
              </p>
              <p>
                Mon approche est simple : comprendre ton business, identifier ton audience idéale, et créer des campagnes qui convertissent. Pas de blabla, que des résultats.
              </p>
            </div>
            
            {/* Platforms with SVG logos */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-foreground mb-4">Plateformes maîtrisées :</h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {platforms.map((platform, index) => (
                  <div 
                    key={platform.name} 
                    className="glass-card p-3 flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform duration-300 group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    title={platform.name}
                  >
                    <platform.logo />
                    <span className="text-[10px] text-muted-foreground text-center leading-tight group-hover:text-foreground transition-colors">
                      {platform.name.split(' ')[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
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
