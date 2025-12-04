import { Star, MessageCircle } from "lucide-react";

const TestimonialsSection = () => {
  const whatsappNumber = "242067458011";
  
  const testimonials = [
    {
      name: "Marie-Claire K.",
      business: "Boutique Mode en ligne",
      avatar: "MK",
      rating: 5,
      text: "je pensais que les pubs Facebook étaient une arnaque jusqu'à ce qu'Aroman prenne en charge mes campagnes. en 2 semaines, j'ai fait plus de ventes qu'en 2 mois !",
      result: "+180% de ventes",
      bgColor: "bg-primary/20",
      borderColor: "border-primary/30",
    },
    {
      name: "Patrick M.",
      business: "Électronique & Gadgets",
      avatar: "PM",
      rating: 5,
      text: "j'ai perdu beaucoup d'argent en essayant de faire mes pubs moi-même. avec Aroman, chaque franc investi rapporte. c'est un vrai professionnel.",
      result: "ROI de 250%",
      bgColor: "bg-secondary/20",
      borderColor: "border-secondary/30",
    },
    {
      name: "Grâce N.",
      business: "Cosmétiques Naturels",
      avatar: "GN",
      rating: 5,
      text: "ce qui m'a impressionné c'est la rapidité des résultats. dès le 3ème jour, les commandes ont commencé à pleuvoir. je recommande à 100% !",
      result: "50+ commandes/semaine",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
    },
    {
      name: "Christian B.",
      business: "Formation en ligne",
      avatar: "CB",
      rating: 5,
      text: "aroman comprend vraiment le marché local. ses conseils sur le ciblage m'ont permis d'atteindre exactement les personnes intéressées par mes formations.",
      result: "100+ inscriptions",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
    },
  ];

  const getWhatsappLink = () => {
    return `https://wa.me/${whatsappNumber}?text=Bonjour, j'ai vu les témoignages et je suis intéressé par vos services.`;
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block glass-card px-4 py-2 text-sm text-muted-foreground mb-4">
            ils m'ont fait confiance
          </span>
          <h2 className="section-title mb-4">
            <span className="text-foreground">des </span>
            <span className="text-secondary">résultats</span>
            <span className="text-foreground"> concrets</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            découvre ce que disent mes clients après avoir travaillé avec moi
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`glass-card border ${testimonial.borderColor} p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in ${testimonial.bgColor}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground font-bold shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-secondary" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">{testimonial.result}</span>
                <a
                  href={getWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <MessageCircle className="w-3 h-3" />
                  me contacter aussi
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
