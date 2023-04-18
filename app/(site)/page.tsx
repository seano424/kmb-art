import { getHomepageSeries } from '@/sanity/sanity-utils'
import ImageGrid from '../components/ImageGrid'

export const revalidate = 10

export default async function Home() {
  const images = await getHomepageSeries()

  return (
    <div className='mt-5 px-5'>{images && <ImageGrid images={images} />}</div>
  )
}
