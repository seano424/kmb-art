import { Filter } from '@/app/components/Filter'
import { getWorks } from '@/sanity/sanity-utils'

export default async function Works() {
  const works = await getWorks()
  console.log('works: ', works);
  

  return (
    <div className='container'>
      <Filter works={works} />
    </div>
  )
}
