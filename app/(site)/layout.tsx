import '../globals.css'
import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'
import { Roboto } from 'next/font/google'
import clsx from 'clsx'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

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
        <header className='flex items-center justify-between'>
          <Link
            href='/'
            className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold'
          >
            Work
          </Link>
          <div className='flex items-center gap-5 text-sm text-gray-600'>
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className='hover:underline'
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
