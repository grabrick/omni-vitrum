import { StaticImageData } from "next/image"

type TSubText = {
  id: number,
  animateID?: number,
  text: string,
}

type TImages = {
  id: number,
  image: string | StaticImageData,
}

type TSelectedTextData = {
  id: number,
  text: string,
  subText?: TSubText[] | null,
  other?: string | null,
}

type TSelectedRoute = {
  id: number,
  title: string,
  type: string,
}

export type TFilteredContent = {
  id: number,
  type: string,
  images: TImages[],
  texts: TSubText[],
}

export type TActiveRoute = {
  id: number,
  type: string,
}

export type TData = {
  id: number,
  title: string,
  type: string,
  selectedTextData: TSelectedTextData[],
  selectedRoute: TSelectedRoute[] | null,

}

export interface ISelector {
  selectorsData: TData[]
}