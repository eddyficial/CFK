import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-6 text-center">
      <div>
        <h1 className="text-2xl font-bold font-headline mb-4">Coming Soon</h1>
        <p className="text-muted-foreground mb-6">Customer login is under development.</p>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
