'use client';

import { useEffect, useState } from 'react';
import MapDisplay from './map-display';
import RouteAnalysis from './route-analysis';
import VesselDetails from './vessel-details';
import { Skeleton } from '../ui/skeleton';
import { findContainer, type Container } from '@/data/containers';

export default function TrackingDashboard({ containerId }: { containerId: string }) {
  const [loading, setLoading] = useState(true);
  const [container, setContainer] = useState<Container | null>(null);

  useEffect(() => {
    // Simulate a short load for UX, then look up container from local data
    const timer = setTimeout(() => {
      const found = findContainer(containerId);
      setContainer(found || null);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [containerId]);

  if (loading) {
    return (
      <div className="animate-pulse">
        <Skeleton className="h-8 w-48 mb-2" />
        <Skeleton className="h-5 w-64 mb-6" />
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

  if (!container) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold font-headline text-destructive mb-2">
          Container Not Found
        </h2>
        <p className="text-muted-foreground mb-4">
          No data available for &quot;{containerId}&quot;.
        </p>
        <p className="text-sm text-muted-foreground">
          Try one of these demo containers: <strong>MSKU1234567</strong>, <strong>CSLU7654321</strong>, <strong>TGHU9988776</strong>, <strong>HLBU5544332</strong>
        </p>
      </div>
    );
  }

  const etaDate = new Date(container.eta);
  const now = new Date();
  const hoursRemaining = Math.max(0, Math.round((etaDate.getTime() - now.getTime()) / (1000 * 60 * 60)));
  const daysRemaining = Math.floor(hoursRemaining / 24);

  const analysis = container.status === 'Docked'
    ? `Container ${container.containerNumber} has arrived at ${container.destinationPort} and is currently docked. Vessel ${container.vessel} completed the voyage from ${container.originPort} successfully.`
    : container.status === 'At Anchor'
    ? `Container ${container.containerNumber} aboard ${container.vessel} is currently at anchor near ${container.destinationPort}, awaiting berth assignment. Expected to dock within the next ${Math.min(hoursRemaining, 12)} hours.`
    : `Container ${container.containerNumber} is in transit aboard ${container.vessel}, traveling at ${container.speed} knots from ${container.originPort} to ${container.destinationPort}. Estimated arrival in ${daysRemaining > 0 ? `${daysRemaining} days and ` : ''}${hoursRemaining % 24} hours. Current route conditions are favorable with no major weather disruptions anticipated.`;

  return (
    <div>
      <h1 className="text-3xl font-bold font-headline text-primary">Tracking Container</h1>
      <p className="text-muted-foreground mb-6">
        Real-time data for <strong>{container.containerNumber}</strong> aboard {container.vessel}
      </p>
      <div className="grid gap-6 lg:grid-cols-3 items-start">
        <div className="lg:col-span-2 space-y-6">
          <MapDisplay
            latitude={container.currentLatitude}
            longitude={container.currentLongitude}
            route={container.route}
            containerNumber={container.containerNumber}
            destinationPort={container.destinationPort}
          />
          <RouteAnalysis analysis={analysis} />
        </div>
        <div className="lg:col-span-1">
          <VesselDetails
            data={{
              id: container.containerNumber,
              status: container.status,
              location: `${container.currentLatitude.toFixed(4)}\u00B0, ${container.currentLongitude.toFixed(4)}\u00B0`,
              speed: container.speed > 0 ? `${container.speed} knots` : 'Stationary',
              eta: etaDate.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              }),
              vessel: container.vessel,
              origin: container.originPort,
              destination: container.destinationPort,
            }}
          />
        </div>
      </div>
    </div>
  );
}
