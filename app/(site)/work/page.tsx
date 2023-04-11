import { Filter } from '@/app/components/Filter'
import { getWorks } from '@/sanity/sanity-utils'

export default async function Works() {
  const works = await getWorks()

  return (
    <div className='container'>
      <Filter works={works} />
    </div>
  )
}
