import { getWork } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

type Props = {
  params: { work: string }
}

export default async function Work({ params }: Props) {
  const slug = params.work
  const work = await getWork(slug)

  return (
    <div>
      {work.description && (
        <p className='text-center pb-10'>{work.description}</p>
      )}
      <div className='flex flex-wrap items-center justify-center gap-5'>
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
    </div>
  )
}
