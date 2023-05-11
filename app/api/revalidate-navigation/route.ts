import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  const secret = await request.headers.get('secret')

  if (secret !== 'testing123') {
    return NextResponse.json({ revalidated: false, secret })
  }

  revalidateTag('navigation')
  return NextResponse.json({ revalidated: true, now: Date.now(), secret })
}
