import { Play } from "lucide-react";

const VideoTestimonial = () => {
  // Change ces valeurs pour intégrer ta vidéo
  const videoSrc = "/fleurdy-testimonial.mp4"; // Place ta vidéo dans le dossier public/
  const logoSrc = "/fleurdy-logo.png"; // Place ton logo dans le dossier public/

  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title mb-3 md:mb-4">
            <span className="text-foreground">un </span>
            <span className="text-primary">Résultat</span>
            <span className="text-foreground"> qui parle</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            découvre comment Fleurdy Cosmétique a obtenu +300% de retour sur ses campagnes publicitaires
          </p>
        </div>
        
        <div className="max-w-sm mx-auto">
          {/* Video player - portrait format */}
          <div className="relative aspect-[9/16] glass-card overflow-hidden group cursor-pointer">
            {/* Video element */}
            <video
              src={videoSrc}
              className="w-full h-full object-cover"
              poster="/fleurdy-poster.jpg"
            />
            
            {/* Placeholder background - shows if video doesn't load */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20" />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[var(--shadow-glow)]">
                <Play className="w-6 md:w-8 h-6 md:h-8 text-white ml-1" fill="white" />
              </div>
            </div>
            
            {/* Video info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-background/90 to-transparent">
              <div className="glass-card p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-xs md:text-sm overflow-hidden">
                    <img src={logoSrc} alt="Logo Fleurdy Cosmétique" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-foreground text-sm md:text-base truncate">Fleurdy Cosmétique</div>
                    <div className="text-xs text-muted-foreground truncate">E-commerce Beauté</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl font-bold text-secondary">+300%</span>
                  <span className="text-xs md:text-sm text-muted-foreground">de ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;
