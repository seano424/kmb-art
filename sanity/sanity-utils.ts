import { groq } from 'next-sanity'
import client from './config/client-config'
import { Page } from '@/types/Page'
import { Art } from '@/types/Art'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getWorks(): Promise<Art[]> {
  return client.fetch(
    groq`*[_type == "art-work"] | order(_updatedAt desc) {
      _createdAt,
      _id,
      title,
      category,
      "slug": slug.current,
      featureImage,
      'images': images[] {
        alt,
        "url": image.asset->url,
        image
      }
    }`
  )
}

export async function getWork(slug: string): Promise<Art> {
  return client.fetch(
    groq`*[_type == "art-work" && slug.current == $slug][0]{
      _createdAt,
      _id,
      title,
      description,
      "category": category.title,
      "slug": slug.current,
      featureImage,
      'images': images[] {
        alt,
        "url": image.asset->url,
        image
      }
    }`,
    { slug }
  )
}

export async function getHomepageSeries(): Promise<Art[]> {
  return client.fetch(
    groq`*[_type == "homepageSeries"][0].artSeries[]-> | order(_createdAt desc){
      _createdAt,
      _id,
      title,
      description,
      "category": category.title,
      "slug": slug.current,
      "featureImage": featureImage.asset->url,
      "featureImageAlt": featureImage.alt,
      images
    }`
  )
}

export async function getPages(): Promise<Page[]> {
  return client.fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      image,
      content,
      'images': images[] {
        alt,
        "url": image.asset->url,
        image
      }
    }`,
    { slug }
  )
}
