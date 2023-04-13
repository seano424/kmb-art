'use client'

import { useState } from 'react'
import { Art } from '@/types/Art'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

const filters = [
  { title: 'Paintings', value: 'paintings' },
  { title: 'Alcohol Inks', value: 'alcohol-inks' },
  { title: 'Charcoals', value: 'charcoals' },
  { title: 'All Works', value: '' },
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
          <button
            key={filter.title}
            className={clsx(
              filterValue === filter.value
                ? 'underline text-pink-600'
                : 'no-underline',
              'underline-offset-8 tracking-widest'
            )}
            onClick={() => setFilterValue(filter.value)}
          >
            {filter.title}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {works
          .filter((work) => work.category!.includes(filterValue))
          .map((filteredWork) => (
            <Link
              href={`/work/${filteredWork.slug}`}
              className='relative h-[600px] group'
              key={filteredWork._id}
            >
              <Image
                src={filteredWork.featureImage}
                alt={
                  filteredWork.featureImageAlt ??
                  `Feature Image for ${filteredWork.title}`
                }
                className='object-cover rounded'
                fill
              />
              <div className='group-hover:bg-opacity-10 group-hover:opacity-100 opacity-0 absolute inset-0 flex justify-center items-center bg-opacity-0 bg-white transition-all duration-100 ease-linear p-10'>
                <p className='uppercase text-3xl text-white'>
                  {filteredWork.title}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
