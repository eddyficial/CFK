import Link from 'next/link';
import { Ship, Twitter, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
             <Link
                href="/"
                className="flex items-center gap-2 text-lg font-bold md:text-xl font-headline text-primary"
              >
                <Ship className="h-6 w-6 text-accent" />
                <span>ContainerTrack</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                Track Your Freight in Real-Time.
              </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Quick Links</h4>
                 <ul className="space-y-1">
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Home</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Services</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                 </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Legal</h4>
                 <ul className="space-y-1">
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                 </ul>
              </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
             <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
             </div>
             <p className="text-sm text-muted-foreground text-left md:text-right">
                © {new Date().getFullYear()} ContainerTrack. All Rights Reserved.
              </p>
          </div>
        </div>
      </div>
    </footer>
  );
}