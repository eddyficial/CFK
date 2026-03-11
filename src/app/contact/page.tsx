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
    toast({
      title: 'Message Sent',
      description: 'Thank you for reaching out. We will get back to you within 24 hours.',
    });
    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
  }

  return (
    <div className="flex-1 w-full bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-6">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
              <span className="gradient-text">Contact</span> Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about shipping? Our team is ready to help with quotes, tracking, and logistics support.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="lg:col-span-3 shadow-lg border-border/40">
            <CardHeader>
              <CardTitle className="font-headline text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required className="h-11" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Shipping inquiry" required className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your shipping needs..." rows={5} required />
                </div>
                <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-base" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <ContactInfoCard
              icon={<Mail className="h-6 w-6" />}
              title="Email"
              detail="info@chauffeurskenya.com"
              sub="We respond within 24 hours"
            />
            <ContactInfoCard
              icon={<Phone className="h-6 w-6" />}
              title="Phone"
              detail="+1 (972) 815-5863"
              sub="Mon-Fri, 8:00 AM - 6:00 PM EAT"
            />
            <ContactInfoCard
              icon={<MapPin className="h-6 w-6" />}
              title="Office"
              detail="Mombasa, Kenya"
              sub="Port Reitz Area, near Moi International Airport"
            />
            <ContactInfoCard
              icon={<MessageCircle className="h-6 w-6" />}
              title="WhatsApp"
              detail="Chat with David Owuori"
              sub="Quick responses for urgent shipments"
              href="https://wa.me/19728155863"
            />

            <Card className="bg-card/60 border-border/40">
              <CardContent className="p-6">
                <h3 className="font-headline font-bold text-lg mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-foreground">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-foreground">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground/60">All times in East Africa Time (EAT)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfoCard({
  icon,
  title,
  detail,
  sub,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  sub: string;
  href?: string;
}) {
  const content = (
    <Card className="bg-card/60 border-border/40 hover:border-primary/30 transition-colors group">
      <CardContent className="p-5 flex gap-4 items-start">
        <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="font-headline font-bold">{title}</h3>
          <p className="text-foreground text-sm">{detail}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
        </div>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}
