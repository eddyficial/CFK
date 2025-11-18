import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import VesselInputForm from '@/components/tracking/vessel-input-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ship, Globe, LifeBuoy } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'shipping-port-hero'
  );

  return (
    <div className="flex-1 w-full bg-background text-foreground overflow-auto">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex flex-col items-center justify-center text-center text-white">
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
            Global Freight, Delivered.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Enter your container number to get real-time updates on your shipment's journey across the globe.
          </p>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <VesselInputForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Ship className="h-8 w-8 text-primary" />}
            title="Comprehensive Sea Freight"
            description="From full container loads (FCL) to less-than-container loads (LCL), we provide flexible sea freight options to meet your needs."
          />
          <FeatureCard
            icon={<Globe className="h-8 w-8 text-primary" />}
            title="Worldwide Network"
            description="Our extensive network of partners ensures your shipment is handled with care from origin to final destination, anywhere in the world."
          />
          <FeatureCard
            icon={<LifeBuoy className="h-8 w-8 text-primary" />}
            title="Dedicated Support"
            description="Our team of logistics experts is available 24/7 to provide support and answer any questions about your shipment."
          />
        </div>
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
