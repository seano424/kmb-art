import url from '../url'
const devMode = process.env.NEXT_PUBLIC_SANITY_DB === 'development'
import {Work} from './getWork'

export type FeaturedImage = {
  _createdAt: string
  _rev: string
  _type: string
  _id: string
  featureImage: {
    _type: string
    alt: string
    asset: {
      _ref: string
      _type: string
    }
  }
  title: string
  _updatedAt: string
}

async function getFeaturedImage(): Promise<FeaturedImage> {
  url.searchParams.set(
    'query',
    `
    *[_type == "featuredImage"][0]
    `
  )
  const data = await fetch(url.toString(), {
    next: {tags: ['featured-image']},
    cache: devMode ? 'no-store' : 'force-cache',
  })
  const json = await data.json()
  return json.result
}

export default getFeaturedImage
