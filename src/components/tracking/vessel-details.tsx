import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Anchor, Clock, Gauge, MapPin, Tag, Ship, Navigation } from 'lucide-react';
import { Badge } from '../ui/badge';

interface ContainerData {
  id: string;
  status: 'In Transit' | 'Docked' | 'At Anchor';
  location: string;
  speed: string;
  eta: string;
  vessel?: string;
  origin?: string;
  destination?: string;
}

const statusConfig = {
  'In Transit': { color: 'bg-blue-500', label: 'In Transit' },
  'Docked': { color: 'bg-green-500', label: 'Docked' },
  'At Anchor': { color: 'bg-yellow-500', label: 'At Anchor' },
};

export default function VesselDetails({ data }: { data: ContainerData }) {
  const currentStatus = statusConfig[data.status] || { color: 'bg-gray-500', label: 'Unknown' };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Container Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <DetailItem icon={<Tag />} label="Container Number" value={data.id} />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Anchor className="h-5 w-5" />
            <span>Status</span>
          </div>
          <Badge variant="outline" className="flex items-center gap-2">
             <span className={`h-2 w-2 rounded-full ${currentStatus.color}`}></span>
            {currentStatus.label}
          </Badge>
        </div>
        {data.vessel && <DetailItem icon={<Ship />} label="Vessel" value={data.vessel} />}
        {data.origin && <DetailItem icon={<Navigation />} label="Origin" value={data.origin} />}
        {data.destination && <DetailItem icon={<MapPin />} label="Destination" value={data.destination} />}
        <DetailItem icon={<MapPin />} label="Coordinates" value={data.location} />
        <DetailItem icon={<Gauge />} label="Speed" value={data.speed} />
        <DetailItem icon={<Clock />} label="ETA" value={data.eta} />
      </CardContent>
    </Card>
  );
}

function DetailItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}
        <span>{label}</span>
      </div>
      <span className="font-medium text-foreground text-right max-w-[180px]">{value}</span>
    </div>
  );
}
