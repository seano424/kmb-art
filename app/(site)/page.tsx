import Image from 'next/image'
import urlFor from '@/sanity/urlFor'
import getFeaturedImage from '@/sanity/hooks/getFeaturedImage'

export default async function Home() {
  const featuredImage = await getFeaturedImage()

  return (
    <div className="py-10 md:py-5">
      {/* Hero */}
      <div className="bg-purple-500 w-full h-[500px] lg:h-[600px]">
        <Image
          className="object-cover"
          src={urlFor(featuredImage.featureImage.asset._ref).height(800).url()}
          alt={featuredImage.featureImage.alt}
          fill
        />
      </div>
    </div>
  )
}
