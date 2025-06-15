import React, { useCallback, useMemo, useState } from 'react'
import Image from 'next/image'
import RandomText from '@/components/RandomText'
import { MY_DESCRIPTION } from '../mock'
import { AnimatePresence, motion } from 'motion/react'
import { useScreenSize } from '@/utils/useScreenSize'

interface Props {
}

const TitleIcon: React.FC<Props> = (props) => {
  const { } = props
  const [showDesc, setShowDesc] = useState<boolean>(false)
  const isLargeScreen = useScreenSize(1024)

  const updateMotionValue = useMemo(() => {
    if (isLargeScreen) {
      return {
        initial: { opacity: 0, x: -1 * 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 1 * -50 }
      }
    }

    return {
      initial: { opacity: 0, y: -1 * 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 1 * -50 }
    }
  }, [isLargeScreen])

  const renderRandomText = useMemo(() => {
    if (!showDesc) return

    return (
      <motion.div
        className='w-full max-w-[90%] lg:w-[30rem] border border-white text-center lg:text-justify rounded-md p-2'
        initial={updateMotionValue.initial}
        animate={{
          ...updateMotionValue.animate,
          transition: {
            delay: 0.2,
            type: "spring",
            visualDuration: 0.3,
            bounce: 0.4,
          },
        }}
        exit={updateMotionValue.exit}
      >
        <RandomText
          textList={MY_DESCRIPTION}
          fadeTransition={5000}
          className='fs-12'
        />
      </motion.div>
    )
  }, [showDesc, updateMotionValue.initial, updateMotionValue.animate, updateMotionValue.exit])

  const renderClickMe = useMemo(() => {
    if (showDesc) return
    return (
      <figure className='absolute top-0 right-0 rounded-full bg-blue-500 w-5 h-5 flex items-center justify-center animate-bounce'>&#63;</figure>
    )
  }, [showDesc])

  const onClickTrigger = useCallback(() => {
    setShowDesc(prev => !prev)
  }, [])

  return (
    <div className='flex flex-col lg:flex-row items-center gap-3'>
      <div className='relative'>
        <motion.figure
          className='bg-gray-700 rounded-full overflow-hidden w-24 h-24 hover:cursor-pointer relative'
          onClick={() => onClickTrigger()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={'/images/herta-img4.jpg'}
            alt='title-image'
            className='object-cover object-[128%_-31px] scale-[500%]' // Scales image 110%
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 30rem"
            draggable={false}
          />
        </motion.figure>
        {renderClickMe}
      </div>
      <AnimatePresence>
        {renderRandomText}
      </AnimatePresence>
    </div>
  )
}

export default React.memo<Props>(TitleIcon)
