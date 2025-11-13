import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CalendarCheck, Clock, Headphones, MapPin, Phone, ShieldCheck, Wrench } from "lucide-react";

const serviceHighlights = [
  {
    title: "Emergency Borewell Support",
    description:
      "Rapid response teams in every major city for urgent repairs or water-access issues.",
    icon: ShieldCheck,
  },
  {
    title: "Project Planning Assistance",
    description:
      "On-site assessments, geological guidance, and paperwork support for large installations.",
    icon: Wrench,
  },
  {
    title: "Dedicated Relationship Managers",
    description:
      "Single point of contact for government tenders, industrial clients, and housing projects.",
    icon: Headphones,
  },
];

const faqs = [
  {
    question: "How quickly can you mobilize a drilling team?",
    answer:
      "For most metro and tier-1 cities we can deploy within 24 hours. Remote locations typically take 48-72 hours while we move rigs and support crew.",
  },
  {
    question: "Do you assist with groundwater surveys and permissions?",
    answer:
      "Yes. We collaborate with certified hydro-geologists for surveys and guide you through local municipality permissions, NOC, and electricity board coordination.",
  },
  {
    question: "Can I schedule work outside regular business hours?",
    answer:
      "Absolutely. Our crews operate in shifts, including night operations, to meet project timelines and minimize disruption for commercial properties.",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-ring/10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-ring/5 to-transparent" />
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
            <Badge className="mb-6 inline-flex items-center gap-2 bg-ring/15 text-ring border-ring/30">
              <Phone className="h-4 w-4" /> We respond within 24 hours nationwide
            </Badge>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Speak with our drilling specialists
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
              Whether you need agricultural borewells, industrial water supply, or solar-powered
              pumping solutions, our senior consultants are ready to guide you from feasibility to
              execution. Let’s chart the best approach for consistent, sustainable water access.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-ring/30 bg-card/60 backdrop-blur">
                <CardHeader className="flex flex-row items-start gap-3 pb-4">
                  <div className="rounded-lg bg-ring/15 p-3 text-ring">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-semibold">Direct Lines</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Connect with our pan-India support desk
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-1 text-sm">
                  <p className="font-medium text-foreground">+91 98765 43210</p>
                  <p className="font-medium text-foreground">+91 98765 43211</p>
                  <p className="text-muted-foreground">Available 7 AM – 10 PM IST</p>
                </CardContent>
              </Card>

              <Card className="border-ring/30 bg-card/60 backdrop-blur">
                <CardHeader className="flex flex-row items-start gap-3 pb-4">
                  <div className="rounded-lg bg-chart-2/15 p-3 text-chart-2">
                    <CalendarCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-semibold">Book a Site Visit</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Experts at your location within 48 hours
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="text-sm space-y-1">
                  <p className="font-medium text-foreground">on-site@heritageborewells.com</p>
                  <p className="text-muted-foreground">
                    Share project coordinates, access constraints, and urgency.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-ring/30 bg-card/60 backdrop-blur">
                <CardHeader className="flex flex-row items-start gap-3 pb-4">
                  <div className="rounded-lg bg-chart-1/15 p-3 text-chart-1">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-semibold">24×7 Hotline</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Continual support for active drilling projects
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="text-sm space-y-1">
                  <p className="font-medium text-foreground">+91 90000 11111</p>
                  <p className="text-muted-foreground">Emergency crew dispatch &amp; escalations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="relative z-10 -mt-10 md:-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-xl border-border/60">
              <CardContent className="p-0">
                <ContactSection />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <Badge className="bg-ring/15 text-ring border-ring/30 mb-4">Why work with us</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
                National network, local expertise
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                From rugged Himalayan foothills to coastal aquifers, Heritage Borewells has serviced
                more than 4,000 drilling projects. Our regional crews understand soil profiles,
                municipal regulations, and groundwater behavior across India’s diverse terrain.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {serviceHighlights.map(({ title, description, icon: Icon }) => (
                <Card key={title} className="border-border/60 bg-card">
                  <CardHeader className="flex items-start gap-4 pb-3">
                    <span className="rounded-lg bg-ring/10 p-3 text-ring">
                      <Icon className="h-6 w-6" />
                    </span>
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">{description}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[2fr,3fr] items-start">
              <div className="space-y-6">
                <Badge className="bg-ring/15 text-ring border-ring/30">Operations Network</Badge>
                <h3 className="font-serif text-3xl font-bold">
                  30+ years of groundwater intelligence
                </h3>
                <p className="text-muted-foreground">
                  With permanent yards in Bangalore, Chennai, Hyderabad, Pune, and Jaipur, we can
                  mobilize rigs, compressors, and mud pump units anywhere in India. Our in-house
                  technicians maintain every rig so that your drilling schedule stays on track.
                </p>

                <div className="rounded-xl border border-border/60 bg-card p-5 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-5 w-5 text-ring" />
                    <span className="text-muted-foreground">
                      Corporate office: 123 Industrial Area, Sector 5, Bangalore, Karnataka 560001
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Wrench className="h-5 w-5 text-chart-1" />
                    <span className="text-muted-foreground">
                      Fleet: 12 high-capacity rigs, 9 mud pump units, 14 tractor-mounted rigs
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CalendarCheck className="h-5 w-5 text-chart-2" />
                    <span className="text-muted-foreground">
                      Service slots available Monday – Sunday with 3 rotational crews.
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-border/60 rounded-2xl bg-card p-6 md:p-8 shadow-sm">
                <h4 className="font-serif text-2xl font-semibold mb-4">Frequently Asked Questions</h4>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map(({ question, answer }) => (
                    <AccordionItem value={question} key={question} className="border border-border/60 rounded-lg px-4">
                      <AccordionTrigger className="text-left text-base font-semibold">
                        {question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                        {answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

