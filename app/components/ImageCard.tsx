import Link from 'next/link'
import Image from 'next/image'
import { Art } from '@/types/Art'
import clsx from 'clsx'

interface Props {
  work: Art
  priority?: boolean
}

const ImageCard = ({ work, priority = false }: Props) => {
  return (
    <Link
      href={`/work/${work.slug}`}
      key={work.featureImage}
      className={clsx(
        'group relative rounded-lg p-1',
        'h-[350px] lg:h-[650px]'
      )}
    >
      {work.featureImage && (
        <Image
          src={work.featureImage}
          alt={
            work.featureImageAlt ?? `Feature image for ${work.featureImageAlt}`
          }
          className='object-cover rounded transition'
          priority={priority}
          fill
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      )}
      <div
        className={clsx(
          'bg-opacity-10 opacity-100 group-hover:bg-opacity-20 group-focus:bg-opacity-20',
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
