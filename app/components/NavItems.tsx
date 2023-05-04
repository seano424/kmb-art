'use client'
import clsx from 'clsx'
import { NavItems } from '@/types/NavItems'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavItems(navItems: NavItems) {
  const pathname = usePathname()
  return (
    <div
      className={clsx(
        'gap-1 lg:gap-5',
        'flex flex-col md:flex-row items-center justify-center',
        'font-bold tracking-widest text-xs md:text-sm lg:text-base',
        'md:border-b-4 border-zinc-800',
        'md:pb-2 lg:pl-20'
      )}
    >
      {navItems.navigationLinks &&
        navItems.navigationLinks.map((navItem, i) => (
          <Link
            key={i}
            href={`/${navItem.slug}`}
            className={clsx(
              'hover:text-pink-600 hover:bg-pink-50 focus:text-pink-600 focus:bg-pink-50 transition-all duration-150 ease-linear underline-offset-8 px-5',
              pathname === `/${navItem.slug?.toLowerCase()}`
                ? 'text-pink-600 bg-pink-50 hover:bg-pink-100 focus:bg-pink-100'
                : 'text-zinc-800'
            )}
          >
            {navItem.title}
          </Link>
        ))}
    </div>
  )
}

export default NavItems
