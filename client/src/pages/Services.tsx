import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Factory, GaugeCircle, Hammer, Leaf, Shield } from "lucide-react";

const servicePackages = [
  {
    title: "Turnkey Agricultural Package",
    icon: Leaf,
    bullets: [
      "Hydro-geological study and soil conductivity analysis",
      "High-discharge borewell drilling up to 1,500 feet",
      "Submersible pump sizing and drip irrigation integration",
      "Seasonal recharge pit design and maintenance training",
    ],
  },
  {
    title: "Industrial Water Infrastructure",
    icon: Factory,
    bullets: [
      "Multi-rig deployment for rapid execution",
      "Mud circulation and compressor-based drilling",
      "Process-water filtration and storage consultation",
      "Compliance documentation with pollution control boards",
    ],
  },
  {
    title: "Community & Smart City Plans",
    icon: Shield,
    bullets: [
      "Centralized borewell clusters and telemetry integration",
      "SCADA-ready pump automation and alerting",
      "Quality testing lab coordination and reporting",
      "AMC contracts with guaranteed response windows",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Assessment & Planning",
    description:
      "Detailed project scoping, site surveys, and permissions. Our engineers model discharge requirements, energy availability, and site logistics before mobilization.",
  },
  {
    step: "02",
    title: "Mobilization & Drilling",
    description:
      "Rigs, compressors, and mud pumps dispatched with a dedicated supervisor. We maintain real-time drilling logs and video capture at critical depths.",
  },
  {
    step: "03",
    title: "Casing & Finishing",
    description:
      "Robust MS/UPVC casing, gravel packing, flushing, and yield testing. Pump installation, electrification, and water-quality baseline reporting included.",
  },
  {
    step: "04",
    title: "Aftercare & Monitoring",
    description:
      "Recharge design, AMC plans, telemetry add-ons, and annual health checks to ensure sustainable extraction and uninterrupted supply.",
  },
];

const faqs = [
  {
    question: "Can you work alongside existing civil contractors?",
    answer:
      "Yes. We frequently collaborate with civil and MEP contractors. Our project managers coordinate shift schedules and safety protocols to keep the overall build on track.",
  },
  {
    question: "What documentation do you provide after completion?",
    answer:
      "You receive drilling logs, depth and strata records, casing specifications, pump curves, electrical load analysis, and water test reports where applicable.",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer:
      "We have tiered annual maintenance plans that cover pump servicing, electrical checks, water testing, and emergency call-outs with defined SLAs.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-chart-2/10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-chart-1/10 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-chart-2/10 to-transparent" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
            <Badge className="bg-chart-2/15 text-chart-2 border-chart-2/30 mb-6">Our Services</Badge>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              End-to-end borewell solutions for every sector
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Heritage Borewells brings together geologists, drilling specialists, pump engineers, and compliance experts.
              Choose a turnkey engagement or individual services to complement your existing infrastructure plan.
            </p>
          </div>
        </section>

        <section className="relative z-10 -mt-10 md:-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-xl border-border/60">
              <CardContent className="p-8 md:p-12">
                <div className="grid gap-10 md:grid-cols-3">
                  {servicePackages.map(({ title, icon: Icon, bullets }) => (
                    <div key={title} className="rounded-2xl border border-border/60 bg-card p-6 space-y-5">
                      <div className="flex items-center gap-3">
                        <span className="rounded-lg bg-chart-2/15 p-3 text-chart-2">
                          <Icon className="h-6 w-6" />
                        </span>
                        <h2 className="font-serif text-xl font-semibold">{title}</h2>
                      </div>
                      <Separator className="bg-border" />
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        {bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <CheckCircle2 className="h-4 w-4 text-chart-2 mt-1 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesSection />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-chart-1/15 text-chart-1 border-chart-1/30 mb-4">Our process</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
                Structured delivery for predictable outcomes
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every engagement follows our four-stage methodology, ensuring quality benchmarks and transparent
                communication from day one.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {processSteps.map(({ step, title, description }) => (
                <Card key={title} className="border-border/60">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="h-12 w-12 rounded-full bg-chart-2/15 text-chart-2 flex items-center justify-center font-semibold">
                      {step}
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground leading-relaxed">{description}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/60">
              <CardHeader>
                <Badge className="bg-chart-2/15 text-chart-2 border-chart-2/30 w-fit mb-4">Common queries</Badge>
                <CardTitle className="font-serif text-3xl font-bold">
                  Everything you need to know before commissioning us
                </CardTitle>
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

        <section className="py-16 md:py-24 bg-muted/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border/60 bg-card shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-10 space-y-4">
                  <Badge className="bg-chart-2/15 text-chart-2 border-chart-2/30">Ready to begin?</Badge>
                  <h2 className="font-serif text-3xl font-bold">
                    Share your requirements and receive a custom execution plan
                  </h2>
                  <p className="text-muted-foreground">
                    Our consultants prepare detailed proposals with drilling timelines, crew allocation, and equipment
                    schedules tailored to your location.
                  </p>
                </div>
                <div className="border-l border-border/60">
                  <ContactSection />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

