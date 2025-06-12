import React from 'react'
import Image from 'next/image'

interface Props {
}

const TitleIcon: React.FC<Props> = (props) => {
  const { } = props

  return (
    <figure className='bg-gray-700 rounded-full overflow-hidden w-24 h-24 relative'>
      <Image
        src={'/images/herta-img4.jpg'}
        alt='title-image'
        className='object-cover object-[128%_-31px] scale-[500%]' // Scales image 110%
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 30rem"
      />
    </figure>
  )
}

export default React.memo<Props>(TitleIcon)
