import { getHomepageSeries } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const homepageSeries = await getHomepageSeries()

  return (
    <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {homepageSeries.map((series) => (
        <Link
          href={`/work/${series.slug}`}
          key={series.imageUrl}
          className='rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition'
        >
          {series.imageUrl && (
            <Image
              src={series.imageUrl}
              alt={series.alt ?? `Feature image for ${series.alt}`}
              width={750}
              height={300}
              className='object-cover rounded-lg'
            />
          )}
        </Link>
      ))}
    </div>
  )
}
