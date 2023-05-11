import url from '../url'

export type Work = {
  _id: string
  _createdAt: Date
  title: string
  description?: string
  slug: string
  category: string
  featureImage: {
    url: string
    alt: string
  }
  images: {
    alt: string
    url: string
    image: {}
  }[]
}

async function getWork(slug: string): Promise<Work> {
  url.searchParams.set(
    'query',
    `
    *[_type == "art-work" && slug.current == "${slug}"][0]{
      _createdAt,
      _id,
      title,
      description,
      "category": category.title,
      "slug": slug.current,
      featureImage,
      'images': images[] {
        alt,
        "url": image.asset->url,
        image
      }
    }
    `
  )
  const data: any = await fetch(url.toString(), { next: { tags: [slug] } })
  const json = await data.json()
  return json.result
}

export default getWork
