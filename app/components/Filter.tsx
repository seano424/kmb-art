'use client'

import { useState } from 'react'
import { Work } from '@/sanity/hooks/getWork'
import FilterButtons from './FilterButtons'
import FilterImageGrid from './FilterImageGrid'

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

  const filteredImages = images.filter((image) => {
    if (filterValue === '') return true
    return image.category && image.category.includes(filterValue)
  })

  return (
    <div className="grid gap-10 py-5">
      <FilterButtons
        filters={filters}
        activeFilter={filterValue}
        onFilterChange={setFilterValue}
      />
      <FilterImageGrid
        images={filteredImages}
        filterValue={filterValue}
      />
    </div>
  )
}
