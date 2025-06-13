// import HertaImg from '@/public/images/herta-img.jpg'
// import HertaImg2 from '@/public/images/herta-img2.jpg'
import HertaImg3 from '@/public/images/herta-img3.jpg'
import CastoriceImg from '@/public/images/castorice-img.jpg'
import { FigureData } from '@/utils/types'

export const SKILL_LIST = [
  'HTML',
  'CSS',
  'Responsive Design',
  'JavaScript',
  'TypeScript',
  'C#',
  'Luau',
  'Version Control',
  'Prototyping Tool',
  'Management Tool',
]

export const FAMILIAR_WITH = [
  'Frontend Development',
  'Backend Development',
  'Game Development',
  'Game Design',
  'UI/UX Design',
  'System Analysis'
]

export const LOVE_PLAYING = [
  'Honkai: Star Rail',
  'Zenless Zone Zero'
]

export const STILL_STUDY = [
  'Website',
  'Unity',
  'Roblox'
]

// Define social links with proper typing
export const SOCIAL_LINKS = [
  {
    name: 'Discord',
    icon: '/images/discord-icon.svg',
    url: '#', // Add your actual Discord link
    alt: 'Discord profile',
  },
  {
    name: 'LinkedIn',
    icon: '/images/linkedin.svg',
    url: 'https://www.linkedin.com/in/tanus-witpattanakul-8a33791ba/', // Add your actual LinkedIn link
    alt: 'LinkedIn profile',
  },
  {
    name: 'GitHub',
    icon: '/images/github-icon.svg',
    url: 'https://github.com/PlaymakerDev', // Add your actual LinkedIn link
    alt: 'GitHub profile',
  },
] as const

export const FIGURE_DATA: FigureData[] = [
  {
    id: 'skills',
    image: HertaImg3,
    alt: 'Skills showcase image',
    objectPosition: 'object-[47%_50%]',
    title: "I've experience in",
    textList: SKILL_LIST
  },
  {
    id: 'familiar',
    image: CastoriceImg,
    alt: 'Technologies showcase image',
    objectPosition: 'object-[33%_50%]',
    title: "I'm familiar with",
    textList: FAMILIAR_WITH
  }
]

export const MY_DESCRIPTION: string[] = [
  'Hi, I am 3 years experience Frontend Developer in technology-related industry.',
  'I love doing research and development on what I interested; with my expertise in field-of-study I enjoyed develop system and application with styles.',
  'Also, I am seeking to expand my knowledge to have my reach on varieties of possibilities.',
  'Feel free to contact, I am friendly and love talking to everyone. :)'
]