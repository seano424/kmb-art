import { createClient, groq } from 'next-sanity'
import clientConfig from './config/client-config'
import { Page } from '@/types/Page'
import { Art } from '@/types/Art'

export async function getWorks(): Promise<Art[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "art-work"] | order(_updatedAt desc) {
      _createdAt,
      _id,
      title,
      category,
      "slug": slug.current,
      "featureImage": featureImage.asset->url,
      "featureImageAlt": featureImage.alt,
      'images': images[] {
        alt,
        "url": image.asset->url
      }
    }`
  )
}

export async function getWork(slug: string): Promise<Art> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "art-work" && slug.current == $slug][0]{
      _createdAt,
      _id,
      title,
      description,
      "category": category.title,
      "slug": slug.current,
      "featureImage": featureImage.asset->url,
      "featureImageAlt": featureImage.alt,
      'images': images[] {
        alt,
        "url": image.asset->url
      }
    }`,
    { slug }
  )
}

export async function getHomepageSeries(): Promise<Art[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homepageSeries"][0].artSeries[]-> | order(_createdAt desc){
      _createdAt,
      _id,
      title,
      description,
      "category": category.title,
      "slug": slug.current,
      "featureImage": featureImage.asset->url,
      "featureImageAlt": featureImage.alt,
      'images': images[] {
        alt,
        "url": image.asset->url
      }
    }`
  )
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      content
    }`,
    { slug }
  )
}
