import { getCarouselImages } from '../lib/api'
import Link from 'next/link'
import Carousel from '@/components/Carousel'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import Meta from '@/components/meta'

export default function Index({ images }) {
  let homepageImages = []
  images.map(
    (i) => (
      homepageImages.push({
        image: i.mainImage,
        caption: i.mainImage?.caption,
      }),
      homepageImages.push({
        image: i.secondImage,
        caption: i.secondImage?.caption,
      }),
      homepageImages.push({
        image: i.thirdImage,
        caption: i.thirdImage?.caption,
      }),
      homepageImages.push({
        image: i.fourthImage,
        caption: i.fourthImage?.caption,
      }),
      homepageImages.push({
        image: i.fifthImage,
        caption: i.fifthImage?.caption,
      })
    )
  )
  return (
    <>
      <Meta />
      <div className="absolute flex justify-center items-center w-screen md:grid md:grid-cols-2 h-screen z-50 text-white">
        <div className="flex flex-col col-start-2">
          <h1 className="leading-tight mb-10 text-[5.5rem] uppercase font-bold">
            Karrie Marie Baxley
          </h1>
          <div className="ml-2 flex space-x-4 items-center">
            <Link href="/paintings">
              <a className="text-2xl hover:bg-gray-50 bg-gray-100 filter hover:drop-shadow-2xl hover:brightness-125 transition-all duration-300 text-gray-900 px-10 py-3 uppercase">
                Enter site
              </a>
            </Link>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100009833221050"
            >
              <FaFacebookF className="text-3xl" />
            </a>
            <a target="_blank" href="https://www.instagram.com/kmariebaxley/">
              <FiInstagram className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
      <Carousel images={homepageImages} />
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const images = await getCarouselImages(preview)
  return {
    props: { preview, images },
    revalidate: 1,
  }
}

