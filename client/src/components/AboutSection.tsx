import ownerImage from "@assets/generated_images/Owner_professional_portrait_photo_5144d72c.png";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-card" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Three Decades of Excellence
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Since 1995, we have been at the forefront of borewell drilling services across India. What started as a small operation with a single drilling rig has grown into one of the most trusted names in the industry.
              </p>
              <p>
                Our journey spans over 30 years of dedicated service to farmers, industries, and communities. We have successfully completed over 5,000 borewell projects across diverse terrains and geological conditions throughout the country.
              </p>
              <p>
                With state-of-the-art equipment and a team of experienced professionals, we continue to uphold the values of quality, reliability, and customer satisfaction that have defined our legacy.
              </p>
            </div>

            <div className="mt-8">
              <div className="text-3xl font-signature text-ring" data-testid="text-signature">
                Vallabhbhai Patel (V. M. Patel)
              </div>
              <div className="text-sm text-muted-foreground mt-1">Founder & Director</div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border-4 border-ring/20">
                <img
                  src={ownerImage}
                  alt="Vallabhbhai Patel - Founder"
                  className="w-full h-full object-cover"
                  data-testid="img-owner"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-ring text-primary-foreground px-6 py-3 rounded-lg font-bold text-lg shadow-lg">
                Since 1995
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
