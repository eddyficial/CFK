export interface Container {
  id: string;
  containerNumber: string;
  status: 'In Transit' | 'Docked' | 'At Anchor';
  currentLatitude: number;
  currentLongitude: number;
  speed: number;
  originPort: string;
  destinationPort: string;
  eta: string;
  vessel: string;
  lastUpdated: string;
  route: { lat: number; lng: number }[];
}

// Demo containers for the tracking system
export const containers: Container[] = [
  {
    id: '1',
    containerNumber: 'MSKU1234567',
    status: 'In Transit',
    currentLatitude: -1.2921,
    currentLongitude: 48.8563,
    speed: 18.4,
    originPort: 'Shanghai, China',
    destinationPort: 'Mombasa, Kenya',
    eta: '2026-03-18T14:00:00Z',
    vessel: 'MV Stella Maris',
    lastUpdated: '2026-03-11T08:30:00Z',
    route: [
      { lat: 31.23, lng: 121.47 },
      { lat: 22.32, lng: 114.17 },
      { lat: 13.75, lng: 100.52 },
      { lat: 6.93, lng: 79.85 },
      { lat: 1.35, lng: 72.88 },
      { lat: -1.29, lng: 48.86 },
      { lat: -4.04, lng: 39.67 },
    ],
  },
  {
    id: '2',
    containerNumber: 'CSLU7654321',
    status: 'Docked',
    currentLatitude: -4.0435,
    currentLongitude: 39.6682,
    speed: 0,
    originPort: 'Rotterdam, Netherlands',
    destinationPort: 'Mombasa, Kenya',
    eta: '2026-03-11T06:00:00Z',
    vessel: 'MV Kenya Star',
    lastUpdated: '2026-03-11T06:15:00Z',
    route: [
      { lat: 51.92, lng: 4.48 },
      { lat: 36.72, lng: -3.81 },
      { lat: 31.20, lng: 32.30 },
      { lat: 12.78, lng: 45.02 },
      { lat: -4.04, lng: 39.67 },
    ],
  },
  {
    id: '3',
    containerNumber: 'TGHU9988776',
    status: 'In Transit',
    currentLatitude: 12.78,
    currentLongitude: 45.02,
    speed: 15.7,
    originPort: 'Mumbai, India',
    destinationPort: 'Mombasa, Kenya',
    eta: '2026-03-14T20:00:00Z',
    vessel: 'MV Indian Ocean',
    lastUpdated: '2026-03-11T09:00:00Z',
    route: [
      { lat: 18.92, lng: 72.83 },
      { lat: 12.78, lng: 45.02 },
      { lat: -4.04, lng: 39.67 },
    ],
  },
  {
    id: '4',
    containerNumber: 'HLBU5544332',
    status: 'At Anchor',
    currentLatitude: -3.98,
    currentLongitude: 39.72,
    speed: 0,
    originPort: 'Durban, South Africa',
    destinationPort: 'Mombasa, Kenya',
    eta: '2026-03-12T08:00:00Z',
    vessel: 'MV Cape Runner',
    lastUpdated: '2026-03-11T07:45:00Z',
    route: [
      { lat: -29.87, lng: 31.03 },
      { lat: -12.35, lng: 40.35 },
      { lat: -3.98, lng: 39.72 },
    ],
  },
];

export function findContainer(containerNumber: string): Container | undefined {
  return containers.find(
    (c) => c.containerNumber.toLowerCase() === containerNumber.toLowerCase()
  );
}
