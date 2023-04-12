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
    <div className="flex items-center justify-center gap-10">
      <Link
        href="/work"
        className={clsx(
          'hover:underline hover:text-black transition-all duration-150 ease-linear underline-offset-8',
          pathname.includes('/work') ? 'text-black' : 'text-gray-700 font-light'
        )}
      >
        Work
      </Link>
      {pages.map((page) => (
        <Link
          key={page._id}
          href={`/${page.slug}`}
          className={clsx(
            'hover:underline hover:text-black transition-all duration-150 ease-linear underline-offset-8',
            pathname === `/${page.slug.toLowerCase()}`
              ? 'text-black'
              : 'text-gray-700 font-light'
          )}
        >
          {page.title}
        </Link>
      ))}
    </div>
  )
}

export default Navigation
