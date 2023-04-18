import { Art } from '@/types/Art'
import ImageCard from './ImageCard'

interface Props {
  images: Art[]
  filterValue?: string
}

const ImageGrid = ({ images, filterValue }: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
      {filterValue
        ? images
            .filter((image) => image.category!.includes(filterValue))
            .map((filteredWork) => (
              <ImageCard key={filteredWork._id} work={filteredWork} />
            ))
        : images.map((images) => (
            <ImageCard key={images.slug} work={images} priority />
          ))}
    </div>
  )
}

export default ImageGrid
