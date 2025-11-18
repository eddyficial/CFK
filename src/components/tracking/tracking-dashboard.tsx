'use client';

import { useEffect, useState } from 'react';
import MapDisplay from './map-display';
import RouteAnalysis from './route-analysis';
import VesselDetails from './vessel-details';
import { Skeleton } from '../ui/skeleton';
import { predictETA, ETAPredictionOutput } from '@/ai/ai-eta-predictions';

interface ContainerData {
  id: string;
  status: 'In Transit' | 'Docked' | 'At Anchor';
  location: string;
  speed: string;
  eta: string;
}

export default function TrackingDashboard({ containerId }: { containerId: string }) {
  const [loading, setLoading] = useState(true);
  const [containerData, setContainerData] = useState<ContainerData | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<string>('');

  useEffect(() => {
    async function getETAPrediction() {
      setLoading(true);
      try {
        const input = {
          containerNumber: containerId,
          currentLocation: '14.48 N, 126.12 E',
          destinationPort: 'Mombasa, Kenya',
          historicalData: 'On-time for the last 3 voyages on this route.',
        };
        const prediction: ETAPredictionOutput = await predictETA(input);

        // Map the AI output to the existing data structures
        const statuses: ContainerData['status'][] = ['In Transit', 'Docked', 'At Anchor'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

        const newContainerData: ContainerData = {
          id: containerId.toUpperCase(),
          status: randomStatus,
          location: input.currentLocation,
          speed: '18.2 knots', // Placeholder speed
          eta: prediction.estimatedTimeOfArrival,
        };

        setContainerData(newContainerData);
        setAiAnalysis(prediction.routeOptimizations);
      } catch (error) {
        console.error('Error fetching ETA prediction:', error);
        // Optionally set an error state to show in the UI
      } finally {
        setLoading(false);
      }
    }

    if (containerId) {
      getETAPrediction();
    }
  }, [containerId]);
  
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

  if (!containerData) {
    return <div>Error loading container data. Please try again.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold font-headline text-primary">Tracking Container</h1>
      <p className="text-muted-foreground mb-6">Displaying real-time data for container {containerData.id}</p>
      <div className="grid gap-6 lg:grid-cols-3 items-start">
        <div className="lg:col-span-2 space-y-6">
          <MapDisplay location={containerData.location} />
          <RouteAnalysis analysis={aiAnalysis} />
        </div>
        <div className="lg:col-span-1">
          <VesselDetails data={containerData} />
        </div>
      </div>
    </div>
  );
}
