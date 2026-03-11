import Link from 'next/link';
import VesselInputForm from '@/components/tracking/vessel-input-form';
import { Card, CardContent } from '@/components/ui/card';

export default function TrackPage() {
  return (
    <div className="flex-1 w-full bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Live Tracking
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
              Track Your <span className="gradient-text">Shipment</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Enter your container number below to get real-time location updates, route visualization, and ETA.
            </p>

            <div className="max-w-xl mx-auto">
              <div className="p-1 rounded-2xl animated-border">
                <Card className="bg-card/90 backdrop-blur-md border-0 rounded-xl">
                  <CardContent className="p-5">
                    <VesselInputForm />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Demo containers */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm">
              <span className="text-muted-foreground">Try demo containers:</span>
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
        </div>
      </section>
    </div>
  );
}
