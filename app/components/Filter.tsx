'use client'

import { Art } from '@/types/Art'
import { useState } from 'react'

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

      <div className='border-8 grid grid-cols-3 gap-5'>
        {works
          .filter((work) => work.category!.includes(filterValue))
          .map((filteredWork) => (
            <div
              className='border-8 h-[400px] border-blue-50'
              key={filteredWork._id}
            >
              {filteredWork.category}
            </div>
          ))}
      </div>
    </div>
  )
}
