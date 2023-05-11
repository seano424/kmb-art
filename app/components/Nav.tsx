import NavDestkop from './NavDestkop'
import NavMobile from './NavMobile'
import { Montserrat } from 'next/font/google'
import getNavItems from '@/sanity/hooks/getNavItems'

const montserrat = Montserrat({ subsets: ['latin'] })

export default async function Nav() {
  const navItems = await getNavItems()

  return (
    <div className={montserrat.className}>
      <NavDestkop {...navItems} />
      <NavMobile {...navItems} />
    </div>
  )
}
