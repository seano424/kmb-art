'use client'

import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ButtonGroupProps } from 'react-multi-carousel/lib/types'
import urlFor from '@/sanity/urlFor'
import clsx from 'clsx'

interface PopularProjectsCarouselProps {
  popularPrints?: [
    {
      alt?: string
      _type: string
      image: {
        asset: {
          _type: string
          _ref: string
        }
      }
    }
  ]
}

export default function PopularProjectsCarousel({
  popularPrints,
}: PopularProjectsCarouselProps) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 3,
    },
  }

  return (
    <div className="relative py-10">
      <Carousel
        renderButtonGroupOutside={true}
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        rewindWithAnimation={true}
        customButtonGroup={<ButtonGroup />}
        slidesToSlide={3}
        arrows={false}
        className="relative"
      >
        {popularPrints?.map((print, i) => (
          <div
            key={i}
            className="flex flex-col gap-3"
          >
            <div
              key={print.image.asset._ref}
              className="relative h-[300px]"
            >
              <Image
                className="object-cover"
                src={urlFor(print.image).height(800).url()}
                alt={print.alt ? print.alt : 'Popular Print'}
                fill
              />
            </div>
            {print.alt && <p>{print.alt}</p>}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string
}

const ButtonGroup = ({
  next,
  previous,
  carouselState,
}: CarouselButtonGroupProps) => {
  const currentSlide = carouselState?.currentSlide
  const slidesToShow = carouselState?.slidesToShow
  const totalSlides = carouselState?.totalItems
  const disableNext = currentSlide! + slidesToShow! >= totalSlides!

  return (
    <div className="absolute inset-0 flex items-start justify-end gap-3">
      <button
        className={
          currentSlide === 0
            ? 'text-gray-300 cursor-default dark:text-gray-900'
            : 'text-gray-900 dark:text-gray-300'
        }
        onClick={() => previous && previous()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className={
          disableNext
            ? 'text-gray-300 dark:text-gray-900 cursor-default'
            : 'text-gray-900 dark:text-gray-300'
        }
        onClick={() => next && next()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  )
}
