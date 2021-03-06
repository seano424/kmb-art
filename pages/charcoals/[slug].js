import React from 'react'
import Layout from '@/components/layout'
import SidebarLayout from '@/components/sidebar-layout'
import { getSerie, getAllPaintingsWithSlug } from '../../lib/api'
import Artwork from '@/components/artwork'

export default function InkWork({ preview, charcoals }) {
  const content = charcoals.results
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <section className="mx-20">
          {content.map((p) => (
            <>
              <h1 className="my-8">{p.title}</h1>
              <Artwork artwork={p.artWork} />
            </>
          ))}
        </section>
      </SidebarLayout>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const allCharcoals = await getSerie(params.slug, preview)
  return {
    props: { preview, charcoals: allCharcoals },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPaintingsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: false,
  }
}
