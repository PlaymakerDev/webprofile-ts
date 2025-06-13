import React, { useEffect, useMemo, useState } from 'react'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  textList: string[];
  fadeTransition: number;
  showListLength?: boolean;
}

const RandomText: React.FC<Props> = (props) => {
  const { textList = [], fadeTransition = 5000, showListLength = false, ...textProps } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  // Reset index when textList changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [textList])

  useEffect(() => {
    if (!textList.length) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textList.length)
    }, fadeTransition)

    return () => clearInterval(interval)
  }, [textList, fadeTransition])
  
    const renderListLength = useMemo(() => {
      if (!showListLength) return

      return (
        <p className='text-center'>{`(${currentIndex + 1}/${textList.length})`}</p>
      )
    }, [showListLength, textList, currentIndex])

  const currentText = textList.length > 0 ? textList[currentIndex] : 'Loading...'

  return (
    <>
      <p {...textProps}>{currentText}</p>
      {renderListLength}
    </>
  )
}

export default React.memo<Props>(RandomText)
