'use client';

import { useEffect, useState } from 'react';
import MapDisplay from './map-display';
import RouteAnalysis from './route-analysis';
import VesselDetails from './vessel-details';
import { Skeleton } from '../ui/skeleton';

interface VesselData {
  id: string;
  status: 'In Transit' | 'Docked' | 'At Anchor';
  location: string;
  speed: string;
  eta: string;
}

export default function TrackingDashboard({ vesselId }: { vesselId: string }) {
  const [loading, setLoading] = useState(true);
  const [vesselData, setVesselData] = useState<VesselData | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    const timer = setTimeout(() => {
      // Mock data generation
      const statuses: VesselData['status'][] = ['In Transit', 'Docked', 'At Anchor'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      const mockData: VesselData = {
        id: vesselId.toUpperCase(),
        status: randomStatus,
        location: '14.48 N, 126.12 E',
        speed: '18.2 knots',
        eta: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toDateString(),
      };
      setVesselData(mockData);

      const mockAnalysis = `Based on current weather patterns and port congestion data, the estimated time of arrival is accurate. We've identified a potential optimization by adjusting the route slightly to avoid a developing storm system, which could save approximately 3 hours of travel time. We recommend the captain review the suggested course correction.`;
      setAiAnalysis(mockAnalysis);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [vesselId]);
  
  if (loading) {
    return (
      <div className="animate-pulse">
        <h1 className="text-3xl font-bold font-headline mb-2"><Skeleton className="h-8 w-48" /></h1>
        <p className="text-muted-foreground mb-6"><Skeleton className="h-5 w-64" /></p>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="h-[450px] w-full rounded-xl" />
            <Skeleton className="h-[230px] w-full rounded-xl" />
          </div>
          <div className="lg:col-span-1">
            <Skeleton className="h-[400px] w-full rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (!vesselData) {
    return <div>Error loading vessel data.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold font-headline text-primary">Tracking Vessel</h1>
      <p className="text-muted-foreground mb-6">Displaying real-time data for vessel {vesselData.id}</p>
      <div className="grid gap-6 lg:grid-cols-3 items-start">
        <div className="lg:col-span-2 space-y-6">
          <MapDisplay location={vesselData.location} />
          <RouteAnalysis analysis={aiAnalysis} />
        </div>
        <div className="lg:col-span-1">
          <VesselDetails data={vesselData} />
        </div>
      </div>
    </div>
  );
}
