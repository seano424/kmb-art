import { getArtSeries } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const artSeries = await getArtSeries()

  console.log('art: ', artSeries)

  return (
    <div>
      <h1 className='text-7xl font-extrabold text-gray-700'>
        Hello I&apos;m
        <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
          {' '}
          Karrie Marie!
        </span>
      </h1>
      <p className='mt-3 text-xl text-gray-600'>
        Hey everyone! Check out my art!
      </p>
      <h2 className='mt-24 font-bold text-gray-700 text-3xl'>
        My Art Collection
      </h2>

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
    </div>
  )
}
