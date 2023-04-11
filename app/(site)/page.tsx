import { getHomepageSeries } from '@/sanity/sanity-utils'
import { ImagesGrid } from '../components/ImagesGrid'

export default async function Home() {
  const work = await getHomepageSeries()

  return (
    <div className='px-5'>
      <ImagesGrid work={work} />
    </div>
  )
}
