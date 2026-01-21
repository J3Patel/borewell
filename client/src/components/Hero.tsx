import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/Owner_with_drilling_machines_hero_05aea981.png";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-primary/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-6 bg-ring/20 text-ring border-ring backdrop-blur-sm" data-testid="badge-since">
          <Award className="h-4 w-4 mr-2" />
          Since 1995
        </Badge>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
          30+ Years of Trusted Borewell Solutions Across India
        </h1>

        <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Expert borewell drilling services with three decades of experience serving communities and industries nationwide
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="outline"
            className="bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground hover:bg-background/20"
            onClick={scrollToContact}
            data-testid="button-get-quote"
          >
            Get a Quote
          </Button>
          <a href="tel:+919921674492">
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground hover:bg-background/20"
              data-testid="button-call-now"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-ring">30+</div>
            <div className="text-sm text-primary-foreground/80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-ring">5000+</div>
            <div className="text-sm text-primary-foreground/80">Satisfied Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-ring">All India</div>
            <div className="text-sm text-primary-foreground/80">Service Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
}
