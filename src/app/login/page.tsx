'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GoogleIcon } from '@/components/icons/google-icon';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = () => {
    // Simulate Google login
    const user = {
      name: 'Test User',
      email: 'user@example.com',
    };
    localStorage.setItem('user', JSON.stringify(user));

    toast({
      title: 'Login Successful',
      description: 'Welcome back!',
    });

    router.push('/');
    router.refresh(); // Forces a refresh to update the header state
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Login</CardTitle>
          <CardDescription>
            Sign in to your VesselTrack account to access all features.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button variant="outline" className="w-full" onClick={handleLogin}>
            <GoogleIcon className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
        </CardContent>
        <CardFooter>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <span className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </span>{' '}
            and{' '}
            <span className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </span>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
