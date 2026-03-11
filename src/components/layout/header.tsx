'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Logo } from '../icons/logo';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/track', label: 'Track' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

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

        <div className="flex items-center gap-3">
          <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
            <Link href="/quote">Get a Quote</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-md animate-fade-in-up">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 px-4">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/quote" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
