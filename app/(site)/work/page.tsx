import { getWorks } from '@/sanity/sanity-utils'

export default async function Works() {
  const works = await getWorks()

  console.log('works: ', works);
  
  return (
    <div>
      <p>hello I am the works page!</p>
    </div>
  )
}
