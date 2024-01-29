import Image from 'next/image'
import Link from 'next/link'
import urlFor from '@/sanity/urlFor'
import getFeaturedImage from '@/sanity/hooks/getFeaturedImage'
import getWorks from '@/sanity/hooks/getWorks'

export default async function Home() {
  const featuredImage = await getFeaturedImage()
  const works = await getWorks()

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
        <h2 className="text-3xl max-w-md text-center tracking-wide leading-relaxed">
          Explore more of the artwork by Karrie Marie Baxley
        </h2>
        <Link
          className="bg-gray-600 text-white px-16 py-4 uppercase text-lg"
          href={'/work'}
        >
          See more art
        </Link>
      </section>

      {/* Featured Series */}
      <section className="grid lg:grid-cols-2 gap-5 my-20">
        {works &&
          works.slice(0, 2).map((work) => (
            <Link
              key={work._id}
              href={`/work/${work.slug}`}
              className="relative h-[700px]"
            >
              <div className="absolute inset-0 p-10 z-40 flex flex-col justify-between text-gray-50">
                <h3 className="text-3xl">{work.title}</h3>
                <p className="text-xl underline underline-offset-4">See more</p>
              </div>
              <Image
                className="object-cover"
                src={urlFor(work.featureImage).height(800).url()}
                alt={work.featureImage.alt}
                fill
              />
            </Link>
          ))}
      </section>
    </>
  )
}
