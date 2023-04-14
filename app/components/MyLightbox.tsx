'use client'

import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'

import 'yet-another-react-lightbox/styles.css'

interface Props {
  images: {
    alt: string
    url: string
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
          title: img.alt,
          width: 1800,
          height: 700,
        }))}
      />

      <div
        className={clsx(
          grid ? 'grid grid-cols-2 gap-10' : 'flex flex-col items-center gap-48'
        )}
      >
        {images.map((img, idx) => (
          <div>
            <button
              onClick={() => handleLightbox(idx)}
              key={img.url}
              className={clsx(grid && 'h-[400px]', 'grid gap-5')}
            >
              <Image
                key={img.url}
                src={img.url}
                alt={img.alt}
                width={425}
                height={425}
                className={clsx(
                  grid
                    ? 'object-cover border-8 border-gray-100/80 h-full w-full'
                    : 'shadow'
                )}
              />
            </button>
            {img.alt && <p className='text-zinc-500 text-sm mt-5'>{img.alt}</p>}
          </div>
        ))}
      </div>
    </>
  )
}

export default MyLightbox
