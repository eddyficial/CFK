import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Phone, Shield, Truck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-1 w-full bg-background text-foreground overflow-auto">
      <div className="container px-4 md:px-6 py-6 space-y-8">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                <div className="p-1">
                  <Card className="bg-card/80">
                    <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 text-center">
                      <div className="p-4 bg-accent/10 rounded-lg">
                        <Phone className="h-10 w-10 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold">24/7 Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Expert assistance whenever you need it
                      </p>
                      <Button variant="link" className="text-accent">
                        Tap to explore
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
        </Carousel>

        <div className="grid grid-cols-2 gap-4">
          <InfoCard
            icon={<Shield className="h-6 w-6" />}
            title="TRACK"
            description="Real-time updates"
          />
          <InfoCard
            icon={<Truck className="h-6 w-6" />}
            title="SUPPORT"
            description="Get help 24/7"
          />
        </div>

        <Card className="bg-card/80">
          <CardContent className="p-6 text-center space-y-4">
            <h3 className="text-xl font-bold">Access Your Dashboard</h3>
            <p className="text-sm text-muted-foreground">
              Sign in to track shipments, view quotes, and manage your account
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                <Link href="#">Sign In</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-bold">
                <Link href="#">Create Account</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-card/80 relative overflow-hidden">
      <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
        <div className="absolute inset-0 bg-red-500/10 blur-2xl"></div>
        <div className="relative z-10 p-2 bg-red-500/20 rounded-lg">
          {icon}
        </div>
        <h4 className="font-bold text-lg relative z-10">{title}</h4>
        <p className="text-xs text-muted-foreground relative z-10">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}