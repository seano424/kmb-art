import { groq } from 'next-sanity'
import client from './config/client-config'
import { Page } from '@/types/Page'
import { Art } from '@/types/Art'
import imageUrlBuilder from '@sanity/image-url'
import { NavItems } from '@/types/NavItems'

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

export async function gethomepageImages(): Promise<Art[]> {
  return client.fetch(
    groq`*[_type == "homepageImages"][0].artSeries[]-> {
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

export async function fetchNavItems() {
  const data = await fetch(
    "https://zlrcnyjm.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22navigation%22%5D%5B0%5D%7B%0A%20%20%20%20%20%20logoTitle%2C%0A%20%20%20%20%20%20logoImg%2C%0A%20%20%20%20%20%20navigationLinks%5B%5D%20%7B%0A%20%20%20%20%20%20%20%20_type%20%3D%3D%20'reference'%20%3D%3E%20%40-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20_id%2C%0A%20%20%20%20%20%20%20%20%20%20_createdAt%2C%0A%20%20%20%20%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20%20%20%20%20%22slug%22%3A%20slug.current%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20_type%20%3D%3D%20%22customURL%22%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22slug%22%3A%20slug.current%2C%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D",
    { next: { tags: ['navigation'] }, cache: 'no-store' }
  )
  const navItems = await data.json()

  return navItems
}

export async function getNavItems(): Promise<NavItems> {
  return client.fetch(
    groq`*[_type == "navigation"][0]{
      logoTitle,
      logoImg,
      navigationLinks[] {
        _type == 'reference' => @-> {
          _id,
          _createdAt,
          title,
          "slug": slug.current
        },
        _type == "customURL" => {
          "slug": slug.current,
          title
        }
      }
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
