
'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
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
