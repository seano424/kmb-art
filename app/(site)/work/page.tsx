import { Filter } from '@/app/components/Filter'
import getWorks from '@/sanity/hooks/getWorks'

export default async function Works() {
  const images = await getWorks()

  return <Filter images={images} />
}
