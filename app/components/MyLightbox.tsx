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
          grid
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'
            : 'flex flex-col items-center gap-48'
        )}
      >
        {images.map((img, idx) => (
          <div key={img.url}>
            <button
              onClick={() => handleLightbox(idx)}
              className={clsx(
                grid &&
                  'relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]',
                'grid gap-5'
              )}
            >
              <Image
                key={img.url}
                src={img.url}
                alt={img.alt}
                fill={grid ? true : false}
                width={grid ? undefined : 425}
                height={grid ? undefined : 425}
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
