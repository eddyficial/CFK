import Link from 'next/link';
import { Ship } from 'lucide-react';
import { UserNav } from '@/components/auth/user-nav';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold md:text-xl font-headline text-primary"
        >
          <Ship className="h-6 w-6 text-accent" />
          <span>ContainerTrack</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#">Services</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#">Contact</Link>
          </Button>
          <UserNav />
        </nav>
      </div>
    </header>
  );
}