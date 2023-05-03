import '../globals.css'
import clsx from 'clsx'
import Link from 'next/link'
import Nav from '../components/Nav'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { getNavItems } from '@/sanity/sanity-utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.karriemariebaxley.com'),
  title: 'Karrie Marie Baxley, artist, painter',
  description:
    'Karrie Marie Baxley is an an artist based in Kansas City. She works in such mediums as paintings, charcoals, and inks.',
  twitter: {
    title: 'Karrie Marie Baxley, artist, painter',
    description:
      'Karrie Marie Baxley is an an artist based in Kansas City. She works in such mediums as paintings, charcoals, and inks.',
    site: 'www.karriemariebaxley.com',
  },
  openGraph: {
    images: '/og-image.png',
    siteName: 'Karrie Marie Baxley, Kansas City artist website',
    description:
      'Karrie Marie Baxley is an an artist based in Kansas City. She works in such mediums as paintings, charcoals, and inks.',
    locale: 'en-US',
    type: 'website',
    url: 'www.karriemariebaxley.com',
  },
  colorScheme: 'light',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Karrie Marie Baxley', 'Kansas City Artist and Painter'],
  robots: {
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
    },
  },
  creator: `Sean O'Reilly`,
  icons: '/favicon.ico',
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navItems = await getNavItems()

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
