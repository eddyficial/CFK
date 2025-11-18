import Link from 'next/link';
import { Button } from '../ui/button';
import { Home, Package, Search, User } from 'lucide-react';
import { Logo } from '../icons/logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto">
        <Link href="/" className="mb-4">
          <Logo className="h-10 w-auto text-white" />
        </Link>
        <nav className="flex items-center justify-center space-x-6 w-full">
          <NavButton href="/" icon={<Home className="h-5 w-5" />} label="Home" />
          <NavButton href="#" icon={<Package className="h-5 w-5" />} label="Quote" />
          <NavButton href="#" icon={<Search className="h-5 w-5" />} label="Track" />
          <NavButton href="/login" icon={<User className="h-5 w-5" />} label="Sign In" />
        </nav>
      </div>
    </header>
  );
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
