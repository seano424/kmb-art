'use client'

import { useState } from 'react'
import { Art } from '@/types/Art'
import clsx from 'clsx'
import ImageGrid from './ImageGrid'
import { Montserrat } from 'next/font/google'
import { motion, LayoutGroup } from 'framer-motion'

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
      <div className='flex justify-center lg:justify-end w-full rounded-2xl'>
        <div className='flex gap-3 md:gap-10'>
          <LayoutGroup>
            {filters.map((filter) => (
              <motion.button
                layout
                key={filter.title}
                className={clsx(
                  filterValue === filter.value
                    ? ' text-blue-600'
                    : 'no-underline text-gray-900',
                  'relative transition-all duration-300 ease-linear',
                  'md:h3 text-xs hover:text-blue-600'
                )}
                onClick={() => setFilterValue(filter.value)}
              >
                {filter.title}
                {filterValue === filter.value && (
                  <motion.span
                    layoutId='underline'
                    className='absolute top-full left-0 w-full h-1 rounded-2xl bg-blue-600'
                  ></motion.span>
                )}
              </motion.button>
            ))}
          </LayoutGroup>
        </div>
      </div>
      <ImageGrid images={images} filterValue={filterValue} size='sm' />
    </div>
  )
}
