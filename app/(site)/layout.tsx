import '../globals.css'
import clsx from 'clsx'
import Link from 'next/link'
import Nav from '../components/Nav'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { getNavItems } from '@/sanity/sanity-utils'

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
  const navItems = await getNavItems()

  console.log('Navigation Items: ', navItems)

  return (
    <html lang='en'>
      <body
        className={clsx(
          'max-w-8xl mx-auto scroll-smooth',
          montserrat.className
        )}
      >
        <header
          className={clsx(
            'py-10 h-40',
            'fixed left-0 right-0 top-0 z-20',
            'flex items-center bg-white'
          )}
        >
          <div className='container flex justify-between gap-2 items-center uppercase'>
            <Link className='text-3xl font-bold tracking-widest' href='/'>
              Karrie Marie
            </Link>
            <Nav navItems={navItems} />
          </div>
        </header>
        <main className='relative top-40 px-10'>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
