import Image from 'next/image'
import Link from 'next/link'
import urlFor from '@/sanity/urlFor'
import getHomepage from '@/sanity/hooks/getHomepage'
import Carousel from '../components/PopularProjectsCarousel'

export default async function Home() {
  const homepage = await getHomepage()

  return (
    <>
      {/* Hero */}
      <section className="bg-purple-500 w-full h-[500px] lg:h-[600px] relative">
        {homepage && (
          <Image
            className="object-cover"
            src={urlFor(homepage.featureImage).height(800).url()}
            alt={homepage.featureImage.alt}
            fill
            priority
          />
        )}
      </section>

      {/* CTA - All Art */}
      {homepage && homepage.ctaAllArt && (
        <section className="flex flex-col gap-5 items-center my-20">
          <h2 className="text-3xl max-w-md text-center tracking-wide leading-relaxed">
            {homepage.ctaAllArt.heading}
          </h2>
          <Link
            className="bg-gray-600 text-white px-16 py-4 uppercase text-lg"
            href={'/work'}
          >
            {homepage.ctaAllArt.label}
          </Link>
        </section>
      )}

      {/* Featured Series */}
      <section className="grid lg:grid-cols-2 gap-5 my-20">
        {homepage &&
          homepage.featuredSeries &&
          homepage.featuredSeries.map((work) => (
            <Link
              key={work._id}
              href={`/work/${work.slug.current}`}
              className="relative h-[700px]"
            >
              <div className="absolute inset-0 p-10 z-40 flex flex-col justify-between text-gray-50">
                <h3 className="text-3xl">{work.featureImage.alt}</h3>
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

      {/* Popular Prints */}
      <section className="my-20">
        <h3 className="text-3xl text-center pb-5">Popular Pieces</h3>
        {homepage.popularPrints && (
          <Carousel popularPrints={homepage.popularPrints} />
        )}
      </section>
    </>
  )
}
