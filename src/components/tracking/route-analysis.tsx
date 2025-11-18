import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function RouteAnalysis({ analysis }: { analysis: string }) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Zap className="h-5 w-5 text-accent" />
          AI-Powered Route Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {analysis}
        </p>
      </CardContent>
    </Card>
  );
}
