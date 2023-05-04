import clsx from 'clsx'
import { getNavItems } from '@/sanity/sanity-utils'
import NavItems from './NavItems'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/sanity-utils'

export default async function Nav() {
  const navItems = await getNavItems()
  console.log(navItems)
  return (
    <nav
      className={clsx(
        'sticky left-0 right-0 top-0 py-10 z-20',
        'bg-white uppercase flex items-center'
      )}
    >
      <div className='px-10 w-full flex items-center justify-between gap-2'>
        {navItems.logoImg ? (
          <Link
            href='/'
            className='relative w-[300px] md:w-[200px] lg:w-[400px] h-24 lg:h-36'
          >
            <Image
              src={urlFor(navItems.logoImg).url()}
              alt='Logo for Karrie Marie Baxley'
              className='object-cover rounded-sm'
              fill
            />
            <div className='absolute inset-0 flex justify-center items-center font-black text-white text-center lg:text-3xl'>
              <p>{navItems.logoTitle ?? ''}</p>
            </div>
          </Link>
        ) : (
          <Link href='/' className='text-3xl font-bold tracking-widest'>
            {navItems.logoTitle ?? 'Karrie Marie'}
          </Link>
        )}
        <NavItems {...navItems} />
      </div>
    </nav>
  )
}
