'use client';

import { useSearchParams } from 'next/navigation';
import TrackingDashboard from '@/components/tracking/tracking-dashboard';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

function DashboardContent() {
  const searchParams = useSearchParams();
  const containerId = searchParams.get('containerId');

  if (!containerId) {
    return (
      <div className="container py-10 px-4 md:px-6 text-center">
        <h1 className="text-2xl font-bold font-headline text-destructive">Invalid Request</h1>
        <p className="text-muted-foreground">Please provide a container number to track.</p>
      </div>
    );
  }

  return (
    <div className="container py-10 px-4 md:px-6">
      <TrackingDashboard containerId={containerId} />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent />
    </Suspense>
  );
}

function DashboardSkeleton() {
  return (
    <div className="container py-10 px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Skeleton className="h-[400px] w-full rounded-xl" />
          <Skeleton className="h-[200px] w-full rounded-xl" />
        </div>
        <div className="lg:col-span-1">
          <Skeleton className="h-[400px] w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}
