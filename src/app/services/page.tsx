import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ship, Truck, Package, Globe, Shield, Clock } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="flex-1 w-full bg-background text-foreground">
      <section className="container px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive freight and logistics solutions connecting East Africa to the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Ship className="h-8 w-8" />}
            title="Sea Freight"
            description="Full Container Load (FCL) and Less-than-Container Load (LCL) shipping from major ports worldwide to Mombasa and other East African ports."
          />
          <ServiceCard
            icon={<Truck className="h-8 w-8" />}
            title="Inland Transportation"
            description="Door-to-door delivery across Kenya, Uganda, Tanzania, and the wider East African region with reliable trucking partners."
          />
          <ServiceCard
            icon={<Package className="h-8 w-8" />}
            title="Customs Clearance"
            description="Expert customs brokerage services ensuring smooth and compliant clearance of your cargo through Mombasa port."
          />
          <ServiceCard
            icon={<Globe className="h-8 w-8" />}
            title="International Forwarding"
            description="End-to-end freight forwarding from origin to destination, managing documentation, routing, and coordination."
          />
          <ServiceCard
            icon={<Shield className="h-8 w-8" />}
            title="Cargo Insurance"
            description="Comprehensive marine cargo insurance to protect your goods throughout the entire shipping journey."
          />
          <ServiceCard
            icon={<Clock className="h-8 w-8" />}
            title="Real-Time Tracking"
            description="Live container tracking with route visualization, ETA updates, and status notifications for complete visibility."
          />
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
    <Card className="bg-card/80 border-border/60 hover:border-primary/50 hover:bg-card transition-all group">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
