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
    <div className='flex flex-col items-center justify-center gap-10'>
      {work.images &&
        work.images.map((img) => (
          <Image
            key={img.url}
            src={img.url}
            alt={img.alt}
            height={1000}
            width={1000}
            className='object-contain'
          />
        ))}
    </div>
  )
}
