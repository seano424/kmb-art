import { getHomepageSeries } from '@/sanity/sanity-utils'
import WorkCard from '../components/WorkCard'

export default async function Home() {
  const homepageSeries = await getHomepageSeries()

  return (
    <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5'>
      {homepageSeries &&
        homepageSeries.map((series) => (
          <WorkCard key={series.slug} work={series} />
        ))}
    </div>
  )
}
