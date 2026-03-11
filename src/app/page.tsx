import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import VesselInputForm from '@/components/tracking/vessel-input-form';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ship, Globe, LifeBuoy, ArrowRight, MapPin, Shield, Truck, Clock } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'shipping-port-hero'
  );

  return (
    <div className="flex-1 w-full bg-background text-foreground overflow-auto">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover brightness-[0.3]"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background z-[1]" />

        <div className="relative z-10 container px-4 md:px-6 space-y-8 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-sm text-primary mx-auto">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Live Container Tracking Available
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tight">
            <span className="gradient-text">Global Freight,</span>
            <br />
            Delivered.
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Real-time container tracking and freight solutions connecting the world to East Africa. Track your shipment in seconds.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="p-1 rounded-2xl animated-border">
              <Card className="bg-card/90 backdrop-blur-md border-0 rounded-xl">
                <CardContent className="p-5">
                  <VesselInputForm />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick demo links */}
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="text-muted-foreground">Try demo:</span>
            {['MSKU1234567', 'CSLU7654321', 'TGHU9988776', 'HLBU5544332'].map((id) => (
              <Link
                key={id}
                href={`/dashboard?containerId=${id}`}
                className="px-3 py-1 rounded-full bg-secondary/60 hover:bg-secondary text-foreground/80 hover:text-foreground transition-colors text-xs font-mono"
              >
                {id}
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 z-10 animate-bounce">
          <div className="h-8 w-5 rounded-full border-2 border-white/30 flex justify-center pt-1">
            <div className="h-2 w-1 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10 container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '50K+', label: 'Containers Shipped' },
            { value: '120+', label: 'Global Routes' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, i) => (
            <Card key={i} className="bg-card/80 backdrop-blur-sm border-border/40 text-center p-6">
              <p className="text-3xl md:text-4xl font-bold font-headline gradient-text">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 md:px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Why Choose <span className="gradient-text">CKF</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end logistics solutions with real-time visibility at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
          <FeatureCard
            icon={<Ship className="h-7 w-7" />}
            title="Sea Freight"
            description="FCL and LCL shipping from major ports worldwide to Mombasa and all East African destinations."
          />
          <FeatureCard
            icon={<Globe className="h-7 w-7" />}
            title="Global Network"
            description="120+ shipping routes with trusted partners ensuring your cargo is handled with care from origin to destination."
          />
          <FeatureCard
            icon={<LifeBuoy className="h-7 w-7" />}
            title="24/7 Support"
            description="Our logistics experts are always available to provide updates and answer your questions."
          />
          <FeatureCard
            icon={<MapPin className="h-7 w-7" />}
            title="Live Tracking"
            description="Real-time GPS container tracking with interactive maps, route visualization, and instant ETA updates."
          />
          <FeatureCard
            icon={<Shield className="h-7 w-7" />}
            title="Cargo Insurance"
            description="Comprehensive marine insurance protecting your goods throughout the entire journey."
          />
          <FeatureCard
            icon={<Truck className="h-7 w-7" />}
            title="Door-to-Door"
            description="Complete inland transportation across Kenya, Uganda, Tanzania, and the wider East African region."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6 pb-24">
        <Card className="overflow-hidden border-0">
          <div className="p-1 rounded-2xl animated-border">
            <div className="bg-card rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-3">
                  Ready to Ship?
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  Get a competitive freight quote in minutes. Our team will find the best route and rate for your cargo.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Link href="/quote">
                    Get a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="card-glow bg-card/80 border-border/40 hover:border-primary/40 transition-all duration-300 group overflow-hidden">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
          {icon}
        </div>
        <h3 className="font-headline font-bold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
      </CardContent>
    </Card>
  );
}
