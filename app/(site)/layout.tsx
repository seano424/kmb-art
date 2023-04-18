import '../globals.css'
import clsx from 'clsx'
import Link from 'next/link'
import Nav from '../components/Nav'
import { Montserrat } from 'next/font/google'
import { getPages } from '@/sanity/sanity-utils'

const montserrat = Montserrat({ subsets: ['latin'] })

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
      <body
        className={clsx(
          'max-w-8xl mx-auto py-20 scroll-smooth',
          montserrat.className
        )}
      >
        <header className='fixed left-0 right-0 top-0 h-32 flex items-center z-20 bg-white'>
          <div className='container flex justify-between gap-2 items-center uppercase'>
            <Link className='text-3xl font-bold tracking-widest' href='/'>
              Karrie Marie
            </Link>
            <Nav pages={pages} />
          </div>
        </header>
        <main className='relative top-24 pb-20'>{children}</main>
      </body>
    </html>
  )
}
