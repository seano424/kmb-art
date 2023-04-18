export type Art = {
  _id: string
  _createdAt: Date
  title: string
  description?: string
  slug: string
  category: string
  featureImage: {
    url: string
    alt: string
  }
  images?: {
    alt: string
    url: string
    image: {}
  }[]
}
