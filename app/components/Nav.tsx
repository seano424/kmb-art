import NavDestkop from './NavDestkop'
import NavMobile from './NavMobile'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default async function Nav() {
  const test = await fetch(
    "https://zlrcnyjm.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22navigation%22%5D%5B0%5D%7B%0A%20%20%20%20%20%20logoTitle%2C%0A%20%20%20%20%20%20logoImg%2C%0A%20%20%20%20%20%20navigationLinks%5B%5D%20%7B%0A%20%20%20%20%20%20%20%20_type%20%3D%3D%20'reference'%20%3D%3E%20%40-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20_id%2C%0A%20%20%20%20%20%20%20%20%20%20_createdAt%2C%0A%20%20%20%20%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20%20%20%20%20%22slug%22%3A%20slug.current%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20_type%20%3D%3D%20%22customURL%22%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22slug%22%3A%20slug.current%2C%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D",
    { next: { tags: ['navigation'] } }
  )
  const navItems = await test.json()

  return (
    <div className={montserrat.className}>
      <NavDestkop {...navItems.result} />
      <NavMobile {...navItems.result} />
    </div>
  )
}
