import { getPage } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import MyLightbox from '@/app/components/MyLightbox'

type Props = {
  params: { slug: string }
}

export const revalidate = 10

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug)
  console.log(page)

  return (
    <div className='flex flex-col items-center gap-10 container py-5'>
      <div className='flex flex-col items-center gap-10 max-w-2xl'>
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
      <div className='max-w-7xl'>
        {page?.images && <MyLightbox grid images={page.images} />}
      </div>
    </div>
  )
}
