import url from '../url'

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
    next: { tags: ['pages'] },
  })

  const json = await data.json()
  return json.result
}

export default getPages
