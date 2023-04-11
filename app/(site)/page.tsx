import { getHomepageSeries } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const homepageSeries = await getHomepageSeries()
  console.log(homepageSeries)

  return (
    <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5'>
      {homepageSeries.map((series) => (
        <Link
          href={`/art/${series.slug}`}
          key={series.imageUrl}
          className='group relative rounded-lg p-1 h-[650px]'
        >
          {series.imageUrl && (
            <Image
              src={series.imageUrl}
              alt={series.alt ?? `Feature image for ${series.alt}`}
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
