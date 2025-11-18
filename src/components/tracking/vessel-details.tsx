import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Anchor, Clock, Gauge, MapPin, Tag } from 'lucide-react';
import { Badge } from '../ui/badge';

interface ContainerData {
  id: string;
  status: 'In Transit' | 'Docked' | 'At Anchor';
  location: string;
  speed: string;
  eta: string;
}

const statusColors = {
  'In Transit': 'bg-blue-500',
  'Docked': 'bg-green-500',
  'At Anchor': 'bg-yellow-500',
};

export default function VesselDetails({ data }: { data: ContainerData }) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Container Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Tag className="h-5 w-5" />
            <span>Container Number</span>
          </div>
          <span className="font-medium text-foreground">{data.id}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Anchor className="h-5 w-5" />
            <span>Status</span>
          </div>
          <Badge variant="secondary" className="flex items-center gap-2">
             <span className={`h-2 w-2 rounded-full ${statusColors[data.status]}`}></span>
            {data.status}
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>Coordinates</span>
          </div>
          <span className="font-medium text-foreground">{data.location}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Gauge className="h-5 w-5" />
            <span>Speed</span>
          </div>
          <span className="font-medium text-foreground">{data.speed}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="h-5 w-5" />
            <span>ETA</span>
          </div>
          <span className="font-medium text-foreground">{data.eta}</span>
        </div>
      </CardContent>
    </Card>
  );
}
