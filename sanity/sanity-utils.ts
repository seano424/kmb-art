import { createClient, groq } from 'next-sanity'
import { Project } from '@/types/Project'
import clientConfig from './config/client-config'
import { Page } from '@/types/Page'
import { Art } from '@/types/Art'
import { HomepageSeries } from '@/types/HomepageSeries'

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

export async function getArt(slug: string): Promise<Art> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "art" && slug.current == $slug][0]{
      _createdAt,
      _id,
      title,
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

// artSeries[]-> | order(_createdAt asc)

export async function getHomepageSeries(): Promise<HomepageSeries[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homepageSeries"][0].artSeries[]-> | order(_createdAt desc){
      "imageUrl": featureImage.asset->url,
      "alt": featureImage.alt,
      "slug": slug.current,
      title,
      _createdAt
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
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
