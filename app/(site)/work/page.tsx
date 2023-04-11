import { Filter } from '@/app/components/Filter'
import { getWorks } from '@/sanity/sanity-utils'

const filters = [
  { title: 'All Works', value: '' },
  { title: 'Paintings', value: 'paintings' },
  { title: 'Alcohol Inks', value: 'alcohol-inks' },
  { title: 'Charcoals', value: 'charcoals' },
]

export default async function Works() {
  const works = await getWorks()

  console.log('works: ', works)

  return (
    <div className='container'>
      <Filter works={works} />
    </div>
  )
}
