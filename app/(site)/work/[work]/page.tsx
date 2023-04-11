import { getWork, getWorks } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  params: { work: string }
}

export default async function Work({ params }: Props) {
  const slug = params.work
  const work = await getWork(slug)
  const works = await getWorks()

  return (
    <div className='container border'>
      {work.description && (
        <p className='text-center pb-10'>{work.description}</p>
      )}
      <div className='flex flex-wrap items-center justify-between gap-10'>
        {work.images &&
          work.images.map((img) => (
            <Image
              key={img.url}
              src={img.url}
              alt={img.alt}
              height={600}
              width={600}
              className='object-contain'
            />
          ))}
      </div>

      <div className='py-10'>
        <p>Related Works</p>
        <div className='grid grid-cols-3 gap-10 pt-5'>
          {works
            .filter((w) => w.title !== work.title)
            .map((filteredWork) => (
              <Link
                href={`/work/${filteredWork.slug}`}
                className='relative h-[500px] group'
                key={filteredWork._id}
              >
                <Image
                  src={filteredWork.featureImage}
                  alt={
                    filteredWork.featureImageAlt ??
                    `Feature Image for ${filteredWork.title}`
                  }
                  className='rounded object-cover'
                  fill
                />
                <div className='group-hover:bg-opacity-40 group-hover:opacity-100 opacity-0 absolute inset-0 flex justify-center items-center bg-opacity-0 bg-black transition-all duration-100 ease-linear'>
                  <p className='uppercase text-3xl text-white'>
                    {filteredWork.title}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
