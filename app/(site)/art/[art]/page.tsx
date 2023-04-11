import { getArt } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

type Props = {
  params: { art: string }
}

export default async function Project({ params }: Props) {
  const slug = params.art
  const art = await getArt(slug)
  console.log(art);
  

  return (
    <div>
      <p>hello!</p>
      <p>{art.title}</p>
      {art.images &&
        art.images.map((img) => (
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
