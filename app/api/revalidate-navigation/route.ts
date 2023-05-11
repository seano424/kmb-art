import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

// export const runtime = 'edge'

export async function POST(request: NextRequest) {
  const tag = await request.headers.get('tag')
  const secret = await request.headers.get('secret')

  if (tag !== 'navigation' || secret !== 'testing123') {
    return NextResponse.json({ revalidated: false })
  }

  revalidateTag(tag)
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
