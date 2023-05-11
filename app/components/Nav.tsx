import NavDestkop from './NavDestkop'
import NavMobile from './NavMobile'
import { Montserrat } from 'next/font/google'
import { fetchNavItems } from '@/sanity/sanity-utils'

const montserrat = Montserrat({ subsets: ['latin'] })

export default async function Nav() {
  const navItems = await fetchNavItems()

  return (
    <div className={montserrat.className}>
      <NavDestkop {...navItems.result} />
      <NavMobile {...navItems.result} />
    </div>
  )
}
