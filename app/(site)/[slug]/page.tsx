import { getPage } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug)

  return (
    <div className='flex flex-col items-center gap-10 container py-5 max-w-2xl'>
      {page?.image && (
        <div className='relative h-[300px] w-[300px]'>
          <Image
            src={page.image}
            alt={page.alt!}
            className='object-cover rounded-full'
            fill
          />
        </div>
      )}
      {page?.content && (
        <div className='text-lg text-center text-gray-700 prose'>
          <PortableText value={page.content} />
        </div>
      )}
    </div>
  )
}
