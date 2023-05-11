import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import urlFor from '@/sanity/urlFor'
import { Work } from '@/sanity/hooks/getWork'

interface Props {
  work: Work
  priority?: boolean
  size: 'sm' | 'lg'
}

const ImageCard = ({ work, priority = false, size }: Props) => {
  const sm = size === 'sm'

  return (
    <>
      {sm ? (
        <Link href={`/work/${work.slug}`} className='flex flex-col gap-4'>
          <div className='group relative p-1 flex flex-col h-[350px] md:h-[400px] border-8 overflow-hidden border-white '>
            {work.featureImage && (
              <Image
                fill
                src={urlFor(work.images[0].image).height(800).url()}
                alt={
                  work.featureImage.alt ??
                  `Feature image for ${work.featureImage.alt}`
                }
                className='object-cover  hover:scale-105 transition-all duration-700'
                priority={priority}
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
            )}
          </div>
          <p className='p text-center'>{work.title}</p>
        </Link>
      ) : (
        <div className='flex flex-col'>
          <Link
            href={`/work/${work.slug}`}
            className='group relative rounded-lg p-1 flex flex-col h-[250px] lg:h-[750px]'
          >
            {work.featureImage && (
              <Image
                fill
                src={urlFor(work.featureImage).height(800).url()}
                alt={
                  work.featureImage.alt ??
                  `Feature image for ${work.featureImage.alt}`
                }
                className='object-cover rounded transition object-top'
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
              <p className='text-white text-center h1'>{work.title}</p>
            </div>
          </Link>
        </div>
      )}
    </>
  )
}

export default ImageCard
