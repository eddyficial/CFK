import Link from 'next/link';
import { Ship } from 'lucide-react';
import { UserNav } from '@/components/auth/user-nav';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary shadow-md">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold md:text-xl font-headline text-primary-foreground"
        >
          <Ship className="h-6 w-6" />
          <span>VesselTrack</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4">
          <UserNav />
        </nav>
      </div>
    </header>
  );
}
