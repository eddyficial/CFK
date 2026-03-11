'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
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
      <section className="container px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our logistics team for inquiries, quotes, or support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Shipping inquiry" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your shipping needs..." rows={5} required />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <ContactInfo
              icon={<Mail className="h-6 w-6" />}
              title="Email"
              detail="info@chauffeurskenya.com"
              sub="We respond within 24 hours"
            />
            <ContactInfo
              icon={<Phone className="h-6 w-6" />}
              title="Phone"
              detail="+44 123 456 7890"
              sub="Mon-Fri, 8:00 AM - 6:00 PM EAT"
            />
            <ContactInfo
              icon={<MapPin className="h-6 w-6" />}
              title="Office"
              detail="Mombasa, Kenya"
              sub="Port Reitz Area, near Moi International Airport"
            />

            <Card className="bg-card/60 border-border/40">
              <CardContent className="p-6">
                <h3 className="font-headline font-bold text-lg mb-2">Business Hours</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="mt-2 text-xs">All times in East Africa Time (EAT)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfo({
  icon,
  title,
  detail,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  sub: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="p-3 rounded-full bg-primary/10 text-primary h-fit">{icon}</div>
      <div>
        <h3 className="font-headline font-bold text-lg">{title}</h3>
        <p className="text-foreground">{detail}</p>
        <p className="text-sm text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}
