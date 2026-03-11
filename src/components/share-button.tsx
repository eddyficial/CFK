'use client';

import { useState } from 'react';
import { Share2, Copy, Check, X } from 'lucide-react';
import { Button } from './ui/button';

export default function ShareButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const url = typeof window !== 'undefined' ? window.location.href : '';
  const title = 'Chauffeurs Freight Kenya - Global Freight Delivered';
  const text = 'Track your shipments in real-time with Chauffeurs Freight Kenya.';

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch {
        // User cancelled
      }
    } else {
      setOpen(!open);
    }
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    { name: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, color: 'bg-[#25D366]' },
    { name: 'X', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, color: 'bg-zinc-800' },
    { name: 'Email', href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`, color: 'bg-blue-600' },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      {open && (
        <div className="animate-fade-in-up bg-card border border-border/50 rounded-xl shadow-2xl p-3 space-y-2 min-w-[180px]">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Share</span>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary/50 text-sm transition-colors"
            >
              <span className={`h-2 w-2 rounded-full ${link.color}`} />
              {link.name}
            </a>
          ))}
          <button
            onClick={copyLink}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary/50 text-sm transition-colors w-full"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5 text-muted-foreground" />}
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      )}

      <Button
        onClick={handleShare}
        size="icon"
        variant="outline"
        className="h-12 w-12 rounded-full shadow-lg border-border/50 bg-card/90 backdrop-blur-sm hover:bg-card hover:border-primary/40"
        aria-label="Share"
      >
        <Share2 className="h-5 w-5" />
      </Button>
    </div>
  );
}
