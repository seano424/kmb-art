import NavDestkop from './NavDestkop'
import NavMobile from './NavMobile'
import {Playfair_Display} from 'next/font/google'
import getNavItems from '@/sanity/hooks/getNavItems'

const playfair = Playfair_Display({subsets: ['latin']})

export default async function Nav() {
  const navItems = await getNavItems()

  return (
    <div className={playfair.className}>
      <NavDestkop {...navItems} />
      <NavMobile {...navItems} />
    </div>
  )
}
