export type Art = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  category?: string
  featureImage?: string
  featureImageAlt?: string
  images?: {
    alt: string
    url: string
  }[]
}
