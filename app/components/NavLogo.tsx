import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavItems } from '@/types/NavItems'
import { urlFor } from '@/sanity/sanity-utils'

export default function NavLogo(navItems: NavItems) {
  return (
    <>
      {navItems.logoImg ? (
        <Link
          href='/'
          className='relative w-[300px] lg:w-[400px] h-24 lg:h-36'
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
    </>
  )
}
