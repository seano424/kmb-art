import { PortableTextBlock } from 'sanity'
import url from '../url'
import devMode from '@/lib/devMode'

export type Page = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  image?: {
    alt?: string
  }
  content: PortableTextBlock[]
  images?: {
    alt: string
    url: string
    image: {}
  }[]
}

async function getPage(slug: string): Promise<Page> {
  url.searchParams.set(
    'query',
    `
    *[_type == "page" && slug.current == "${slug}"][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      image,
      content,
      'images': images[] {
        alt,
        "url": image.asset->url,
        image
      }
    }
  `
  )
  const data: any = await fetch(url.toString(), {
    next: { tags: [slug] },
    cache: devMode ? 'no-store' : 'force-cache',
  })
  const json = await data.json()
  return json.result
}

export default getPage
