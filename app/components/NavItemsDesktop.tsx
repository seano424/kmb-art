'use client'

import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {NavItems} from '@/sanity/hooks/getNavItems'
import {Playfair_Display, Inter} from 'next/font/google'

const playfairDisplay = Playfair_Display({subsets: ['latin']})
const inter = Inter({subsets: ['latin']})

function NavItemsDesktop(navItems: NavItems) {
  const pathname = usePathname()

  return (
    <ul className={clsx('hidden xl:flex justify-between items-center w-full')}>
      <li className={clsx('flex gap-5 w-1/3 font-light', inter.className)}>
        {navItems.navigationLinks &&
          navItems.navigationLinks
            .filter((item) => item.title)
            .slice(0, 3)
            .map((navItem, i) => (
              <Link
                key={i}
                href={navItem.slug ? `/${navItem.slug}` : '/'}
                className={clsx(
                  '',
                  pathname ===
                    `/${navItem.slug ? navItem.slug.toLowerCase() : ''}`
                    ? ''
                    : ''
                )}
              >
                {navItem.title}
              </Link>
            ))}
      </li>

      <Link
        className={clsx('text-4xl', playfairDisplay.className)}
        href={'/'}
      >
        Karrie Marie Baxley
      </Link>

      <li className={clsx('flex gap-5 w-1/3 font-light justify-end', inter.className)}>
        <Link href="/events">Events</Link>
        {navItems.navigationLinks &&
          navItems.navigationLinks
            .filter((item) => item.title)
            .slice(3, navItems.navigationLinks.length + 1)
            .map((navItem, i) => (
              <Link
                key={i}
                href={navItem.slug ? `/${navItem.slug}` : '/'}
                className={clsx(
                  '',
                  pathname ===
                    `/${navItem.slug ? navItem.slug.toLowerCase() : ''}`
                    ? ''
                    : ''
                )}
              >
                {navItem.title}
              </Link>
            ))}
      </li>
    </ul>
  )
}

export default NavItemsDesktop
