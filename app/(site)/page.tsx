import { getHomepageSeries } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const homepageSeries = await getHomepageSeries()

  return (
    <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5'>
      {homepageSeries.map((series) => (
        <Link
          href={`/work/${series.slug}`}
          key={series.featureImage}
          className='group relative rounded-lg p-1 h-[650px]'
        >
          {series.featureImage && (
            <Image
              src={series.featureImage}
              alt={
                series.featureImageAlt ??
                `Feature image for ${series.featureImageAlt}`
              }
              className='object-cover rounded-lg transition'
              fill
            />
          )}
          <div className='group-hover:bg-opacity-40 group-hover:opacity-100 opacity-0 absolute inset-0 flex justify-center items-center bg-opacity-0 bg-black transition-all duration-100 ease-linear'>
            <p className='uppercase text-3xl text-white'>{series.title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
