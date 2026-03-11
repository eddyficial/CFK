import { NextRequest, NextResponse } from 'next/server';
import { containers, findContainer } from '@/data/containers';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const containerNumber = searchParams.get('containerNumber');

  if (containerNumber) {
    const container = findContainer(containerNumber);
    if (!container) {
      return NextResponse.json(
        { error: 'Container not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(container);
  }

  return NextResponse.json(containers);
}
