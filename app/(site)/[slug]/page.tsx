import { getPage } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug)

  return (
    <div>
      <h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold'>
        {page?.title}
      </h1>
      <div>
        {page.image && (
          <Image
            src={page.image}
            alt={page.alt!}
            width={750}
            height={700}
            className='object-cover rounded-lg'
          />
        )}
      </div>
      <div className='text-lg text-gray-700 mt-10'>
        <PortableText value={page?.content} />
      </div>
    </div>
  )
}
