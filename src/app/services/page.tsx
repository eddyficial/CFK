import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ship, Truck, Package, Globe, Shield, Clock, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="flex-1 w-full bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-6">
              What We Offer
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive freight and logistics solutions connecting East Africa to the world. From port to door, we handle it all.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container px-4 md:px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          <ServiceCard
            icon={<Ship className="h-8 w-8" />}
            title="Sea Freight"
            description="Full Container Load (FCL) and Less-than-Container Load (LCL) shipping from major ports worldwide to Mombasa and other East African ports. Competitive rates on all major shipping lanes."
          />
          <ServiceCard
            icon={<Truck className="h-8 w-8" />}
            title="Inland Transportation"
            description="Door-to-door delivery across Kenya, Uganda, Tanzania, and the wider East African region with reliable trucking partners and real-time tracking."
          />
          <ServiceCard
            icon={<Package className="h-8 w-8" />}
            title="Customs Clearance"
            description="Expert customs brokerage services ensuring smooth and compliant clearance of your cargo through Mombasa port. We handle all documentation and regulatory requirements."
          />
          <ServiceCard
            icon={<Globe className="h-8 w-8" />}
            title="International Forwarding"
            description="End-to-end freight forwarding from origin to destination. We manage documentation, routing, and coordination across all transport modes."
          />
          <ServiceCard
            icon={<Shield className="h-8 w-8" />}
            title="Cargo Insurance"
            description="Comprehensive marine cargo insurance to protect your goods throughout the entire shipping journey. Full coverage against loss, damage, and delays."
          />
          <ServiceCard
            icon={<Clock className="h-8 w-8" />}
            title="Real-Time Tracking"
            description="Live container tracking with interactive maps, route visualization, ETA updates, and status notifications for complete shipment visibility."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="container px-4 md:px-6 pb-24">
        <div className="p-1 rounded-2xl animated-border">
          <div className="bg-card rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Every shipment is unique. Contact us for a tailored logistics solution that fits your exact requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/quote">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="card-glow bg-card/80 border-border/40 hover:border-primary/40 transition-all duration-300 group overflow-hidden h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors">
          {icon}
        </div>
        <h3 className="font-headline font-bold text-xl mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
      </CardContent>
    </Card>
  );
}
