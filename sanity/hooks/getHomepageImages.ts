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

async function getHomepageImages(): Promise<Work[]> {
  url.searchParams.set(
    'query',
    `
    *[_type == "homepageImages"][0].artSeries[]-> {
      _createdAt,
      _id,
      title,
      description,
      "category": category.title,
      "slug": slug.current,
      "featureImage": featureImage.asset->url,
      "featureImageAlt": featureImage.alt,
      images
    }
    `
  )
  const data: any = await fetch(url.toString(), { next: { tags: ['works'] } })
  const json = await data.json()
  return json.result
}

export default getHomepageImages