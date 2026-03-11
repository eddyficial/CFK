'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: 'Message Sent', description: 'We will get back to you within 24 hours.' });
    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
  }

  return (
    <div className="flex-1 w-full bg-background text-foreground">
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container px-4 md:px-6 relative">
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs text-primary mb-4">
              Get In Touch
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-headline mb-3">
              <span className="gradient-text">Contact</span> Us
            </h1>
            <p className="text-sm text-muted-foreground">
              Our team is ready to help with quotes, tracking, and logistics support.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <Card className="lg:col-span-3 shadow-lg border-border/40">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-lg">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="firstName" className="text-xs">First Name</Label>
                    <Input id="firstName" placeholder="John" required className="h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="lastName" className="text-xs">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required className="h-10" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="h-10" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="subject" className="text-xs">Subject</Label>
                  <Input id="subject" placeholder="Shipping inquiry" required className="h-10" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your shipping needs..." rows={4} required />
                </div>
                <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-4">
            <InfoCard icon={<Mail className="h-5 w-5" />} title="Email" detail="info@chauffeurskenya.com" sub="We respond within 24 hours" />
            <InfoCard icon={<Phone className="h-5 w-5" />} title="Phone" detail="+1 (972) 815-5863" sub="Mon-Fri, 8 AM - 6 PM EAT" />
            <InfoCard icon={<MapPin className="h-5 w-5" />} title="Office" detail="Mombasa, Kenya" sub="Port Reitz Area" />
            <InfoCard icon={<MessageCircle className="h-5 w-5" />} title="WhatsApp" detail="David Owuori" sub="Quick responses for urgent shipments" href="https://wa.me/19728155863" />

            <Card className="bg-card/60 border-border/40">
              <CardContent className="p-4">
                <h3 className="font-headline font-bold text-sm mb-2">Business Hours</h3>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex justify-between"><span>Mon - Fri</span><span className="text-foreground">8 AM - 6 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="text-foreground">9 AM - 1 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-foreground">Closed</span></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon, title, detail, sub, href }: { icon: React.ReactNode; title: string; detail: string; sub: string; href?: string }) {
  const content = (
    <Card className="bg-card/60 border-border/40 hover:border-primary/30 transition-colors group">
      <CardContent className="p-4 flex gap-3 items-start">
        <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="font-headline font-bold text-sm">{title}</h3>
          <p className="text-foreground text-xs">{detail}</p>
          <p className="text-[10px] text-muted-foreground">{sub}</p>
        </div>
      </CardContent>
    </Card>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : content;
}
