import url from '../url'
const devMode = process.env.devMode
import {Work} from './getWork'

async function getWorks(): Promise<Work[]> {
  url.searchParams.set(
    'query',
    `
    *[_type == "art-work"] | order(_updatedAt desc) {
      _createdAt,
      _id,
      title,
      category,
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
  const data = await fetch(url.toString(), {
    next: {tags: ['works'], revalidate: devMode ? 1 : 60},
  })
  const json = await data.json()
  return json.result
}

export default getWorks
