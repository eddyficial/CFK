'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Clock, Shield, Truck } from 'lucide-react';

export default function QuotePage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast({
      title: 'Quote Request Submitted',
      description: 'Our team will prepare a custom quote and contact you within 48 hours.',
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
              Free Quote
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
              Get a <span className="gradient-text">Quote</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your shipment and receive a competitive freight quote within 48 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <Card className="lg:col-span-2 shadow-lg border-border/40">
            <CardHeader>
              <CardTitle className="font-headline text-xl">Shipment Details</CardTitle>
              <CardDescription>Fill in the details below and our team will prepare a custom quote.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required className="h-11" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your company (optional)" className="h-11" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="origin">Origin Port / City</Label>
                    <Input id="origin" placeholder="e.g. Shanghai, China" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination</Label>
                    <Input id="destination" placeholder="e.g. Mombasa, Kenya" required className="h-11" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Shipping Type</Label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fcl">Full Container Load (FCL)</SelectItem>
                        <SelectItem value="lcl">Less-than-Container Load (LCL)</SelectItem>
                        <SelectItem value="breakbulk">Break Bulk</SelectItem>
                        <SelectItem value="roro">Roll-on/Roll-off (RoRo)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Container Size</Label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20ft">20ft Standard</SelectItem>
                        <SelectItem value="40ft">40ft Standard</SelectItem>
                        <SelectItem value="40hc">40ft High Cube</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cargo">Cargo Description</Label>
                  <Textarea
                    id="cargo"
                    placeholder="Describe your cargo (type of goods, weight, dimensions, any special handling requirements)"
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Shipping Date</Label>
                  <Input id="date" type="date" className="h-11" />
                </div>

                <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-base" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Request Quote'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            <QuoteBenefit
              icon={<Clock className="h-6 w-6" />}
              title="Fast Response"
              description="Receive your custom quote within 48 hours of submission."
            />
            <QuoteBenefit
              icon={<Shield className="h-6 w-6" />}
              title="No Obligation"
              description="Our quotes are free with no hidden fees or commitments required."
            />
            <QuoteBenefit
              icon={<Truck className="h-6 w-6" />}
              title="Door-to-Door"
              description="We include all costs from origin to your final destination."
            />

            <Card className="bg-card/60 border-border/40">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">Need it faster? Call us directly</p>
                <p className="text-xl font-bold font-headline gradient-text">+1 (972) 815-5863</p>
                <p className="text-xs text-muted-foreground mt-1">David Owuori</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuoteBenefit({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-card/60 border-border/40">
      <CardContent className="p-5 flex gap-4 items-start">
        <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-headline font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
