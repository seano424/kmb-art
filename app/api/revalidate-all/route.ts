import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  if (request.method !== 'POST')
    return new Response(null, { status: 404, statusText: 'Not Found' })

  try {
    const json = await request.json()
    const secret = await request.headers.get('secret')

    if (secret !== 'testing123') {
      return NextResponse.json({ revalidated: false })
    }

    const { _type, slug } = json

    switch (_type) {
      case 'navigation':
        revalidateTag(_type)
        break
      case 'homepageImages':
        revalidateTag('homepage-images')
        break
      default:
        revalidateTag(slug)
        revalidateTag('navigation')
        break
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (e) {
    return NextResponse.json({ revalidated: false, now: Date.now(), error: e })
  }
}
