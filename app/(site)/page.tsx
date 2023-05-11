import { gethomepageImages } from '@/sanity/sanity-utils'
import ImageGrid from '../components/ImageGrid'

export const revalidate = 604800

export default async function Home() {
  const images = await gethomepageImages()
  console.log('this is a test');
  
  return (
    <div className='py-10 md:py-5'>
      {images && <ImageGrid images={images} size='lg' />}
    </div>
  )
}
