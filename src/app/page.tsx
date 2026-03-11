import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import VesselInputForm from '@/components/tracking/vessel-input-form';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ship, Globe, LifeBuoy, ArrowRight, MapPin, Shield, Truck } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'shipping-port-hero'
  );

  return (
    <div className="flex-1 w-full bg-background text-foreground overflow-auto">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background z-[1]" />

        <div className="relative z-10 container px-4 md:px-6 space-y-5 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-xs text-primary mx-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Live Container Tracking
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight leading-tight">
            <span className="gradient-text">Global Freight,</span>
            <br />
            Delivered.
          </h1>

          <p className="text-base md:text-lg max-w-xl mx-auto text-gray-300">
            Real-time container tracking and freight solutions connecting the world to East Africa.
          </p>

          <div className="max-w-xl mx-auto">
            <div className="p-[2px] rounded-xl animated-border">
              <Card className="bg-card/90 backdrop-blur-md border-0 rounded-[10px]">
                <CardContent className="p-4">
                  <VesselInputForm />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 text-xs">
            <span className="text-muted-foreground">Try:</span>
            {['MSKU1234567', 'CSLU7654321', 'TGHU9988776', 'HLBU5544332'].map((id) => (
              <Link
                key={id}
                href={`/dashboard?containerId=${id}`}
                className="px-2.5 py-1 rounded-full bg-secondary/60 hover:bg-secondary text-foreground/80 hover:text-foreground transition-colors font-mono"
              >
                {id}
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 z-10 animate-bounce">
          <div className="h-7 w-4 rounded-full border-2 border-white/30 flex justify-center pt-1">
            <div className="h-1.5 w-0.5 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10 container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '50K+', label: 'Containers Shipped' },
            { value: '120+', label: 'Global Routes' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, i) => (
            <Card key={i} className="bg-card/80 backdrop-blur-sm border-border/40 text-center p-4">
              <p className="text-2xl md:text-3xl font-bold font-headline gradient-text">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container px-4 md:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold font-headline mb-2">
            Why Choose <span className="gradient-text">CFK</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            End-to-end logistics with real-time visibility at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          <FeatureCard icon={<Ship className="h-6 w-6" />} title="Sea Freight" description="FCL and LCL shipping from major ports to Mombasa and all East African destinations." />
          <FeatureCard icon={<Globe className="h-6 w-6" />} title="Global Network" description="120+ routes with trusted partners ensuring cargo is handled with care." />
          <FeatureCard icon={<LifeBuoy className="h-6 w-6" />} title="24/7 Support" description="Our logistics experts are always available to answer your questions." />
          <FeatureCard icon={<MapPin className="h-6 w-6" />} title="Live Tracking" description="Real-time GPS tracking with interactive maps and instant ETA updates." />
          <FeatureCard icon={<Shield className="h-6 w-6" />} title="Cargo Insurance" description="Comprehensive marine insurance protecting your goods throughout the journey." />
          <FeatureCard icon={<Truck className="h-6 w-6" />} title="Door-to-Door" description="Inland transportation across Kenya, Uganda, Tanzania, and East Africa." />
        </div>
      </section>

      {/* CTA */}
      <section className="container px-4 md:px-6 pb-16">
        <div className="p-[2px] rounded-xl animated-border">
          <div className="bg-card rounded-[10px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold font-headline mb-2">Ready to Ship?</h2>
              <p className="text-sm text-muted-foreground max-w-md">
                Get a competitive freight quote in minutes. We find the best route and rate for your cargo.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button asChild className="bg-primary hover:bg-primary/90 px-6">
                <Link href="/quote">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="px-6">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="card-glow bg-card/80 border-border/40 hover:border-primary/40 transition-all duration-300 group">
      <CardContent className="p-5 flex flex-col h-full">
        <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 flex items-center justify-center mb-3 transition-colors">
          {icon}
        </div>
        <h3 className="font-headline font-bold text-sm mb-1">{title}</h3>
        <p className="text-muted-foreground text-xs leading-relaxed flex-1">{description}</p>
      </CardContent>
    </Card>
  );
}
