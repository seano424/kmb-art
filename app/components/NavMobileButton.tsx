import React from 'react'
import { Hamburger, Close } from './SVGs'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavMobileButton({ isOpen, setIsOpen }: Props) {
  return (
    <button className='xl:hidden' onClick={() => setIsOpen((prev) => !prev)}>
      <AnimatePresence initial={false} mode='wait'>
        <motion.div
          initial={{
            rotate: isOpen ? -90 : 90,
          }}
          animate={{
            zIndex: 1,
            rotate: 0,
            transition: {
              type: 'tween',
              duration: 0.15,
              ease: 'circOut',
            },
          }}
          exit={{
            zIndex: 0,
            rotate: isOpen ? -90 : 90,
            transition: {
              type: 'tween',
              duration: 0.15,
              ease: 'circIn',
            },
          }}
          key={isOpen ? 'open' : 'close'}
        >
          {isOpen ? <Close /> : <Hamburger />}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}
