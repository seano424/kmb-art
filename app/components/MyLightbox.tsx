'use client'

import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import urlFor from '@/sanity/urlFor'

import 'yet-another-react-lightbox/styles.css'

interface Props {
  images: {
    alt?: string
    url: string
    image: {}
  }[]
  grid?: boolean
}

const MyLightbox = ({ images, grid = false }: Props) => {
  const [open, setOpen] = React.useState(false)
  const [idx, setIdx] = React.useState(0)

  const handleLightbox = async (i: number) => {
    await setIdx(i)
    setOpen(true)
  }

  return (
    <>
      <Lightbox
        open={open}
        index={idx}
        plugins={[Captions]}
        close={() => setOpen(false)}
        slides={images.map((img) => ({
          src: img.url,
          title: img.alt ?? 'Artwork image by Karrie Marie Baxley',
          width: 1800,
          height: 700,
        }))}
      />

      <div className="grid grid-cols-3 gap-x-5 gap-y-10">
        {images.map((img, i) => (
          <button
            className="flex flex-col gap-3"
            onClick={() => handleLightbox(i)}
            key={i}
          >
            <div className="relative w-full h-[400px] z-40 bg-gray-100 group hover:bg-gray-200 transition-all duration-1000 ease-in-out">
              <Image
                className="object-cover py-4 px-8 group-hover:scale-95 transform transition-all duration-1000 ease-in-out"
                src={urlFor(img.image).width(600).url()}
                alt={img.alt ?? 'Artwork image by Karrie Marie Baxley'}
                fill
              />
            </div>
            {img.alt && <p>{img.alt}</p>}
          </button>
        ))}
      </div>
    </>
  )
}

export default MyLightbox
