import url from '../url'
const devMode = process.env.devMode

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
    next: {tags: ['featured-image'], revalidate: devMode ? 1 : 60},
  })
  const json = await data.json()
  return json.result
}

export default getFeaturedImage
