import { getHomepageSeries } from '@/sanity/sanity-utils'
import ImageCard from '../components/ImageCard'

export const revalidate = 10

export default async function Home() {
  const homepageSeries = await getHomepageSeries()

  return (
    <div className='mt-5 grid lg:grid-cols-3 gap-5 px-5'>
      {homepageSeries &&
        homepageSeries.map((series) => (
          <ImageCard key={series.slug} work={series} />
        ))}
    </div>
  )
}
