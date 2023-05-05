import React from 'react'
import { NavItems } from '@/types/NavItems'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface Props {
  navItems: NavItems
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavMobileMenu(props: Props) {
  const { navItems, isOpen, setIsOpen } = props
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key='mobile-menu'
          initial={{ translateY: -300 }}
          animate={{
            translateY: 0,
            transition: {
              height: {
                duration: 1.4,
              },
            },
          }}
          exit={{
            translateY: -300,
            transition: {
              height: {
                duration: 1.4,
                delay: 0.25,
              },
            },
          }}
          className='xl:hidden py-10 fixed top-32 left-0 right-0 z-10 bg-white/95 filter backdrop-blur-sm flex flex-col items-center gap-10 font-black text-3xl'
        >
          {navItems.navigationLinks.map((navLink) => (
            <Link key={navLink._id} href={`/${navLink.slug}`}>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    opacity: {
                      duration: 0.25,
                      delay: 0.25,
                    },
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    opacity: {
                      duration: 0.15,
                    },
                  },
                }}
              >
                {navLink.title}
              </motion.span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
