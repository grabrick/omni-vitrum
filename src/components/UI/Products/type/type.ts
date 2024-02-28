import { StaticImageData } from "next/image"

type TImage = {
  id: number,
  image: string | StaticImageData,
}

type TSubText = {
  id: number,
  animateId: number,
  text: string,
}

type TText = {
  id: number,
  animatedId: number
  text: string | null,
  subText: TSubText[] | null,
  other: string | null
}

type TData = {
  id: number,
  type: string,
  routeTitle: string,
  content: {
    video: string,
    images: TImage[],
    texts: TText[]
  }
}

export type TProps = {
  query: TData;
};