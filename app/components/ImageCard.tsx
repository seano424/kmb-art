import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { Art } from '@/types/Art'
import { urlFor } from '@/sanity/sanity-utils'

interface Props {
  work: Art
  priority?: boolean
}

const ImageCard = ({ work, priority = false }: Props) => {
  return (
    <Link
      href={`/work/${work.slug}`}
      className={clsx(
        'group relative rounded-lg p-1',
        'h-[350px] md:h-[500px] lg:h-[800px]'
      )}
    >
      {work.featureImage && (
        <Image
          fill
          src={urlFor(work.featureImage).height(800).url()}
          alt={
            work.featureImage.alt ??
            `Feature image for ${work.featureImage.alt}`
          }
          className='object-cover rounded transition'
          priority={priority}
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      )}
      <div
        className={clsx(
          'bg-opacity-0 opacity-100 group-hover:bg-opacity-5 group-focus:bg-opacity-5',
          'absolute inset-0 flex justify-center items-center',
          'bg-white transition-all duration-100 ease-linear p-10'
        )}
      >
        <p className='uppercase text-3xl text-white text-center'>
          {work.title}
        </p>
      </div>
    </Link>
  )
}

export default ImageCard
