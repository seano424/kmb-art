import '../globals.css'
import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'
import { Montserrat, Poppins } from 'next/font/google'
import clsx from 'clsx'

const montserrat = Montserrat({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

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
      <body className={clsx('max-w-8xl mx-auto py-10', montserrat.className)}>
        <header className='flex flex-col gap-5 items-center uppercase'>
          <Link className='text-2xl font-bold' href='/'>
            Karrie Marie
          </Link>
          <div className='flex items-center justify-center gap-10'>
            <Link
              href='/work'
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
        <main className='py-10'>{children}</main>
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
