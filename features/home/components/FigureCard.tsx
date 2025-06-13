import React, { useMemo } from 'react'
import Image from 'next/image'
import RandomText from '@/components/RandomText'
import type { FigureData } from '@/utils/types'

interface Props {
  data: FigureData;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const FigureCard: React.FC<Props> = (props) => {
  const { data, isHovered, onMouseEnter, onMouseLeave } = props

  const content = useMemo(() => {
    if (isHovered) {
      return (
        <div className="transform translate-y-0 opacity-100 transition-all duration-700 ease-out">
          <h2 className="text-lg lg:text-2xl font-extralight uppercase text-center px-4 transform translate-y-0 opacity-70 transition-all duration-500 delay-100">
            {data.title}
          </h2>
          <div className="transform translate-y-0 opacity-100 transition-all duration-700 delay-300">
            <RandomText
              className="text-2xl lg:text-4xl font-bold uppercase text-center px-4"
              textList={data.textList}
              fadeTransition={3000}
            />
          </div>
        </div>
      )
    }

    return (
      <div className="transform translate-y-2 opacity-90 transition-all duration-300 ease-in">
        <p className="text-lg lg:text-2xl font-extralight uppercase animate-bounce text-center px-4 transform scale-100 transition-transform duration-200 hover:scale-110 cursor-pointer">
          Hover me
        </p>
      </div>
    )
  }, [isHovered, data.title, data.textList])

  return (
    (
      <figure
        className="bg-gray-700 w-full h-1/2 lg:h-full lg:w-44 lg:hover:w-[30rem] lg:transition-all lg:duration-500 relative overflow-hidden group cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        role="img"
        aria-label={data.alt}
      >
        <Image
          src={data.image}
          fill
          className={`object-cover ${data.objectPosition} brightness-30 group-hover:brightness-20 transition-all duration-300`}
          alt={data.alt}
          priority
          // sizes="(max-width: 1024px) 100vw, 30rem"
        />
        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 transition-all duration-300"
          aria-live="polite"
        >
          {content}
        </div>
      </figure>
    )
  )
}

export default React.memo<Props>(FigureCard)