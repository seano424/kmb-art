import '../globals.css'
import clsx from 'clsx'
import { Metadata } from 'next'
import Nav from '../components/Nav'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Main from '../components/Main'

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

const playfair = Playfair_Display({ subsets: ['latin'] })

const devMode = process.env.NEXT_PUBLIC_SANITY_DB === 'development'

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
          playfair.className
        )}
      >
        {/* @ts-expect-error Server Component */}
        <Nav />
        <Main>{children}</Main>
        <Analytics />
      </body>
    </html>
  )
}
