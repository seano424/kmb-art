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
      <p>hello!</p>
      <p>{work.title}</p>
      {work.images &&
        work.images.map((img) => (
          <Image
            key={img.url}
            src={img.url}
            alt={img.alt}
            height={700}
            width={300}
          />
        ))}
    </div>
  )
}
