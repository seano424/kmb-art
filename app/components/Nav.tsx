'use client'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

interface Props {
  navItems: {
    _id: string
    slug: string
    title: string
  }[]
}

const Navigation = ({ navItems }: Props) => {
  const pathname = usePathname()

  return (
    <div className='flex flex-col md:flex-row items-center justify-center text-xs md:text-base gap-2 lg:gap-5 font-bold tracking-widest md:border-b-4 border-zinc-800 md:pb-2 lg:pl-20'>
      <Link
        href='/work'
        className={clsx(
          'hover:text-pink-600 hover:bg-pink-50 focus:text-pink-600 focus:bg-pink-50 transition-all duration-150 ease-linear underline-offset-8 px-5',
          pathname === '/work'
            ? 'text-pink-600 bg-pink-50 hover:bg-pink-100 focus:bg-pink-100'
            : 'text-zinc-800'
        )}
      >
        Work
      </Link>
      {navItems.map((navItem, i) => (
        <Link
          key={i}
          href={`/${navItem?.slug}`}
          className={clsx(
            'hover:text-pink-600 hover:bg-pink-50 focus:text-pink-600 focus:bg-pink-50 transition-all duration-150 ease-linear underline-offset-8 px-5',
            pathname === `/${navItem?.slug.toLowerCase()}`
              ? 'text-pink-600 bg-pink-50 hover:bg-pink-100 focus:bg-pink-100'
              : 'text-zinc-800'
          )}
        >
          {navItem?.title}
        </Link>
      ))}
    </div>
  )
}

export default Navigation
