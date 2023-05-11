import getHomepageImages from '@/sanity/hooks/getHomepageImages'
import ImageGrid from '../components/ImageGrid'

export default async function Home() {
  const images = await getHomepageImages()

  return (
    <div className='py-10 md:py-5'>
      {images && <ImageGrid images={images} size='lg' />}
    </div>
  )
}
