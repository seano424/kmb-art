'use client'
import clsx from 'clsx'
import { NavItems } from '@/types/NavItems'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavItemsDesktop(navItems: NavItems) {
  const pathname = usePathname()
  return (
    <div
      className={clsx(
        'h2',
        'hidden xl:flex xl:flex-row',
        'items-center justify-end lg:justify-center',
        'xl:border-b-4 border-zinc-800',
        'lg:pl-20'
      )}
    >
      <Link
        href='/'
        className={clsx(
          ' hover:bg-pink-100 focus:bg-pink-100 transition-all duration-150 ease-linear underline-offset-8 px-5',
          pathname === `/`
            ? 'text-pink-600 bg-pink-200 hover:bg-pink-100 focus:bg-pink-100 hover:text-pink-600 focus:text-pink-600'
            : 'text-zinc-800 hover:text-black focus:text-black'
        )}
      >
        Home
      </Link>
      {navItems.navigationLinks &&
        navItems.navigationLinks
          .filter((item) => item.slug)
          .map((navItem, i) => (
            <Link
              key={i}
              href={`/${navItem.slug}`}
              className={clsx(
                'hover:bg-pink-100 focus:bg-pink-100 transition-all duration-150 ease-linear underline-offset-8 px-5',
                pathname === `/${navItem.slug?.toLowerCase()}`
                  ? 'text-pink-600 bg-pink-200 hover:bg-pink-100 focus:bg-pink-100 hover:text-pink-600 focus:text-pink-600'
                  : 'text-zinc-800 hover:text-black focus:text-black'
              )}
            >
              {navItem.title}
            </Link>
          ))}
    </div>
  )
}

export default NavItemsDesktop
