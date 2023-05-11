import url from '@/sanity/url'
import devMode from '@/lib/devMode'

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
    next: { tags: ['navigation'] },
    cache: devMode ? 'no-store' : 'force-cache',
  })
  const json = await data.json()
  return json.result
}

export default getNavItems
