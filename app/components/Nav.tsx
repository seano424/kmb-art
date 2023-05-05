import { getNavItems } from '@/sanity/sanity-utils'
import NavDestkop from './NavDestkop'
import NavMobile from './NavMobile'

export default async function Nav() {
  const navItems = await getNavItems()

  return (
    <>
      <NavDestkop {...navItems} />
      <NavMobile {...navItems} />
    </>
  )
}
