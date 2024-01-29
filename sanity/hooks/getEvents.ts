import url from '../url'
const devMode = process.env.devMode
import {PortableTextBlock} from 'sanity'

export type Events = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  image?: {
    alt?: string
  }
  content: PortableTextBlock[]
  images?: {
    alt: string
    url: string
    image: {}
  }[]
}[]

async function getEvents(): Promise<Events> {
  url.searchParams.set(
    'query',
    `
    *[_type == "events"]
    `
  )

  const data = await fetch(url.toString(), {
    next: {tags: ['events'], revalidate: devMode ? 1 : 60},
  })

  const json = await data.json()
  return json.result
}

export default getEvents
