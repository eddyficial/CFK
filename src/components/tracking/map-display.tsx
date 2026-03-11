'use client';

import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const LeafletMap = dynamic(() => import('./leaflet-map'), {
  ssr: false,
  loading: () => <Skeleton className="h-[400px] w-full" />,
});

interface MapDisplayProps {
  latitude: number;
  longitude: number;
  route?: { lat: number; lng: number }[];
  containerNumber?: string;
  destinationPort?: string;
}

export default function MapDisplay({
  latitude,
  longitude,
  route,
  containerNumber,
  destinationPort,
}: MapDisplayProps) {
  return (
    <Card className="overflow-hidden shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-headline">Live Map</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>
            {latitude.toFixed(2)}°, {longitude.toFixed(2)}°
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[400px]">
          <LeafletMap
            latitude={latitude}
            longitude={longitude}
            route={route}
            containerNumber={containerNumber}
            destinationPort={destinationPort}
          />
        </div>
      </CardContent>
    </Card>
  );
}
