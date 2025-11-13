import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award, Building, Compass, MapPinned, Users } from "lucide-react";

const milestones = [
  {
    year: "1992",
    title: "Foundation",
    description:
      "Launched Heritage Borewells with a single truck-mounted rig serving agricultural communities around Karnataka.",
  },
  {
    year: "2001",
    title: "Nationwide Expansion",
    description:
      "Opened regional yards in Maharashtra and Andhra Pradesh, enabling rapid mobilization for industrial projects.",
  },
  {
    year: "2010",
    title: "Technology Upgrade",
    description:
      "Invested in high-capacity hydraulic rigs, mud-pump recyclers, and a quality assurance lab for water testing.",
  },
  {
    year: "2020",
    title: "Sustainable Solutions",
    description:
      "Introduced solar borewell integrations and remote pump monitoring for housing societies and smart campuses.",
  },
];

const differentiators = [
  {
    title: "Experienced Hydrologists",
    description:
      "Government-certified hydrologists who study aquifers and advise on sustainable extraction plans.",
    icon: Compass,
  },
  {
    title: "30+ Dedicated Crews",
    description:
      "Rotational drilling teams stationed across India, each supervised by a project manager with 10+ years experience.",
    icon: Users,
  },
  {
    title: "Comprehensive Compliance Support",
    description:
      "Assistance with municipality permissions, electrical board coordination, and environmental clearances.",
    icon: Building,
  },
  {
    title: "Quality & Safety First",
    description:
      "ISO-aligned safety protocols, daily maintenance logs, and independent auditing of every completed borewell.",
    icon: Award,
  },
];

const coverage = [
  { label: "Urban & Smart Cities", description: "High-rise townships, SEZs, and commercial hubs across metro regions." },
  {
    label: "Industrial Corridors",
    description: "Factories, logistics parks, and food-processing units needing high-discharge supply.",
  },
  { label: "Agricultural Projects", description: "Drip irrigation, greenhouse cultivation, and dairy farms." },
  { label: "Government & Community", description: "Rural water schemes, gram panchayat programs, and CSR projects." },
];

const faqs = [
  {
    question: "What warranty do you provide on borewell construction?",
    answer:
      "Structural warranties cover up to 5 years, with annual health checks. Pump installations have brand-specific warranties from 12 to 36 months.",
  },
  {
    question: "How do you ensure groundwater sustainability?",
    answer:
      "We conduct preliminary hydro-geological surveys, adopt staggered recharge pits, and deploy flow meters to monitor extraction where required.",
  },
  {
    question: "Do you train on-site staff?",
    answer:
      "Yes, after commissioning we train maintenance teams on pump operations, water testing schedules, and recommended recharge practices.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-ring/10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-ring/5 to-transparent" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
            <Badge className="bg-ring/15 text-ring border-ring/30 mb-6">About Heritage Borewells</Badge>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Water access pioneers for over three decades
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Since 1992 we have delivered reliable water infrastructure for farms, industries, residential projects, and
              government programs. Our teams combine deep geological insight with purpose-built drilling technology to keep
              every project on schedule—no matter the soil profile or location.
            </p>
          </div>
        </section>

        <section className="relative z-10 -mt-10 md:-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-xl border-border/60">
              <CardContent className="p-8 md:p-12">
                <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
                  <div className="space-y-6">
                    <h2 className="font-serif text-3xl font-bold">Our mission</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We believe dependable water access transforms livelihoods. Heritage Borewells exists to provide
                      high-performance, sustainable, and regulation-compliant borewell solutions that last for generations.
                      Every contract—big or small—receives the same disciplined project planning and transparent reporting.
                    </p>
                    <Separator />
                    <div className="grid sm:grid-cols-2 gap-6">
                      {differentiators.map(({ title, description, icon: Icon }) => (
                        <div key={title} className="flex gap-4">
                          <span className="rounded-lg bg-ring/10 text-ring p-3 h-fit">
                            <Icon className="h-6 w-6" />
                          </span>
                          <div>
                            <h3 className="font-semibold">{title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-muted/40 p-6 space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl font-bold mb-2">Pan-India coverage</h3>
                      <p className="text-sm text-muted-foreground">
                        Head office in Bangalore with satellite yards in Chennai, Hyderabad, Pune, Jaipur, Delhi, and Raipur.
                        Our logistics enable cross-country mobilization within 48 hours.
                      </p>
                    </div>
                    <Separator />
                    <ul className="space-y-4">
                      {coverage.map(({ label, description }) => (
                        <li key={label} className="flex gap-3">
                          <MapPinned className="h-5 w-5 text-ring mt-1" />
                          <div>
                            <p className="font-medium">{label}</p>
                            <p className="text-sm text-muted-foreground">{description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Three decades of consistent delivery
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {milestones.map(({ year, title, description }) => (
                <Card key={year} className="border-border/60 bg-card">
                  <CardHeader>
                    <Badge className="w-fit bg-ring/15 text-ring border-ring/30">{year}</Badge>
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground leading-relaxed">{description}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <AboutSection />

        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-ring/15 text-ring border-ring/30 mb-4">Aligned services</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">From survey to commissioning</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Heritage Borewells provides turnkey solutions. Explore how our specialist teams coordinate every step of the
                project lifecycle.
              </p>
            </div>
            <ServicesSection />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/60">
              <CardHeader>
                <Badge className="bg-ring/15 text-ring border-ring/30 w-fit mb-4">Questions we hear</Badge>
                <CardTitle className="font-serif text-3xl font-bold">Frequently asked about Heritage</CardTitle>
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
      </main>
      <Footer />
    </div>
  );
}

