'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { Logo } from '../icons/logo';
import { Share2 } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/track', label: 'Track' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = 'Chauffeurs Freight Kenya - Global Freight Delivered';
    const text = 'Track your shipments in real-time with Chauffeurs Freight Kenya.';
    if (navigator.share) {
      try { await navigator.share({ title, text, url }); } catch {}
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-10 w-auto text-white" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" asChild className="text-foreground/80 hover:text-foreground text-sm font-medium">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleShare}
            className="flex items-center justify-center h-9 w-9 rounded-lg hover:bg-secondary text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Share"
          >
            <Share2 className="h-4 w-4" />
          </button>
          <Button asChild className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
            <Link href="/quote">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
