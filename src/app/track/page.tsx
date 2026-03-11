import Link from 'next/link';
import VesselInputForm from '@/components/tracking/vessel-input-form';
import { Card, CardContent } from '@/components/ui/card';

export default function TrackPage() {
  return (
    <div className="flex-1 w-full bg-background text-foreground">
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container px-4 md:px-6 relative">
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs text-primary mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Live Tracking
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-headline mb-3">
              Track Your <span className="gradient-text">Shipment</span>
            </h1>
            <p className="text-sm text-muted-foreground mb-8">
              Enter your container number for real-time location, route visualization, and ETA.
            </p>

            <div className="max-w-lg mx-auto">
              <div className="p-[2px] rounded-xl animated-border">
                <Card className="bg-card/90 backdrop-blur-md border-0 rounded-[10px]">
                  <CardContent className="p-4">
                    <VesselInputForm />
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-1.5 text-xs">
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
        </div>
      </section>
    </div>
  );
}
