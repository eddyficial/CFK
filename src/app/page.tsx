import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Box, Ship, Truck } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'shipping-port-hero'
  );

  return (
    <div className="flex-1 w-full bg-background text-foreground overflow-auto">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-start text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover brightness-50"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="relative z-10 container px-4 md:px-6 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-wider uppercase">
            Ship to East Africa
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Reliable and affordable freight services from the UK to Kenya,
            Uganda, and Tanzania. Get your quote in minutes.
          </p>
          <Card className="max-w-lg bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Location (e.g., London)" />
                <Input placeholder="Destination (e.g., Nairobi)" />
                <Input
                  placeholder="What are you shipping?"
                  className="md:col-span-2"
                />
                <Button
                  type="submit"
                  className="md:col-span-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container px-4 md:px-6 py-16 text-center">
        <h2 className="text-3xl font-bold font-headline mb-2">How It Works</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          We make shipping to East Africa simple and hassle-free. Here are
          the three easy steps to get your goods on their way.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HowItWorksStep
            icon={<Box className="h-10 w-10" />}
            step="1"
            title="Get a Quote & Book"
            description="Provide details about your shipment and book your preferred shipping method (Air or Sea)."
          />
          <HowItWorksStep
            icon={<Truck className="h-10 w-10" />}
            step="2"
            title="We Pick Up or You Drop Off"
            description="We can collect from your doorstep, or you can drop off your goods at one of our UK locations."
          />
          <HowItWorksStep
            icon={<Ship className="h-10 w-10" />}
            step="3"
            title="We Ship & Clear"
            description="We handle the entire process, including customs clearance, until your shipment reaches its destination."
          />
        </div>
      </div>
    </div>
  );
}

function HowItWorksStep({
  icon,
  step,
  title,
  description,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className="flex items-center justify-center h-20 w-20 bg-accent/10 text-accent rounded-full">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 flex items-center justify-center h-8 w-8 bg-primary text-primary-foreground rounded-full font-bold">
          {step}
        </div>
      </div>
      <h3 className="text-xl font-bold font-headline">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
