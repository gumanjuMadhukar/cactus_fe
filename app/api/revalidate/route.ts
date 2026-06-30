import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get('secret');
    const tag = req.nextUrl.searchParams.get('tag'); // Optional: specific tag

    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    if (tag) {
      // Revalidate specific tag (Best Performance)
      revalidateTag(tag);
      return NextResponse.json({ 
        revalidated: true, 
        tag,
        message: `Tag '${tag}' revalidated` 
      });
    } else {
      // Fallback: Revalidate entire site
      revalidatePath('/', 'layout');
      return NextResponse.json({ 
        revalidated: true, 
        message: 'Full site revalidated' 
      });
    }
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json({ message: 'Revalidation failed' }, { status: 500 });
  }
}