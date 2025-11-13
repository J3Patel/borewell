import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Droplets, Leaf, Map, MountainSnow, Sun, Waves } from "lucide-react";

const categories = [
  {
    slug: "rural",
    label: "Rural & Agricultural",
    description:
      "Projects that support irrigation, dairy farms, and rural water supply schemes with customized tractor-mounted rigs.",
    highlights: [
      "Micro-irrigation ready borewells",
      "On-site mud recycling to protect fertile soil",
      "Solar pump retrofits for remote farms",
    ],
    icon: Leaf,
  },
  {
    slug: "urban",
    label: "Urban Infrastructure",
    description:
      "High-rise, commercial, and township deployments requiring tight-site mobilization and strict safety compliance.",
    highlights: [
      "Night-time operations with noise suppression",
      "Integrated recharge pits and filtration",
      "Telemetric pump monitoring for facility teams",
    ],
    icon: Sun,
  },
  {
    slug: "industrial",
    label: "Industrial & Manufacturing",
    description:
      "Large-scale discharge requirements for factories, logistics hubs, and process water utilities across India.",
    highlights: [
      "Multi-rig drilling for aggressive timelines",
      "Water quality testing and treatment guidance",
      "Preventive maintenance with guaranteed SLAs",
    ],
    icon: Droplets,
  },
];

const quickStats = [
  { value: "4,000+", label: "Borewells drilled since 1992" },
  { value: "48 hrs", label: "Average dispatch time for priority jobs" },
  { value: "97%", label: "Repeat clients across sectors" },
  { value: "15 states", label: "Operational presence with local crews" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-ring/10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ring/10 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-ring/5 to-transparent" />
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
            <Badge className="bg-ring/15 text-ring border-ring/30 mb-6 inline-flex items-center gap-2">
              <Camera className="h-4 w-4" /> Project showcase
            </Badge>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              A nationwide portfolio of successful borewell projects
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Explore field moments capturing our rigs, crews, and finished installations. Each assignment represents a
              partnership with communities, industries, and public institutions to secure reliable water access.
            </p>
          </div>
        </section>

        <section className="relative z-10 -mt-10 md:-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-xl border-border/60">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {quickStats.map(({ value, label }) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-ring/20 bg-ring/10 text-ring text-center px-6 py-8"
                    >
                      <p className="text-3xl md:text-4xl font-serif font-bold">{value}</p>
                      <p className="text-sm mt-2 text-ring/80">{label}</p>
                    </div>
                  ))}
                </div>
                <Separator />
                <Tabs defaultValue={categories[0].slug} className="w-full">
                  <TabsList className="grid md:grid-cols-3 gap-2 bg-muted/40 p-1">
                    {categories.map(({ slug, label, icon: Icon }) => (
                      <TabsTrigger key={slug} value={slug} className="data-[state=active]:bg-background data-[state=active]:shadow">
                        <Icon className="h-4 w-4 mr-2" />
                        {label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {categories.map(({ slug, description, highlights }) => (
                    <TabsContent key={slug} value={slug} className="mt-6">
                      <Card className="border-border/60">
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold">What you’ll see</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground">{description}</p>
                          <ul className="space-y-3 text-sm text-muted-foreground">
                            {highlights.map((item) => (
                              <li key={item} className="flex gap-2">
                                <Map className="h-4 w-4 text-ring mt-1" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <GallerySection />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border/60 bg-card shadow-lg p-8 md:px-12 space-y-6 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Want your site documented like our featured projects?
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our documentation team captures aerial, time-lapse, and on-ground footage during drilling. Ideal for tender
                submissions, compliance, and stakeholder presentations.
              </p>
              <div className="inline-flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-ring/30">
                  <MountainSnow className="h-4 w-4 text-ring" /> High-altitude operations
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-ring/30">
                  <Waves className="h-4 w-4 text-ring" /> Coastal aquifer drilling
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-ring/30">
                  <Leaf className="h-4 w-4 text-ring" /> Eco-sensitive zones
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-border/60">
              <CardHeader>
                <Badge className="bg-ring/15 text-ring border-ring/30 w-fit mb-4">Plan your project</Badge>
                <CardTitle className="font-serif text-3xl font-bold">
                  Engage our specialists for your next drilling assignment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactSection />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

