import React, { useEffect, useState } from 'react'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  textList: string[];
  fadeTransition: number;
}

const RandomText: React.FC<Props> = (props) => {
  const { textList = [], fadeTransition = 5000, ...textProps } = props
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

  const currentText = textList.length > 0 ? textList[currentIndex] : 'Loading...'

  return (
    <p {...textProps}>{currentText}</p>
  )
}

export default React.memo<Props>(RandomText)
