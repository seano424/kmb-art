import clsx from 'clsx'
import NavItemsDesktop from './NavItemsDesktop'
import {NavItems} from '@/sanity/hooks/getNavItems'

export default function NavDestkop(navItems: NavItems) {
  return (
    <nav
      className={clsx(
        'hidden xl:block left-0 right-0 top-0 py-5 z-20',
        'bg-white flex items-center'
      )}
    >
      <div
        className={clsx(
          !navItems.logoImg && 'py-10',
          'w-full flex items-center justify-between gap-2'
        )}
      >
        <NavItemsDesktop {...navItems} />
      </div>
    </nav>
  )
}
