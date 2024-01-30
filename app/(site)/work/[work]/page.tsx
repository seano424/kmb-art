import Link from 'next/link'
import Image from 'next/image'
import getWork from '@/sanity/hooks/getWork'
import getWorks from '@/sanity/hooks/getWorks'
import urlFor from '@/sanity/urlFor'
import MyLightbox from '@/app/components/MyLightbox'

type Props = {
  params: { work: string }
}

export async function generateMetadata({
  params,
}: {
  params: { work: string }
}) {
  const slug = params.work
  const work = await getWork(slug)

  return {
    title: work?.title ?? 'Work by Karrie Marie',
  }
}

export default async function Work({ params }: Props) {
  const slug = params.work
  const work = await getWork(slug)
  const works = await getWorks()

  return (
    <div>
      <div className='mb-10'>
        {work.title && <h3 className="text-2xl text-gray-400">{work.title}</h3>}
        {work.description && <h4>{work.description}</h4>}
      </div>

      {work.images && <MyLightbox images={work.images} />}

      <div className="my-20">
        <h3 className="tracking-widest text-3xl">Related Works</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
          {works
            .filter((w) => w.title !== work.title)
            .map((filteredWork) => (
              <Link
                href={`/work/${filteredWork.slug}`}
                className="relative h-[500px] group"
                key={filteredWork._id}
              >
                <Image
                  src={urlFor(filteredWork.featureImage).height(500).url()}
                  alt={
                    filteredWork.featureImage.alt ??
                    `Feature Image for ${filteredWork.title}`
                  }
                  className="rounded object-cover"
                  sizes="100vw"
                  fill
                />
                <div className="group-hover:bg-opacity-10 group-hover:opacity-100 group-focus:bg-opacity-10 group-focus:opacity-100 opacity-0 absolute inset-0 flex justify-center items-center bg-opacity-0 bg-white transition-all duration-100 ease-linear p-10">
                  <p className="uppercase text-3xl text-white">
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
