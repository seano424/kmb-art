import '../globals.css'
import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'
import { Montserrat } from 'next/font/google'
import clsx from 'clsx'
import Navigation from '../components/Navigation'

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
      <body className={clsx('max-w-8xl mx-auto py-20', montserrat.className)}>
        <header className='fixed left-0 right-0 top-0 h-40 flex items-center'>
          <div className='container flex justify-between gap-2 items-center uppercase'>
            <Link className='text-3xl font-bold tracking-widest' href='/'>
              Karrie Marie
            </Link>
            <Navigation pages={pages} />
          </div>
        </header>
        <main className='py-10 relative top-20'>{children}</main>
      </body>
    </html>
  )
}
