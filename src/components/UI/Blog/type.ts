type TTexts = {
  id: number,
  text: string,
}

type TImages = {
  id: number,
  animatedId: number,
  image: string,
}

export interface IProps {
  id: number,
  title: string,
  author: string,
  postedDate: string,
  texts: TTexts[] | string,
  images: TImages[],
  routeLink: string
}