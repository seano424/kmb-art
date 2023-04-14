import { PortableTextBlock } from 'sanity'

export type Page = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  image?: string
  alt?: string
  content: PortableTextBlock[]
  images?: {
    alt: string
    url: string
  }[]
}
