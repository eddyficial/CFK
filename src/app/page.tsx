import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Ship, Plane } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex-1 w-full bg-background text-foreground">
      <section className="w-full py-12 md:py-20 lg:py-28 text-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="inline-block rounded-full bg-red-900/20 px-4 py-1 text-sm font-medium text-red-400 border border-red-900/50">
              TRUSTED LOGISTICS PARTNER
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
              <span className="text-red-500">MOVING</span>{' '}
              <span className="text-orange-400">DREAMS</span>
              <br />
              <span className="text-red-500">ACROSS</span>{' '}
              <span className="text-orange-400">CONTINENTS</span>
            </h1>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-lg">
              From USA to East Africa - Your cargo, our commitment, delivered with care
            </p>
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-lg h-14 w-full max-w-sm">
              <Shield className="mr-3 h-6 w-6" />
              GET INSTANT QUOTE
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>

            <div className="grid grid-cols-2 gap-4 w-full max-w-sm pt-8">
               <ServiceCard icon={<Ship className="h-8 w-8 text-red-400"/>} label="SEA" />
               <ServiceCard icon={<Plane className="h-8 w-8 text-red-400"/>} label="AIR" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


function ServiceCard({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-4 rounded-lg bg-card border border-border">
      {icon}
      <span className="font-semibold text-white">{label}</span>
    </div>
  )
}
