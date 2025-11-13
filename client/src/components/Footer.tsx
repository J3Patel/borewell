import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-signature text-ring mb-4">Heritage Borewells</div>
            <p className="text-primary-foreground/80 text-sm">
              Trusted borewell drilling services across India since 1995. Three decades of excellence and reliability.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-ring transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-ring transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-ring transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/machines" className="text-primary-foreground/80 hover:text-ring transition-colors">
                  Our Equipment
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-primary-foreground/80 hover:text-ring transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-ring transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Borewell Drilling</li>
              <li>Compressor Works</li>
              <li>Mud Pump Machines</li>
              <li>Tractor-Mounted Drilling</li>
              <li>Solar Borewell Setup</li>
              <li>Construction Base Drilling</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">info@heritageborewells.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Bangalore, Karnataka<br />India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Heritage Borewells. All rights reserved. | Trusted Nationwide Since 1995</p>
        </div>
      </div>
    </footer>
  );
}
