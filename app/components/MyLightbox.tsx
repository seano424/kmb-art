'use client'

import { Art } from '@/types/Art'
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
}

const MyLightbox = ({ images }: Props) => {
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

      <div className='flex flex-col items-center gap-48'>
        {images.map((img, idx) => (
          <button
            onClick={() => handleLightbox(idx)}
            key={img.url}
            className='grid gap-5'
          >
            <Image
              key={img.url}
              src={img.url}
              alt={img.alt}
              width={425}
              height={425}
              className='shadow'
            />

            {img.alt && <p className='text-zinc-500 text-sm mt-5'>{img.alt}</p>}
          </button>
        ))}
      </div>
    </>
  )
}

export default MyLightbox
