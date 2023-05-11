import clsx from 'clsx'
import ImageCard from './ImageCard'
import { Work } from '@/sanity/hooks/getWork'

interface Props {
  images: Work[]
  filterValue?: string
  size?: 'sm' | 'lg'
}

const ImageGrid = ({ images, filterValue, size }: Props) => {
  const sm = size === 'sm'
  return (
    <div
      className={clsx(
        'grid grid-cols-1',
        sm
          ? 'gap-10 md:grid-cols-2 2xl:grid-cols-3'
          : 'gap-5 grid-cols-1 lg:grid-cols-3'
      )}
    >
      {filterValue
        ? images
            .filter((image) => image.category!.includes(filterValue))
            .map((filteredWork) => (
              <ImageCard
                size={size ?? 'sm'}
                key={filteredWork._id}
                work={filteredWork}
              />
            ))
        : images.map((images) => (
            <ImageCard
              size={size ?? 'lg'}
              key={images.slug}
              work={images}
              priority
            />
          ))}
    </div>
  )
}

export default ImageGrid
