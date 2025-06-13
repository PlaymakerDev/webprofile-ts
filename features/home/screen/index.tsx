import React from 'react'
import { TitleText, TitleIcon, ImageList } from '../components'

interface Props { }

const HomeScreen: React.FC<Props> = (props) => {
  const { } = props;

  return (
    <main className="w-screen h-screen">
      <div className="lg:px-40 h-full flex flex-col lg:flex-row items-center">
        <section className="flex flex-col gap-3 h-full justify-center items-center lg:h-auto lg:justify-start lg:items-start w-full z-10 relative m-5 lg:m-0">
          <TitleIcon />
          <TitleText />
        </section>
        <section className="lg:absolute lg:right-0 2xl:right-60 flex flex-col lg:flex-row w-full lg:w-auto h-full z-20">
          <ImageList />
        </section>
      </div>
    </main>
  )
}

export default React.memo<Props>(HomeScreen)
