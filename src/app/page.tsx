import VesselInputForm from '@/components/tracking/vessel-input-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Clock, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex-1 w-full bg-background text-foreground">
      <section className="w-full py-20 md:py-32 lg:py-40 text-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                Track Your Freight in Real-Time
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Enter your container number below to get instant updates on your
                shipment&apos;s location and status.
              </p>
            </div>
            <div className="w-full max-w-md">
              <VesselInputForm />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Real-time tracking for your peace of mind.
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Our advanced tracking system provides you with the most up-to-date
              information on your shipments.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-accent" />}
              title="Real-time updates"
              description="Get live updates on your shipment's location and status, from origin to destination."
            />
            <FeatureCard
              icon={<BarChart className="h-8 w-8 text-accent" />}
              title="Detailed tracking history"
              description="Access a complete history of your shipment's journey, including all checkpoints and scans."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-8 w-8 text-accent" />}
              title="24/7 support"
              description="Our dedicated support team is available around the clock to assist you with any questions."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="bg-background/50 border-border/50">
      <CardHeader className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <CardTitle className="font-headline">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}