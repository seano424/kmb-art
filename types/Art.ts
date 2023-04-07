export type Art = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  category?: string
  featureImage?: {
    alt: string
    url: string
  }
  images?: {
    alt: string
    url: string
  }[]
}
