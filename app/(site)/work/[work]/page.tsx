import { getWork, getWorks, urlFor } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'
import MyLightbox from '@/app/components/MyLightbox'

type Props = {
  params: { work: string }
}

export const revalidate = 10

export default async function Work({ params }: Props) {
  const slug = params.work
  const work = await getWork(slug)
  const works = await getWorks()

  return (
    <div>
      {work.title && (
        <h3 className='container text-right tracking-widest'>{work.title}</h3>
      )}
      {work.description && (
        <h3 className='container text-right tracking-widest'>
          {work.description}
        </h3>
      )}

      <div className='pt-20'>
        {work.images && <MyLightbox images={work.images} />}
      </div>

      <div className='py-10 container'>
        <h3 className='tracking-widest'>Related Works</h3>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-5'>
          {works
            .filter((w) => w.title !== work.title)
            .map((filteredWork) => (
              <Link
                href={`/work/${filteredWork.slug}`}
                className='relative h-[500px] group'
                key={filteredWork._id}
              >
                <Image
                  src={urlFor(filteredWork.featureImage).height(500).url()}
                  alt={
                    filteredWork.featureImage.alt ??
                    `Feature Image for ${filteredWork.title}`
                  }
                  className='rounded object-cover'
                  sizes='100vw'
                  fill
                />
                <div className='group-hover:bg-opacity-10 group-hover:opacity-100 group-focus:bg-opacity-10 group-focus:opacity-100 opacity-0 absolute inset-0 flex justify-center items-center bg-opacity-0 bg-white transition-all duration-100 ease-linear p-10'>
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
