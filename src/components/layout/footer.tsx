import Link from 'next/link';
import { Logo } from '../icons/logo';

export default function Footer() {
  return (
    <footer className="py-10 w-full bg-card/50 border-t border-border/30">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-2 lg:col-span-1 space-y-3">
          <Logo />
          <p className="text-xs text-muted-foreground leading-relaxed">
            Your trusted partner for freight shipping to East Africa. Moving Dreams Across Continents.
          </p>
        </div>
        <div>
          <h4 className="font-bold font-headline mb-3 text-[10px] uppercase tracking-wider text-foreground/70">Quick Links</h4>
          <ul className="space-y-2">
            <FooterLink href="/" label="Home" />
            <FooterLink href="/services" label="Services" />
            <FooterLink href="/track" label="Track Shipment" />
            <FooterLink href="/quote" label="Get a Quote" />
          </ul>
        </div>
        <div>
          <h4 className="font-bold font-headline mb-3 text-[10px] uppercase tracking-wider text-foreground/70">Services</h4>
          <ul className="space-y-2">
            <FooterLink href="/services" label="Sea Freight" />
            <FooterLink href="/services" label="Customs Clearance" />
            <FooterLink href="/services" label="Cargo Insurance" />
            <FooterLink href="/services" label="Inland Transport" />
          </ul>
        </div>
        <div>
          <h4 className="font-bold font-headline mb-3 text-[10px] uppercase tracking-wider text-foreground/70">Contact</h4>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li>info@chauffeurskenya.com</li>
            <li>+1 (972) 815-5863</li>
            <li>Mombasa, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 pt-6 border-t border-border/20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Chauffeurs Freight Kenya. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/services" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/services" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-xs text-muted-foreground hover:text-primary transition-colors">{label}</Link>
    </li>
  );
}
