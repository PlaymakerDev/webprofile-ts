import React from 'react'
import HomeScreen from '@/features/home/screen'
import Head from 'next/head';

interface Props {
  id: string;
}

const Home: React.FC<Props> = (props) => {
  const { } = props

  return (
    <>
      <Head>
        <title>PlaymakerDev</title>
      </Head>
      <HomeScreen />
    </>
  )
}

export default React.memo<Props>(Home)
