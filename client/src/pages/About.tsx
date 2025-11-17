import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award, Building, Compass, MapPinned, Users, MapPin } from "lucide-react";

const timeline = [
  {
    year: "1982",
    location: "Chambal, Madhya Pradesh",
    description: "Company founded with first borewell drilling work completed in Chambal region, establishing our foundation in water access solutions.",
    period: "Foundation",
  },
  {
    year: "Mid-1980s",
    location: "Indore, Madhya Pradesh",
    description: "Expanded operations to Indore, serving growing industrial and agricultural needs in central India.",
    period: "Regional Expansion",
  },
  {
    year: "Late 1980s",
    location: "Ahmedabad, Gujarat",
    description: "Established presence in Ahmedabad, supporting rapid urbanization and industrial development in western India.",
    period: "Western India Entry",
  },
  {
    year: "Early 1990s",
    location: "Shahada, Maharashtra",
    description: "Moved operations to Shahada, strengthening our foothold in Maharashtra's agricultural heartland.",
    period: "Maharashtra Operations",
  },
  {
    year: "2000-2015",
    location: "Chopda, Maharashtra",
    description: "15 years of dedicated service from Chopda base, completing hundreds of projects across Maharashtra and neighboring states.",
    period: "15 Years in Chopda",
  },
  {
    year: "2021-Present",
    location: "Surat, Gujarat",
    description: "Current headquarters in Surat, strategically positioned to serve Gujarat and coordinate PAN-India operations with enhanced logistics.",
    period: "Current Base",
  },
];

const panIndiaCoverage = [
  { state: "Mumbai, Maharashtra", description: "Metropolitan projects and industrial zones" },
  { state: "Odisha", description: "Mining and industrial water supply solutions" },
  { state: "Madhya Pradesh", description: "Agricultural and rural water schemes" },
  { state: "Karnataka", description: "IT hubs, residential complexes, and farms" },
  { state: "Andhra Pradesh", description: "Industrial corridors and smart city projects" },
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
              Water access pioneers for over four decades
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Since 1982 we have delivered reliable water infrastructure for farms, industries, residential projects, and
              government programs across India. Our teams combine deep geological insight with purpose-built drilling technology to keep
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
                      <h3 className="font-serif text-2xl font-bold mb-2">Current Operations</h3>
                      <p className="text-sm text-muted-foreground">
                        Headquartered in Surat, Gujarat since 2021, with 42 years of experience serving clients across India.
                        Our logistics enable cross-country mobilization within 48 hours.
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-ring" />
                        Major Project Locations
                      </h4>
                      <ul className="space-y-3">
                        {panIndiaCoverage.map(({ state, description }) => (
                          <li key={state} className="flex gap-3">
                            <MapPinned className="h-4 w-4 text-ring mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm">{state}</p>
                              <p className="text-xs text-muted-foreground">{description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-ring/15 text-ring border-ring/30 mb-4">Our Journey</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
                42 Years of Growth Across India
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From our first borewell in Chambal to our current base in Surat, follow our journey across states and decades.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ring via-ring/60 to-ring/30" />

              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start gap-6 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-y-1">
                      <div className="h-4 w-4 rounded-full bg-ring border-4 border-background shadow-lg" />
                    </div>

                    {/* Content card */}
                    <div
                      className={`flex-1 ${
                        index % 2 === 0
                          ? "md:pr-8 md:text-right md:ml-auto md:max-w-[45%]"
                          : "md:pl-8 md:text-left md:mr-auto md:max-w-[45%]"
                      }`}
                    >
                      <Card className="border-border/60 bg-card shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div
                            className={`flex items-center gap-2 mb-2 ${
                              index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                            }`}
                          >
                            <Badge className="bg-ring/15 text-ring border-ring/30">{item.year}</Badge>
                            <Badge variant="outline" className="text-xs">{item.period}</Badge>
                          </div>
                          <div className="flex items-center gap-2 text-ring">
                            <MapPin className="h-4 w-4" />
                            <CardTitle className="text-lg font-semibold">{item.location}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PAN India Coverage */}
            <div className="mt-16 pt-16 border-t border-border/60">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">PAN-India Project Coverage</h3>
                <p className="text-muted-foreground">
                  Beyond our operational bases, we've completed projects across major states and regions
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {panIndiaCoverage.map(({ state, description }) => (
                  <Card key={state} className="border-border/60 bg-card">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <MapPinned className="h-5 w-5 text-ring mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm mb-1">{state}</p>
                          <p className="text-xs text-muted-foreground">{description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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

