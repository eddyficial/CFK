import VesselInputForm from '@/components/tracking/vessel-input-form';

export default function TrackPage() {
  return (
    <div className="container py-10 px-4 md:px-6 flex-1 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold font-headline mb-2 text-primary">
        Track Your Shipment
      </h1>
      <p className="text-muted-foreground mb-8 max-w-lg">
        Enter your container number below to get real-time updates on your
        shipment's location and status.
      </p>
      <div className="w-full max-w-lg">
        <VesselInputForm />
      </div>
    </div>
  );
}
