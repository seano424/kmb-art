import { Art } from '@/types/Art'
import ImageCard from './ImageCard'

interface Props {
  images: Art[]
  filterValue?: string
  size?: 'sm' | 'lg'
}

const ImageGrid = ({ images, filterValue, size }: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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
