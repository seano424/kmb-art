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

      <div className='grid'>
        {images.map((img, idx) => (
          <div
            key={img.url}
            className='h-[800px] flex flex-col items-center justify-center'
          >
            <div className='relative h-[500px] w-full'>
              <Image
                key={img.url}
                src={img.url}
                alt={img.alt}
                fill
                className='object-contain cursor-pointer'
                onClick={() => handleLightbox(idx)}
              />
            </div>
            {img.alt && <p className='text-zinc-500 text-sm mt-5'>{img.alt}</p>}
          </div>
        ))}
      </div>
    </>
  )
}

export default MyLightbox
