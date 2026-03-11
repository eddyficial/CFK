'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Ship, MapPin, Phone, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/services', label: 'Services', icon: Ship },
  { href: '/track', label: 'Track', icon: MapPin },
  { href: '/contact', label: 'Contact', icon: Phone },
];

export default function BottomNav() {
  const pathname = usePathname();

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
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-t border-border/30 safe-bottom">
      <div className="flex items-center justify-around py-1.5 px-2">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg transition-colors min-w-[56px]',
                active ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
        <button
          onClick={handleShare}
          className="flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg transition-colors min-w-[56px] text-muted-foreground"
        >
          <Share2 className="h-5 w-5" />
          <span className="text-[10px] font-medium">Share</span>
        </button>
      </div>
    </nav>
  );
}
