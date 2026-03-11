import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ship, Truck, Package, Globe, Shield, Clock, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="flex-1 w-full bg-background text-foreground">
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container px-4 md:px-6 relative">
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs text-primary mb-4">
              What We Offer
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-headline mb-3">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Comprehensive freight and logistics solutions connecting East Africa to the world.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          <ServiceCard icon={<Ship className="h-7 w-7" />} title="Sea Freight" description="FCL and LCL shipping from major ports worldwide to Mombasa and other East African ports. Competitive rates on all major shipping lanes." />
          <ServiceCard icon={<Truck className="h-7 w-7" />} title="Inland Transportation" description="Door-to-door delivery across Kenya, Uganda, Tanzania with reliable trucking partners and real-time tracking." />
          <ServiceCard icon={<Package className="h-7 w-7" />} title="Customs Clearance" description="Expert customs brokerage ensuring smooth clearance through Mombasa port. We handle all documentation." />
          <ServiceCard icon={<Globe className="h-7 w-7" />} title="International Forwarding" description="End-to-end freight forwarding managing documentation, routing, and coordination across all transport modes." />
          <ServiceCard icon={<Shield className="h-7 w-7" />} title="Cargo Insurance" description="Comprehensive marine insurance protecting your goods. Full coverage against loss, damage, and delays." />
          <ServiceCard icon={<Clock className="h-7 w-7" />} title="Real-Time Tracking" description="Live container tracking with interactive maps, route visualization, and ETA updates for complete visibility." />
        </div>
      </section>

      <section className="container px-4 md:px-6 pb-16">
        <div className="p-[2px] rounded-xl animated-border">
          <div className="bg-card rounded-[10px] p-6 md:p-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold font-headline mb-2">Need a Custom Solution?</h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Every shipment is unique. Contact us for a tailored solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/quote">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="card-glow bg-card/80 border-border/40 hover:border-primary/40 transition-all duration-300 group h-full">
      <CardContent className="p-5 flex flex-col h-full">
        <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 flex items-center justify-center mb-3 transition-colors">
          {icon}
        </div>
        <h3 className="font-headline font-bold text-base mb-1.5">{title}</h3>
        <p className="text-muted-foreground text-xs leading-relaxed flex-1">{description}</p>
      </CardContent>
    </Card>
  );
}
