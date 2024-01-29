import Image from 'next/image'
import Link from 'next/link'
import urlFor from '@/sanity/urlFor'
import getFeaturedImage from '@/sanity/hooks/getFeaturedImage'

export default async function Home() {
  const featuredImage = await getFeaturedImage()

  return (
    <>
      {/* Hero */}
      <section className="bg-purple-500 w-full h-[500px] lg:h-[600px] relative">
        <Image
          className="object-cover"
          src={urlFor(featuredImage.featureImage.asset._ref).height(800).url()}
          alt={featuredImage.featureImage.alt}
          fill
        />
      </section>

      {/* CTA - All Art */}
      <section className="flex flex-col gap-5 items-center my-20">
        <h2 className="text-3xl max-w-md text-center tracking-wide leading-relaxed">Explore more of the artwork by Karrie Marie Baxley</h2>
        <Link
          className="bg-gray-600 text-white px-16 py-4 uppercase text-lg"
          href={'/work'}
        >
          See more art
        </Link>
      </section>
    </>
  )
}
