import React from 'react'
import HomeScreen from '@/features/home/screen'

interface Props {
  id: string;
}

const Home: React.FC<Props> = (props) => {
  const { } = props

  return (
    <HomeScreen />
  )
}

export default React.memo<Props>(Home)
