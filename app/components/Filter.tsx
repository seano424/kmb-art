'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { Work } from '@/sanity/hooks/getWork'
import urlFor from '@/sanity/urlFor'
import Image from 'next/image'
import { motion, LayoutGroup } from 'framer-motion'
import Link from 'next/link'

const filters = [
  { title: 'Book', value: 'book' },
  { title: 'Paintings', value: 'paintings' },
  { title: 'Alcohol Inks', value: 'alcohol-inks' },
  { title: 'Charcoals/Pastels', value: 'charcoals' },
  { title: 'All Works', value: '' },
]

interface Props {
  images: Work[]
}

export const Filter = ({ images }: Props) => {
  const [filterValue, setFilterValue] = useState('')

  return (
    <div className="grid gap-10 py-5">
      <div className="flex justify-center lg:justify-end w-full rounded-2xl">
        <div className="flex gap-3 md:gap-10">
          {/* {filters.map((filter) => (
            <div
              className={clsx(filter.title === 'All Works' && 'text-blue-600')}
            ></div>
          ))} */}

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
                  'md:text-lg text-xs hover:text-blue-600'
                )}
                onClick={() => setFilterValue(filter.value)}
              >
                {filter.title}
                {filterValue === filter.value && (
                  <motion.span
                    layoutId="underline"
                    className="absolute top-full left-0 w-full h-1 rounded-2xl bg-blue-600"
                  ></motion.span>
                )}
              </motion.button>
            ))}
          </LayoutGroup>
        </div>
      </div>
      <div
        className={clsx(
          'grid gap-10 mb-10',
          filterValue === '' ? 'grid-cols-4' : 'grid-cols-1'
        )}
      >
        {images
          .filter((image) => image.category!.includes(filterValue))
          .map((filteredWork) => (
            <Link
              href={`/work/${filteredWork.slug}`}
              className="flex flex-col gap-4"
              key={filteredWork._id}
            >
              <div className="relative w-full h-[500px]">
                <Image
                  src={urlFor(filteredWork.featureImage).height(800).url()}
                  alt={filteredWork.title}
                  className={clsx(
                    filterValue === '' ? 'object-cover' : 'object-contain',
                    'transition-all duration-700 ease-in-out transform hover:scale-95'
                  )}
                  priority
                  fill
                />
              </div>
              <p className="text-center">{filteredWork.title}</p>
            </Link>
          ))}
      </div>
    </div>
  )
}
