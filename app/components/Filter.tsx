'use client'

import { Art } from '@/types/Art'
import { useState } from 'react'
import Image from 'next/image'

const filters = [
  { title: 'All Works', value: '' },
  { title: 'Paintings', value: 'paintings' },
  { title: 'Alcohol Inks', value: 'alcohol-inks' },
  { title: 'Charcoals', value: 'charcoals' },
]

interface Props {
  works: Art[]
}

export const Filter = ({ works }: Props) => {
  const [filterValue, setFilterValue] = useState('')

  return (
    <div className='grid gap-10'>
      <div className='flex justify-end gap-10'>
        {filters.map((filter) => (
          <button onClick={() => setFilterValue(filter.value)}>
            {filter.title}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-3 gap-5'>
        {works
          .filter((work) => work.category!.includes(filterValue))
          .map((filteredWork) => (
            <div className='relative h-[500px]' key={filteredWork._id}>
              <Image
                src={filteredWork.featureImage}
                alt={
                  filteredWork.featureImageAlt ??
                  `Feature Image for ${filteredWork.title}`
                }
                className='rounded object-cover'
                fill
              />
            </div>
          ))}
      </div>
    </div>
  )
}
