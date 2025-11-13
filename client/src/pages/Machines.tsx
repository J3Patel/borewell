import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MachinesSection from "@/components/MachinesSection";
import GallerySection from "@/components/GallerySection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Gauge, Hammer, Lightbulb, ShieldCheck, Sparkles, Truck } from "lucide-react";

const fleetHighlights = [
  {
    title: "12 High-Capacity Rigs",
    description:
      "Truck and trailer-mounted hydraulic rigs reaching depths of 2,000 feet with auto-rod handling for precision drilling.",
    icon: Truck,
  },
  {
    title: "9 Mud Pump Units",
    description:
      "High-pressure mud circulation systems with desanders and recyclers that protect bore integrity in sedimentary zones.",
    icon: Gauge,
  },
  {
    title: "14 Tractor Rigs",
    description:
      "Agile rigs for rural and narrow-access locations. Ideal for agricultural lands, orchards, and hillside settlements.",
    icon: Hammer,
  },
  {
    title: "Solar Pump Integrations",
    description:
      "In-house fabrication team to retrofit borewells with solar-powered pumping, telemetry, and remote performance monitoring.",
    icon: Lightbulb,
  },
];

const maintenancePractices = [
  {
    title: "Preventive Diagnostics",
    description:
      "Daily pre-dispatch checklists cover hydraulic systems, compressor calibration, pressure testing, and lubrication audits.",
  },
  {
    title: "On-site Safety Protocols",
    description:
      "Mandatory PPE, rig stabilization, emergency shut-offs, and safety marshals ensure compliance with ISO 45001 standards.",
  },
  {
    title: "Inventory & Spares",
    description:
      "Central warehouse stocked with OEM spares, drill pipes, bits, and hammers. Mobile inventory vans accompany long-duration projects.",
  },
  {
    title: "Telemetry & Reporting",
    description:
      "Digital logging of depth, strata, RPM, and torque with real-time dashboards accessible to project stakeholders.",
  },
];

const faqs = [
  {
    question: "Can your rigs operate in rocky or basalt regions?",
    answer:
      "Yes. We deploy down-the-hole (DTH) hammers, high-torque rotary rigs, and specialized bits suitable for granite, basalt, and other hard formations.",
  },
  {
    question: "Do you handle maintenance of installed pumps?",
    answer:
      "Our service teams provide scheduled pump maintenance, motor rewinding, control panel servicing, and telemetry upgrades throughout the lifecycle.",
  },
  {
    question: "What power sources are supported?",
    answer:
      "All rigs can connect to three-phase grid supply or on-site generators. For off-grid projects we supply mobile DG sets and solar pump kits.",
  },
];

export default function Machines() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-chart-1/10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-chart-1/10 to-transparent" />
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
            <Badge className="bg-chart-1/15 text-chart-1 border-chart-1/30 mb-6">Our Equipment</Badge>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Modern rigs and support systems for every terrain
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Heritage Borewells invests in a continually refreshed fleet, ensuring efficiency, safety, and precision on
              projects ranging from dense urban sites to remote, rugged landscapes.
            </p>
          </div>
        </section>

        <section className="relative z-10 -mt-10 md:-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-xl border-border/60">
              <CardContent className="p-8 md:p-12 space-y-10">
                <div className="grid gap-8 md:grid-cols-2">
                  {fleetHighlights.map(({ title, description, icon: Icon }) => (
                    <div key={title} className="rounded-2xl border border-border/60 bg-card p-6 space-y-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-chart-1/15 text-chart-1 border border-chart-1/30 px-3 py-1 text-sm font-medium w-fit">
                        <Icon className="h-4 w-4" />
                        Fleet highlight
                      </span>
                      <h2 className="font-serif text-2xl font-semibold">{title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="grid gap-6 md:grid-cols-2">
                  {maintenancePractices.map(({ title, description }) => (
                    <Card key={title} className="border-border/60 bg-muted/40">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground leading-relaxed">
                        {description}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <MachinesSection />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/60">
              <CardHeader>
                <Badge className="bg-chart-1/15 text-chart-1 border-chart-1/30 w-fit mb-4">
                  Reliability questions
                </Badge>
                <CardTitle className="font-serif text-3xl font-bold">Equipment &amp; maintenance FAQ</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map(({ question, answer }) => (
                    <AccordionItem value={question} key={question} className="border border-border/60 rounded-lg px-4">
                      <AccordionTrigger className="text-left text-base font-semibold">{question}</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                        {answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <Badge className="bg-chart-1/15 text-chart-1 border-chart-1/30">See the rigs in action</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Browse our latest drilling deployments across India
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From mountainous regions to coastal belts, our project gallery documents techniques, safety practices, and
              finished installations.
            </p>
          </div>
          <div className="mt-12">
            <GallerySection />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-chart-1/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border/60 bg-card shadow-lg p-8 md:p-12 text-center space-y-6">
              <ShieldCheck className="h-12 w-12 text-chart-1 mx-auto" />
              <h3 className="font-serif text-3xl font-bold">Ready to mobilize our fleet?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Share your site coordinates, geotechnical reports, or past drilling data. We will propose the optimal rig,
                crew strength, and execution plan within 24 hours.
              </p>
              <span className="inline-flex items-center gap-2 rounded-full border border-chart-1/30 bg-chart-1/15 text-chart-1 px-4 py-2 text-sm font-medium w-fit mx-auto">
                <Sparkles className="h-4 w-4" />
                Nationwide deployment within 48 hours
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

