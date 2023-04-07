export type Art = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  category?: string
  image?: string
  alt?: string
  images?: {
    alt: string
    url: string
  }[]
}
