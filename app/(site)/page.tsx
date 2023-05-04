import { gethomepageImages } from '@/sanity/sanity-utils'
import ImageGrid from '../components/ImageGrid'

export const revalidate = 604800

export default async function Home() {
  const images = await gethomepageImages()

  return (
    <div className='py-10'>
      {images && <ImageGrid images={images} size="lg" />}
    </div>
  )
}
