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
    toast({ title: 'Quote Request Submitted', description: 'Our team will contact you within 48 hours.' });
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
              Free Quote
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-headline mb-3">
              Get a <span className="gradient-text">Quote</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Tell us about your shipment and receive a competitive freight quote within 48 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="lg:col-span-2 shadow-lg border-border/40">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-lg">Shipment Details</CardTitle>
              <CardDescription className="text-xs">Fill in the details and we will prepare a custom quote.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs">Full Name</Label>
                    <Input id="name" placeholder="Your name" required className="h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required className="h-10" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-xs">Company Name</Label>
                  <Input id="company" placeholder="Your company (optional)" className="h-10" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="origin" className="text-xs">Origin Port / City</Label>
                    <Input id="origin" placeholder="e.g. Shanghai, China" required className="h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="destination" className="text-xs">Destination</Label>
                    <Input id="destination" placeholder="e.g. Mombasa, Kenya" required className="h-10" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-xs">Shipping Type</Label>
                    <Select>
                      <SelectTrigger className="h-10"><SelectValue placeholder="Select type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fcl">Full Container Load (FCL)</SelectItem>
                        <SelectItem value="lcl">Less-than-Container Load (LCL)</SelectItem>
                        <SelectItem value="breakbulk">Break Bulk</SelectItem>
                        <SelectItem value="roro">Roll-on/Roll-off (RoRo)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Container Size</Label>
                    <Select>
                      <SelectTrigger className="h-10"><SelectValue placeholder="Select size" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20ft">20ft Standard</SelectItem>
                        <SelectItem value="40ft">40ft Standard</SelectItem>
                        <SelectItem value="40hc">40ft High Cube</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="cargo" className="text-xs">Cargo Description</Label>
                  <Textarea id="cargo" placeholder="Type of goods, weight, dimensions, special handling" rows={3} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="date" className="text-xs">Preferred Shipping Date</Label>
                  <Input id="date" type="date" className="h-10" />
                </div>
                <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Request Quote'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <BenefitCard icon={<Clock className="h-5 w-5" />} title="Fast Response" description="Custom quote within 48 hours." />
            <BenefitCard icon={<Shield className="h-5 w-5" />} title="No Obligation" description="Free quotes, no hidden fees." />
            <BenefitCard icon={<Truck className="h-5 w-5" />} title="Door-to-Door" description="All costs from origin to destination." />
            <Card className="bg-card/60 border-border/40">
              <CardContent className="p-4 text-center">
                <p className="text-xs text-muted-foreground mb-2">Need it faster? Call directly</p>
                <a href="tel:+19728155863" className="text-lg font-bold font-headline gradient-text">+1 (972) 815-5863</a>
                <p className="text-[10px] text-muted-foreground mt-0.5">David Owuori</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-card/60 border-border/40">
      <CardContent className="p-4 flex gap-3 items-start">
        <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">{icon}</div>
        <div>
          <h3 className="font-headline font-bold text-sm">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
