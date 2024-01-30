import urlFor from '@/sanity/urlFor'
import getPage from '@/sanity/hooks/getPage'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import MyLightbox from '@/app/components/MyLightbox'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const slug = params.slug
  const page = await getPage(slug)

  return {
    title: `${page?.title} | Karrie Marie`,
  }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug)

  return (
    <div className='flex flex-col items-center gap-10 mb-20'>
      <div className='flex flex-col items-center gap-10 max-w-2xl'>
        {page?.image && (
          <div className='relative h-[300px] w-[300px]'>
            <Image
              src={urlFor(page.image).url()}
              alt={page.image.alt ?? 'featured image'}
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
      <div className='w-full'>
        {page?.images && <MyLightbox grid images={page.images} />}
      </div>
    </div>
  )
}
