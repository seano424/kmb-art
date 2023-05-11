import url from '@/sanity/url'
const devMode = process.env.NEXT_PUBLIC_SANITY_DB === 'development'

async function getNavItems() {
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
  return await data.json()
}

export default getNavItems
// import getNavItems from '@/sanity/hooks/getNavItems'
