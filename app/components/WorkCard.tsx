import Link from 'next/link'
import Image from 'next/image'
import { Art } from '@/types/Art'
import clsx from 'clsx'

interface Props {
  work: Art
  size?: 'small' | 'large'
}

const WorkCard = ({ work, size = 'large' }: Props) => {
  const isLarge = size === 'large'

  return (
    <Link
      href={`/work/${work.slug}`}
      key={work.featureImage}
      className={clsx(
        'group relative rounded-lg p-1',
        isLarge ? 'h-[650px]' : 'h-[550px]'
      )}
    >
      {work.featureImage && (
        <Image
          src={work.featureImage}
          alt={
            work.featureImageAlt ?? `Feature image for ${work.featureImageAlt}`
          }
          className='object-cover rounded transition'
          fill
        />
      )}
      <div className='group-hover:bg-opacity-10 group-hover:opacity-100 opacity-0 absolute inset-0 flex justify-center items-center bg-opacity-0 bg-white transition-all duration-100 ease-linear p-10'>
        <p className='uppercase text-3xl text-white'>{work.title}</p>
      </div>
    </Link>
  )
}

export default WorkCard
