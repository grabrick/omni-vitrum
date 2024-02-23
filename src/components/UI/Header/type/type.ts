type TProps = {
  id: number,
  title: string,
  isSelector: boolean,
  routePath: string | null
}

export interface IRouters {
  routers: TProps[],
  pathname: string,
}