import { Play } from "lucide-react";

const VideoTestimonial = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            <span className="text-foreground">un </span>
            <span className="text-primary">résultat</span>
            <span className="text-foreground"> qui parle</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            découvre comment Fleurdy Cosmétique a obtenu +300% de retour sur ses campagnes publicitaires
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          {/* Video placeholder - portrait format */}
          <div className="relative aspect-[9/16] glass-card overflow-hidden group cursor-pointer">
            {/* Placeholder background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20" />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[var(--shadow-glow)]">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
            </div>
            
            {/* Video info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
              <div className="glass-card p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                    FC
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Fleurdy Cosmétique</div>
                    <div className="text-xs text-muted-foreground">E-commerce Beauté</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-secondary">+300%</span>
                  <span className="text-sm text-muted-foreground">de ROI</span>
                </div>
              </div>
            </div>
            
            {/* Instructions */}
            <div className="absolute top-4 left-4 right-4">
              <div className="glass-card px-3 py-2 text-xs text-center text-muted-foreground">
                📹 Ajoute ta vidéo témoignage ici
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;
