'use client';

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default marker icon issue with bundlers
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const destinationIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  className: 'destination-marker',
});

interface LeafletMapProps {
  latitude: number;
  longitude: number;
  destinationLat?: number;
  destinationLng?: number;
  route?: { lat: number; lng: number }[];
  containerNumber?: string;
  destinationPort?: string;
}

export default function LeafletMap({
  latitude,
  longitude,
  route,
  containerNumber,
  destinationPort,
}: LeafletMapProps) {
  const position: [number, number] = [latitude, longitude];

  // Calculate bounds to fit the route
  const routeCoords: [number, number][] = route
    ? route.map((r) => [r.lat, r.lng] as [number, number])
    : [position];

  return (
    <MapContainer
      center={position}
      zoom={4}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%', minHeight: '400px' }}
      bounds={routeCoords.length > 1 ? L.latLngBounds(routeCoords).pad(0.2) : undefined}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Route polyline */}
      {route && route.length > 1 && (
        <Polyline
          positions={routeCoords}
          color="#E84444"
          weight={3}
          opacity={0.7}
          dashArray="10, 6"
        />
      )}

      {/* Current position marker */}
      <Marker position={position} icon={defaultIcon}>
        <Popup>
          <strong>{containerNumber || 'Container'}</strong>
          <br />
          Current Position
          <br />
          {latitude.toFixed(4)}°, {longitude.toFixed(4)}°
        </Popup>
      </Marker>

      {/* Destination marker */}
      {route && route.length > 1 && (
        <Marker
          position={[route[route.length - 1].lat, route[route.length - 1].lng]}
          icon={destinationIcon}
        >
          <Popup>
            <strong>Destination</strong>
            <br />
            {destinationPort || 'Port'}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
