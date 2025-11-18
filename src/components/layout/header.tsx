import Link from 'next/link';
import { Button } from '../ui/button';
import { Home, Package, Search } from 'lucide-react';
import { Logo } from '../icons/logo';
import { UserNav } from '../auth/user-nav';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <Link href="/">
          <Logo className="h-10 w-auto text-white" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="/" label="Home" />
          <NavLink href="#" label="Quote" />
          <NavLink href="#" label="Track" />
        </nav>
        <div className="flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
      {/* Mobile navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-2 flex justify-around">
          <NavButton href="/" icon={<Home className="h-5 w-5" />} label="Home" />
          <NavButton href="#" icon={<Package className="h-5 w-5" />} label="Quote" />
          <NavButton href="#" icon={<Search className="h-5 w-5" />} label="Track" />
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
    <Button variant="ghost" asChild className="flex flex-col items-center justify-center h-auto p-2 text-xs text-white">
      <Link href={href}>
        {icon}
        <span>{label}</span>
      </Link>
    </Button>
  )
}
