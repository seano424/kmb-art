import Image from 'next/image'
import urlFor from '@/sanity/urlFor'
import {PortableText} from '@portabletext/react'
import MyLightbox from '@/app/components/MyLightbox'
import getEvents from '@/sanity/hooks/getEvents'

export default async function Events() {
  const allEvents = await getEvents()

  return (
    <>
      {allEvents.map((event) => (
        <div
          key={event._id}
          className="flex flex-col gap-10 py-5"
        >
          <div className="flex flex-col gap-10 items-center">
            {event?.image && (
              <div className="relative h-[300px] w-full">
                <Image
                  src={urlFor(event.image).url()}
                  alt={event.image.alt ?? 'featured image'}
                  className="object-cover"
                  fill
                />
              </div>
            )}

            <h2 className="text-4xl font-light text-center">{event.title}</h2>

            {event?.content && (
              <div className="text-lg text-center text-gray-700 dark:text-gray-300 w-full">
                <PortableText value={event.content} />
              </div>
            )}
          </div>

          {event?.images && (
            <MyLightbox
              grid
              images={event.images}
            />
          )}
        </div>
      ))}
    </>
  )
}
