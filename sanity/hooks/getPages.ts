import url from '../url'
const devMode = process.env.devMode

export type Pages = {
  slug: string
  _createdAt: Date
}[]

async function getPages(): Promise<Pages> {
  url.searchParams.set(
    'query',
    `
    *[_type == "page"]{
      "slug": slug.current,
      _createdAt
    }
    `
  )

  const data = await fetch(url.toString(), {
    next: {tags: ['pages'], revalidate: devMode ? 1 : 60},
  })

  const json = await data.json()
  return json.result
}

export default getPages
