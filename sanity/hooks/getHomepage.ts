import url from '../url'
const devMode = process.env.devMode

export type Homepage = {
  _type: string
  _id: string
  featureImage: {
    alt: string
    asset: {
      _ref: string
      _type: string
    }
    _type: string
  }
  _updatedAt: Date
  popularPrints?: [
    {
      alt?: string
      _type: string
      image: {
        asset: {
          _type: string
          _ref: string
        }
      }
    }
  ]
  _key: string
  _createdAt: Date
  _rev: string
  featuredSeries?: [
    {
      featureImage: {
        _type: string
        alt: string
        asset: {
          _ref: string
          _type: string
        }
      }
      title: string
      _id: string
      slug: {
        current: string
        _type: string
      }
    }
  ]
  ctaAllArt?: {
    heading: string
    label: string
  }
}

async function getHomepage(): Promise<Homepage> {
  url.searchParams.set(
    'query',
    `
    *[_type == "homepage"][0]{
      featuredSeries[]->{
        featureImage,
        title,
        slug
      },
      popularPrints,
      featureImage,
      _createdAt,
      _rev,
      _type,
      _id,
      ctaAllArt
    }
    `
  )
  const data = await fetch(url.toString(), {
    next: { tags: ['homepage'], revalidate: devMode ? 1 : 60 },
  })
  const json = await data.json()
  return json.result
}

export default getHomepage
