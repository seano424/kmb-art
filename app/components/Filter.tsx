'use client'

import { useState } from 'react'
import { Art } from '@/types/Art'
import clsx from 'clsx'
import ImageGrid from './ImageGrid'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

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
    <div className={clsx('grid gap-10 py-5', montserrat.className)}>
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
                'h3'
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
