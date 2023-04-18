'use client'

import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import { urlFor } from '@/sanity/sanity-utils'

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

      <div
        className={clsx(
          grid
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'
            : 'flex flex-col items-center gap-10 sm:gap-20 xl:gap-48',
          'container'
        )}
      >
        {images.map((img, i) => (
          <button onClick={() => handleLightbox(i)} key={i}>
            <Image
              src={urlFor(img.image).width(600).url()}
              alt={img.alt ?? 'Artwork image by Karrie Marie Baxley'}
              width={600}
              height={600}
            />
            {img.alt && (
              <p className='text-zinc-500 text-left text-sm mt-5'>{img.alt}</p>
            )}
          </button>
        ))}
      </div>
    </>
  )
}

export default MyLightbox
