import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MapDisplay({ location }: { location: string }) {
  const mapImage = PlaceHolderImages.find(img => img.id === 'map-placeholder');

  return (
    <Card className="overflow-hidden shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-headline">Live Map</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{location}</span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="aspect-[16/9] relative">
          {mapImage && (
            <Image
              src={mapImage.imageUrl}
              alt={mapImage.description}
              fill
              className="object-cover"
              data-ai-hint={mapImage.imageHint}
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute h-6 w-6 bg-red-500 rounded-full animate-ping opacity-75"></div>
              <div className="relative h-6 w-6 flex items-center justify-center">
                 <div className="h-3 w-3 bg-red-600 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
