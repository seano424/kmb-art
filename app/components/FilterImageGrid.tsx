import Link from 'next/link'
import Image from 'next/image'
import urlFor from '@/sanity/urlFor'
import clsx from 'clsx'
import { Work } from '@/sanity/hooks/getWork'

interface ImageGridProps {
  images: Work[]
  filterValue: string
}

export const FilterImageGrid = ({ images, filterValue }: ImageGridProps) => (
  <div
    className={clsx(
      'grid gap-10 mb-10',
      filterValue === '' ? 'grid-cols-1 lg:grid-cols-4' : 'grid-cols-1'
    )}
  >
    {images.map((work) => (
      <Link
        href={`/work/${work.slug}`}
        className="flex flex-col gap-4"
        key={work._id}
      >
        <div className="relative w-full h-[500px]">
          <Image
            src={urlFor(work.featureImage).height(800).url()}
            alt={work.title}
            className={clsx(
              filterValue === '' ? 'object-cover' : 'object-contain',
              'transition-all duration-700 ease-in-out transform hover:scale-95'
            )}
            priority
            fill
          />
        </div>
        <p className="text-center">{work.title}</p>
      </Link>
    ))}
  </div>
)

export default FilterImageGrid
