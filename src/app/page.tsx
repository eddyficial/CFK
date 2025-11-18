import VesselInputForm from '@/components/tracking/vessel-input-form';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex-1 w-full">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                  VesselTrack
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Real-time container tracking with AI-powered insights. Enter your vessel number to get started.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <VesselInputForm />
              </div>
            </div>
            <div
              className="relative hidden lg:block bg-primary rounded-xl shadow-2xl"
              style={{
                backgroundImage: 'url(https://picsum.photos/seed/hero/600/400)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              data-ai-hint="shipping container port"
            >
              <div className="absolute inset-0 bg-primary/50 rounded-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
