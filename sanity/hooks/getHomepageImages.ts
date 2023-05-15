import url from '../url'
const devMode = process.env.NEXT_PUBLIC_SANITY_DB === 'development'
import { Work } from './getWork'

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
  const data = await fetch(url.toString(), {
    next: { tags: ['homepage-images'] },
    cache: devMode ? 'no-store' : 'force-cache',
  })
  const json = await data.json()
  return json.result
}

export default getHomepageImages
