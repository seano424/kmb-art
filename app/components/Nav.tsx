import { getNavItems } from '@/sanity/sanity-utils'
import NavDestkop from './NavDestkop'
import NavMobile from './NavMobile'
import { Montserrat } from 'next/font/google'

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
