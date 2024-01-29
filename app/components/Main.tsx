'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname, useSearchParams } from 'next/navigation'

function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <AnimatePresence key={pathname || '' + searchParams}>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            opacity: {
              duration: 0.8,
              delay: 0.1,
            },
          },
        }}
        exit={{ opacity: 0 }}
        className='relative top-20 xl:top-0'
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export default Main
