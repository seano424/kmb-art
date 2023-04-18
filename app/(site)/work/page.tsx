import { Filter } from '@/app/components/Filter'
import { getWorks } from '@/sanity/sanity-utils'

export const revalidate = 10

export default async function Works() {
  const images = await getWorks()

  return <Filter images={images} />
}
