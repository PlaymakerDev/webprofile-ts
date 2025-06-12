import React, { useCallback, useMemo } from 'react'
import Image from 'next/image'
import { SOCIAL_LINKS } from '../mock'
// DYNAMIC IMPOER
import dynamic from 'next/dynamic'
const TypeWriter = dynamic(() => import('typewriter-effect'), { ssr: false })

interface Props { }

const TitleText: React.FC<Props> = (props) => {
  const { } = props;
  // Memoize static data to prevent recreating on every render
  const typewriterStrings = useMemo(() => [
    'Hi,',
    `I'm <strong class="text-blue-500">Playmaker<span class="text-yellow-500">Dev</span></strong>`
  ], [])

  const copyUrlAndAlert = useCallback((event: { preventDefault: () => void }) => {
    // PREVENT TARGET BLANK
    event.preventDefault();
    // FUNCTION LOGIC
    const username = 'playmaker.dev'
    navigator.clipboard.writeText(username);
    // Alert the copied text
    alert('Username copied!');
  }, [])

  const renderSocialLink = useMemo(() => {
    return SOCIAL_LINKS.map((social) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white w-12 h-12 overflow-hidden flex items-center justify-center hover:cursor-pointer hover:bg-gray-50 transition-colors duration-200 shadow-sm hover:shadow-md"
        aria-label={`Visit ${social.name} profile`}
        onClick={(event) => {
          if (social.name !== 'Discord') return;
          copyUrlAndAlert(event)
        }}
      >
        <Image
          src={social.icon}
          width={30}
          height={30}
          alt={social.alt}
          className="object-contain"
        />
      </a>
    ))
  }, [copyUrlAndAlert])

  return (
    <>
      <section className="text-center lg:text-start">
        <TypeWriter
          options={{
            strings: typewriterStrings,
            autoStart: true,
            loop: true,
            wrapperClassName: 'text-4xl lg:text-5xl',
          }}
        />
      </section>

      <section className="mt-3 text-center lg:text-start">
        <h2 className="uppercase text-sm font-medium text-gray-600">
          Reach me on
        </h2>
        <div className="flex items-center justify-center lg:justify-start gap-3 mt-3">
          {renderSocialLink}
        </div>
      </section>
    </>
  )
}

export default React.memo<Props>(TitleText)