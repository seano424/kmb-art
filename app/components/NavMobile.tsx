'use client'
import React from 'react'
import clsx from 'clsx'
import NavLogo from './NavLogo'
import { NavItems } from '@/sanity/hooks/getNavItems'
import NavMobileButton from './NavMobileButton'
import NavMobileMenu from './NavMobileMenu'

export default function NavMobile(navItems: NavItems) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <header>
      <nav
        className={clsx(
          'xl:hidden fixed left-0 right-0 top-0 py-5 z-20 container',
          'bg-white uppercase flex items-center'
        )}
      >
        <div className='w-full flex items-center justify-between gap-2'>
          <NavLogo {...navItems} />
          <NavMobileButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
      <NavMobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navItems={navItems}
      />
    </header>
  )
}
