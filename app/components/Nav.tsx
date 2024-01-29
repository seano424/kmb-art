import NavDestkop from './NavDestkop'
import NavMobile from './NavMobile'
import getNavItems from '@/sanity/hooks/getNavItems'

export default async function Nav() {
  const navItems = await getNavItems()

  return (
    <>
      <NavDestkop {...navItems} />
      <NavMobile {...navItems} />
    </>
  )
}
