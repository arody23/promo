import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const FAQSection = () => {
  const whatsappNumber = "242067458011";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Bonjour, j'ai une question concernant vos services.`;

  const faqs = [
    {
      question: "c'est quoi un média buyer exactement ?",
      answer: "un média buyer est un expert qui achète des espaces publicitaires sur les plateformes (Facebook, Instagram, Google, TikTok...) pour mettre ta marque devant les bonnes personnes. je m'occupe de tout : stratégie, création des campagnes, ciblage et optimisation.",
    },
    {
      question: "pourquoi ne pas faire mes pubs moi-même ?",
      answer: "tu peux, mais sans expertise tu risques de brûler ton budget sans résultats. les algorithmes des plateformes sont complexes, et une mauvaise configuration peut te coûter cher. un pro sait exactement comment optimiser chaque franc pour des résultats maximums.",
    },
    {
      question: "le prix inclut-il le budget pub ?",
      answer: "non, mes tarifs couvrent uniquement la création et la gestion de tes campagnes. le budget publicitaire (ce que tu paies à Meta, Google, etc.) est à part et dépend de tes objectifs. je t'aide à définir le bon budget selon tes moyens.",
    },
    {
      question: "combien de temps avant de voir des résultats ?",
      answer: "généralement, tu commences à voir les premiers résultats dans les 3 à 7 jours après le lancement. mais les résultats optimaux arrivent après 2-3 semaines d'optimisation continue.",
    },
    {
      question: "est-ce que l'offre est vraiment limitée ?",
      answer: "oui, ces prix exceptionnels sont valables uniquement jusqu'au 30 décembre 2024. c'est une offre spéciale pour aider les e-commerces à bien démarrer la nouvelle année avec des campagnes structurées.",
    },
    {
      question: "comment se passe le processus ?",
      answer: "1) tu me contactes sur WhatsApp, 2) on discute de ton business et tes objectifs, 3) je crée et lance tes campagnes, 4) selon ton forfait, je fais le suivi et l'optimisation. simple et efficace.",
    },
    {
      question: "je n'ai pas de compte publicitaire, c'est grave ?",
      answer: "pas du tout ! je peux t'aider à créer ton compte publicitaire si tu n'en as pas encore. c'est inclus dans tous les forfaits.",
    },
    {
      question: "qu'est-ce que vous entendez par 'visuel pub pro' ?",
      answer: "dans le forfait Premium, je crée 4 visuels (images ou carrousels) optimisés pour la publicité. des designs qui attirent l'attention et poussent à l'action, adaptés aux standards des plateformes.",
    },
  ];

  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block glass-card px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
            questions fréquentes
          </span>
          <h2 className="section-title mb-3 md:mb-4">
            <span className="text-foreground">Tu as des </span>
            <span className="text-primary">questions</span>
            <span className="text-foreground"> ?</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            voici les réponses aux questions les plus courantes. si tu ne trouves pas ta réponse, contacte-moi directement.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border border-border/50 rounded-xl px-3 md:px-6 py-2 md:py-4 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-xs md:text-sm lg:text-base text-foreground hover:text-primary hover:no-underline py-2 md:py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-muted-foreground pb-2 md:pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* CTA */}
          <div className="text-center mt-8 md:mt-12">
            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">Tu as encore des questions ?</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-sm md:text-base"
            >
              <MessageCircle className="w-4 md:w-5 h-4 md:h-5" />
              pose-moi ta question
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
