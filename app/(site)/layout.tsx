import '../globals.css'
import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'
import { Roboto, Playfair_Display } from 'next/font/google'
import clsx from 'clsx'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Karrie Marie Baxley, artist, painter',
  description: 'Collection of artwork by Karrie Marie Baxley',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages()

  return (
    <html lang='en'>
      <body className={clsx('max-w-6xl mx-auto py-10', roboto.className)}>
        <header className='flex flex-col items-center gap-5'>
          <Link href='/'>
            <h1
              className={clsx(
                'text-8xl font-bold text-[#211F20]',
                playfair.className
              )}
            >
              {' '}
              <span className='bg-gradient-to-r from-cyan-400 via-sky-600 to-purple-800 bg-clip-text text-transparent'>
                {' '}
                Karrie Marie
              </span>
            </h1>
          </Link>
          <div className='flex items-center justify-center text-[#211F20] gap-10 text-xl'>
            <Link
              href='/'
              className='hover:underline transition-all duration-300 ease-linear underline-offset-8'
            >
              Work
            </Link>
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className='hover:underline transition-all duration-300 ease-linear underline-offset-8'
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className='py-20'>{children}</main>
      </body>
    </html>
  )
}

{
  /* <h1 className='text-7xl font-extrabold text-gray-700'>
        Hello I&apos;m
        <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
          {' '}
          Karrie Marie!
        </span>
      </h1> */
}
