'use client'

import { useState } from 'react'
import { Art } from '@/types/Art'
import clsx from 'clsx'
import ImageGrid from './ImageGrid'

const filters = [
  { title: 'Paintings', value: 'paintings' },
  { title: 'Alcohol Inks', value: 'alcohol-inks' },
  { title: 'Charcoals/Pastels', value: 'charcoals' },
  { title: 'All Works', value: '' },
]

interface Props {
  images: Art[]
}

export const Filter = ({ images }: Props) => {
  const [filterValue, setFilterValue] = useState('')

  return (
    <div className='grid gap-10 py-5'>
      <div className='flex justify-center lg:justify-end w-full'>
        <div className='flex gap-3 md:gap-10'>
          {filters.map((filter) => (
            <button
              key={filter.title}
              className={clsx(
                filterValue === filter.value
                  ? 'underline text-pink-600'
                  : 'no-underline',
                'underline-offset-8',
                'hover:underline focus:underline',
                'tracking-widest text-xs md:text-sm lg:text-base uppercase'
              )}
              onClick={() => setFilterValue(filter.value)}
            >
              {filter.title}
            </button>
          ))}
        </div>
      </div>
      <ImageGrid images={images} filterValue={filterValue} size='sm' />
    </div>
  )
}
