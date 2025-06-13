import React, { useCallback, useMemo, useState } from 'react'
import Image from 'next/image'
import RandomText from '@/components/RandomText'
import { MY_DESCRIPTION } from '../mock'

interface Props {
}

const TitleIcon: React.FC<Props> = (props) => {
  const { } = props
  const [showDesc, setShowDesc] = useState<boolean>(false)

  const updateComponentProperties = useMemo(() => {
    let _className = 'block'

    if (showDesc) {
      _className = 'flex flex-col lg:flex-row items-center gap-3'
    }

    return {
      className: _className
    }
  }, [showDesc])

  const renderRandomText = useMemo(() => {
    if (!showDesc) return

    return (
      <div className='w-full max-w-[90%] lg:w-[30rem] border border-white text-center lg:text-justify rounded-md p-2'>
        <RandomText
          textList={MY_DESCRIPTION}
          fadeTransition={3000}
        />
      </div>
    )
  }, [showDesc])

  const onClickTrigger = useCallback(() => {
    setShowDesc(prev => !prev)
  }, [])

  return (
    <div {...updateComponentProperties}>
      <figure
        className='bg-gray-700 rounded-full overflow-hidden w-24 h-24 hover:cursor-pointer relative'
        onClick={() => onClickTrigger()}
      >
        <Image
          src={'/images/herta-img4.jpg'}
          alt='title-image'
          className='object-cover object-[128%_-31px] scale-[500%]' // Scales image 110%
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 30rem"
        />
      </figure>
      {renderRandomText}
    </div>
  )
}

export default React.memo<Props>(TitleIcon)
