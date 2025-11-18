import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import VesselInputForm from '@/components/tracking/vessel-input-form';
import { Globe, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'shipping-port-hero');

  return (
    <div className="flex-1 w-full bg-background text-foreground overflow-auto">
      <div className="relative h-[60vh] flex items-center justify-center text-center text-white px-4">
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
        <div className="relative z-10 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-wider uppercase">
            Chauffeurs Kenya Freight
          </h1>
          <p className="text-lg md:text-xl font-light">
            Moving Dreams Across Continents
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-6 -mt-16 relative z-20">
        <Card className="bg-card/90 backdrop-blur-sm shadow-2xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-center font-headline">Track Your Shipment</h2>
            <VesselInputForm />
          </CardContent>
        </Card>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Phone className="h-8 w-8" />}
            title="24/7 Support"
            description="Expert assistance whenever you need it, ensuring your peace of mind."
          />
          <FeatureCard
            icon={<MapPin className="h-8 w-8" />}
            title="Real-time Tracking"
            description="Live updates on your shipment's location and status from origin to destination."
          />
          <FeatureCard
            icon={<Globe className="h-8 w-8" />}
            title="Global Coverage"
            description="Extensive network of shipping lanes and partners across the world."
          />
        </div>
      </div>
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
    <Card className="bg-card/80 text-center">
      <CardContent className="p-6 space-y-3">
        <div className="inline-flex items-center justify-center p-3 bg-accent/10 text-accent rounded-lg">
          {icon}
        </div>
        <h3 className="text-lg font-bold font-headline">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
