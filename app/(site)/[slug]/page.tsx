import { getPage } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug)

  return (
    <div className='flex flex-col gap-10'>
      <h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold'>
        {page?.title}
      </h1>
      {page.image && (
        <div className='relative h-[500px] w-full'>
          <Image
            src={page.image}
            alt={page.alt!}
            className='object-cover rounded-lg'
            fill
          />
        </div>
      )}
      <div className='text-lg text-gray-700'>
        <PortableText value={page?.content} />
      </div>
    </div>
  )
}
