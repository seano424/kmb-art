import { getHomepageSeries } from '@/sanity/sanity-utils'
import ImageGrid from '../components/ImageGrid'

export const revalidate = 10

export default async function Home() {
  const images = await getHomepageSeries()

  return (
    <div className='py-10 md:py-5 lg:py-0'>
      {images && <ImageGrid images={images} />}
    </div>
  )
}
