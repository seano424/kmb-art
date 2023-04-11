'use client'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

interface Props {
  pages: {
    _id: string
    slug: string
    title: string
  }[]
}

const Navigation = ({ pages }: Props) => {
  const pathname = usePathname()

  return (
    <div className='flex items-center justify-center gap-10'>
      <Link
        href='/work'
        className={clsx(
          'hover:underline hover:text-gray-900 transition-all duration-150 ease-linear underline-offset-8',
          pathname.includes('/work') ? 'text-gray-900' : 'text-gray-400'
        )}
      >
        Work
      </Link>
      {pages.map((page) => (
        <Link
          key={page._id}
          href={`/${page.slug}`}
          className={clsx(
            'hover:underline hover:text-gray-900 transition-all duration-150 ease-linear underline-offset-8',
            pathname === `/${page.title.toLowerCase()}`
              ? 'text-gray-900'
              : 'text-gray-400'
          )}
        >
          {page.title}
        </Link>
      ))}
    </div>
  )
}

export default Navigation
