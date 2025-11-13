import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Drill, Wind, Droplets, Tractor, Sun, Building2 } from "lucide-react";

const services = [
  {
    icon: Drill,
    title: "Borewell Drilling",
    description: "Professional borewell drilling services for residential, agricultural, and industrial needs with advanced equipment and experienced technicians.",
  },
  {
    icon: Wind,
    title: "Compressor Works",
    description: "High-capacity air compressor services for deep drilling operations, ensuring efficient and reliable water extraction across all terrains.",
  },
  {
    icon: Droplets,
    title: "Mud Pump Machines",
    description: "Specialized mud pump equipment for challenging geological conditions, providing stable drilling operations in difficult formations.",
  },
  {
    icon: Tractor,
    title: "Tractor-Mounted Drilling",
    description: "Mobile drilling solutions mounted on tractors for easy access to remote agricultural areas and farmlands across rural India.",
  },
  {
    icon: Sun,
    title: "Solar Borewell Setup",
    description: "Eco-friendly solar-powered borewell systems combining renewable energy with water extraction for sustainable farming solutions.",
  },
  {
    icon: Building2,
    title: "Construction Base Drilling",
    description: "Foundation and construction site drilling services for commercial and residential projects with precision and safety standards.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive borewell solutions tailored to meet diverse water extraction needs across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 cursor-pointer"
                data-testid={`card-service-${index}`}
              >
                <CardHeader className="gap-4">
                  <div className="h-12 w-12 rounded-lg bg-chart-2/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-chart-2" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
