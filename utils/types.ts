import { StaticImageData } from "next/image"

export type HoverState = 'skills' | 'familiar' | null;

export interface FigureData {
  id: HoverState;
  image: StaticImageData;
  alt: string;
  objectPosition: string;
  title: string;
  textList: string[];
}