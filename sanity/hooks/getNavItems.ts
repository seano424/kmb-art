import url from '@/sanity/url'
const devMode = process.env.devMode

export type NavItems = {
  navigationLinks: {
    slug?: string
    title?: string
    _id?: string
  }[]
  logoTitle?: string
  logoImg?: string
}

async function getNavItems(): Promise<NavItems> {
  url.searchParams.set(
    'query',
    `
    *[_type == "navigation"][0]{
      logoTitle,
      logoImg,
      navigationLinks[] {
        _type == 'reference' => @-> {
          _id,
          _createdAt,
          title,
          "slug": slug.current
        },
        _type == "customURL" => {
          "slug": slug.current,
          title
        }
      }
    }
  `
  )
  const data = await fetch(url.toString(), {
    next: {tags: ['navigation'], revalidate: devMode ? 1 : 60},
  })
  const json = await data.json()
  return json.result
}

export default getNavItems
