import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const tag = await request.headers.get('tag')

  if (tag !== 'navigation') {
    return NextResponse.json({ revalidated: false })
  }

  revalidateTag(tag)
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
