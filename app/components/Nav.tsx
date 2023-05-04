import clsx from 'clsx'
import { getNavItems } from '@/sanity/sanity-utils'
import NavItemsDesktop from './NavItemsDesktop'
import NavLogo from './NavLogo'
import NavItemsMobile from './NavItemsMobile'

export default async function Nav() {
  const navItems = await getNavItems()

  return (
    <nav
      className={clsx(
        'sticky left-0 right-0 top-0 py-5 z-20',
        'bg-white uppercase flex items-center'
      )}
    >
      <div className='px-10 w-full flex items-center justify-between gap-2'>
        <NavLogo {...navItems} />
        <NavItemsDesktop {...navItems} />
        <NavItemsMobile />
      </div>
    </nav>
  )
}
