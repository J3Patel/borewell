import { Card } from "@/components/ui/card";
import compressorImage from "@assets/generated_images/Industrial_compressor_drilling_machine_1021cbe8.png";
import tractorImage from "@assets/generated_images/Tractor_mounted_drilling_rig_a267c6f2.png";
import mudPumpImage from "@assets/generated_images/Mud_pump_drilling_equipment_5f9cec0b.png";
import solarImage from "@assets/generated_images/Solar_borewell_installation_modern_aa18ab11.png";

const machines = [
  {
    name: "Industrial Compressor",
    image: compressorImage,
    description: "High-capacity air compressor for deep drilling operations",
  },
  {
    name: "Tractor-Mounted Rig",
    image: tractorImage,
    description: "Mobile drilling solution for rural and agricultural areas",
  },
  {
    name: "Mud Pump Equipment",
    image: mudPumpImage,
    description: "Specialized pumping systems for challenging geological conditions",
  },
  {
    name: "Solar Borewell System",
    image: solarImage,
    description: "Eco-friendly solar-powered water extraction solution",
  },
];

export default function MachinesSection() {
  return (
    <section className="py-16 md:py-24 bg-background" id="machines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Equipment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art machinery combining traditional reliability with modern technology
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {machines.map((machine, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer"
              data-testid={`card-machine-${index}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {machine.name}
                </h3>
                <p className="text-sm text-muted-foreground">{machine.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
