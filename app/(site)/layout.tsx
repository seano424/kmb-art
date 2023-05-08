import '../globals.css'
import clsx from 'clsx'
import { Metadata } from 'next'
import Nav from '../components/Nav'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

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

const devMode = process.env.DEVMODE

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          devMode && 'debug-screens',
          'max-w-8xl mx-auto scroll-smooth',
          montserrat.className
        )}
      >
        {/* @ts-expect-error Server Component */}
        <Nav />
        <main className='relative container top-20 xl:top-0'>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
