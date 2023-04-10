import { getArtSeries } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const artSeries = await getArtSeries()

  console.log('art: ', artSeries)

  return (
    <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {artSeries.map((series) => (
        <Link
          href={`/projects/${series.slug}`}
          key={series._id}
          className='rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition'
        >
          {series.image && (
            <Image
              src={series.image}
              alt={series.alt ?? `Feature image for ${series.title}`}
              width={750}
              height={300}
              className='object-cover rounded-lg'
            />
          )}
          <div className='mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
            {series.title}
          </div>
        </Link>
      ))}
    </div>
  )
}
