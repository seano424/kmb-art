import Link from 'next/link'
import Image from 'next/image'
import { HomepageSeries } from '@/types/HomepageSeries'

interface Props {
  work: HomepageSeries[]
}

export const ImagesGrid = ({ work }: Props) => {
  return (
    <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {work.map((work) => (
        <Link
          href={`/work/${work.slug}`}
          key={work.featureImage}
          className='group relative rounded-lg p-1 h-[650px]'
        >
          {work.featureImage && (
            <Image
              src={work.featureImage}
              alt={
                work.featureImageAlt ??
                `Feature image for ${work.featureImageAlt}`
              }
              className='object-cover rounded-lg transition'
              fill
            />
          )}
          <div className='group-hover:bg-opacity-40 group-hover:opacity-100 opacity-0 absolute inset-0 flex justify-center items-center bg-opacity-0 bg-black transition-all duration-100 ease-linear'>
            <p className='uppercase text-3xl text-white'>{work.title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
