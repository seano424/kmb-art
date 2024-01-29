'use client'

import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {NavItems} from '@/sanity/hooks/getNavItems'

function NavItemsDesktop(navItems: NavItems) {
  const pathname = usePathname()

  return (
    <ul className={clsx('hidden xl:flex justify-between items-center w-full')}>
      <li className="flex gap-5 w-1/3">
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
        className="text-4xl"
        href={'/'}
      >
        Karrie Marie Baxley
      </Link>

      <li className="flex gap-5 w-1/3 justify-end">
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
