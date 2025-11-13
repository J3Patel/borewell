import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import vintage90s from "@assets/generated_images/Vintage_1990s_drilling_work_ef811e0a.png";
import team2000s from "@assets/generated_images/2000s_team_drilling_operations_fbbbc903.png";
import tractorRig from "@assets/generated_images/Tractor_mounted_drilling_rig_a267c6f2.png";
import solarModern from "@assets/generated_images/Solar_borewell_installation_modern_aa18ab11.png";

const galleryItems = [
  {
    image: vintage90s,
    decade: "1990s",
    title: "Early Days",
    description: "Our first drilling projects in rural India",
  },
  {
    image: team2000s,
    decade: "2000s",
    title: "Growing Team",
    description: "Expanding operations across multiple states",
  },
  {
    image: tractorRig,
    decade: "2010s",
    title: "Modern Equipment",
    description: "Introducing tractor-mounted drilling solutions",
  },
  {
    image: solarModern,
    decade: "Present",
    title: "Sustainable Future",
    description: "Leading with solar-powered borewell systems",
  },
];

export default function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-card" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three decades of dedication, innovation, and service to communities across India
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer"
              data-testid={`card-gallery-${index}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-ring text-primary-foreground">
                  {item.decade}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
