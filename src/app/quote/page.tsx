'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

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
      <section className="container px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
            Get a Quote
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your shipment and we will provide a competitive freight quote.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">Shipment Details</CardTitle>
            <CardDescription>Fill in the details below and our team will prepare a custom quote.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Your company (optional)" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="origin">Origin Port / City</Label>
                  <Input id="origin" placeholder="e.g. Shanghai, China" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <Input id="destination" placeholder="e.g. Mombasa, Kenya" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Shipping Type</Label>
                  <Select>
                    <SelectTrigger>
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
                    <SelectTrigger>
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
                <Input id="date" type="date" />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Request Quote'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
