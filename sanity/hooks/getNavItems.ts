import url from '@/sanity/url'

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
  const data = await fetch(url.toString(), { next: { tags: ['navigation'] } })
  return await data.json()
}

export default getNavItems
// import getNavItems from '@/sanity/hooks/getNavItems'