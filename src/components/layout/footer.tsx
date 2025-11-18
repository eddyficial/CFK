import Link from 'next/link';
import { Logo } from '../icons/logo';

export default function Footer() {
  return (
    <footer className="py-12 w-full bg-card">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Your trusted partner for shipping to East Africa.
          </p>
        </div>
        <div>
          <h4 className="font-bold font-headline mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Track Your Shipment</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Get a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold font-headline mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold font-headline mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>info@chauffeurskenya.com</li>
            <li>+44 123 456 7890</li>
          </ul>
        </div>
      </div>
      <div className="container text-center mt-8 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Chauffeurs Kenya Freight. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
