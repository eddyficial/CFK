
'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { Home, Search, Ship, FileText, Phone } from 'lucide-react';
import { Logo } from '../icons/logo';
import { UserNav } from '../auth/user-nav';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-10 w-auto text-white" />
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink href="/" label="Home" />
          <NavLink href="#" label="Services" />
          <NavLink href="#" label="Track" />
          <NavLink href="#" label="Contact" />
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="hidden md:flex">Get a Quote</Button>
          <UserNav />
        </div>
      </div>
      {/* Mobile navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-2 flex justify-around items-center">
          <NavButton href="/" icon={<Home className="h-5 w-5" />} label="Home" />
          <NavButton href="#" icon={<Ship className="h-5 w-5" />} label="Services" />
          <NavButton href="#" icon={<Search className="h-5 w-5" />} label="Track" />
          <NavButton href="#" icon={<Phone className="h-5 w-5" />} label="Contact" />
          <NavButton href="#" icon={<FileText className="h-5 w-5" />} label="Quote" />
      </div>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Button variant="link" asChild className="text-white text-sm font-medium">
            <Link href={href}>{label}</Link>
        </Button>
    )
}

function NavButton({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <Button variant="ghost" asChild className="flex flex-col items-center justify-center h-auto p-1 text-xs text-white space-y-1">
      <Link href={href}>
        {icon}
        <span>{label}</span>
      </Link>
    </Button>
  )
}
