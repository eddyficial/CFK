import Link from 'next/link';
import { Logo } from '../icons/logo';

export default function Footer() {
  return (
    <footer className="py-16 w-full bg-card/50 border-t border-border/30">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your trusted partner for freight shipping to East Africa. Moving Dreams Across Continents.
          </p>
        </div>

        <div>
          <h4 className="font-bold font-headline mb-4 text-sm uppercase tracking-wider text-foreground/70">Quick Links</h4>
          <ul className="space-y-3">
            <FooterLink href="/" label="Home" />
            <FooterLink href="/services" label="Services" />
            <FooterLink href="/track" label="Track Your Shipment" />
            <FooterLink href="/quote" label="Get a Quote" />
          </ul>
        </div>

        <div>
          <h4 className="font-bold font-headline mb-4 text-sm uppercase tracking-wider text-foreground/70">Services</h4>
          <ul className="space-y-3">
            <FooterLink href="/services" label="Sea Freight" />
            <FooterLink href="/services" label="Customs Clearance" />
            <FooterLink href="/services" label="Cargo Insurance" />
            <FooterLink href="/services" label="Inland Transport" />
          </ul>
        </div>

        <div>
          <h4 className="font-bold font-headline mb-4 text-sm uppercase tracking-wider text-foreground/70">Contact Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span>info@chauffeurskenya.com</span>
            </li>
            <li>+1 (972) 815-5863</li>
            <li>Mombasa, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-8 border-t border-border/20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Chauffeurs Kenya Freight. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/services" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/services" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
        {label}
      </Link>
    </li>
  );
}
