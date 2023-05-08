import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { Art } from '@/types/Art'
import { urlFor } from '@/sanity/sanity-utils'

interface Props {
  work: Art
  priority?: boolean
  size: 'sm' | 'lg'
}

const ImageCard = ({ work, priority = false, size }: Props) => {
  const sm = size === 'sm'
  const lg = size === 'lg'

  return (
    <>
      {sm ? (
        <Link href={`/work/${work.slug}`} className='flex flex-col gap-4'>
          <div className='group relative rounded-lg p-1 flex flex-col h-[350px] md:h-[300px]'>
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
          </div>
          <p className='p'>{work.title}</p>
        </Link>
      ) : (
        <div className='flex flex-col'>
          <Link
            href={`/work/${work.slug}`}
            className='group relative rounded-lg p-1 flex flex-col h-[350px] md:h-[500px] lg:h-[750px]'
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
              <p className='text-white text-center p'>
                {work.title}
              </p>
            </div>
          </Link>
        </div>
      )}
    </>
  )
}

export default ImageCard
