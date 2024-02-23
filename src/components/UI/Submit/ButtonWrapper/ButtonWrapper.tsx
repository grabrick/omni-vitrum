import { FC } from 'react';
import m from './ButtonWrapper.module.scss';
import { StaticImageData } from 'next/image';
import Button from '../../shared/Button/Button';

type TButton = {
  id: number,
  text: string,
  icons: StaticImageData | string,
  isRouteBtn: boolean,
  content: string
}

type TProps = {
  linkData: TButton[]
}

const ButtonWrapper:FC<TProps> = ({ linkData }) => {
  return (
    <div className={m.content}>
      <div className={m.upContent}>
        {linkData.slice(0, 1).map((items: TButton) => (
          <Button key={items.id} text={items.text} icons={items.icons} isRouteBtn={items.isRouteBtn} content={items.content} />
        ))}
        <div className={m.border} />
        {linkData.slice(1, 2).map((items: TButton) => (
          <Button key={items.id} text={items.text} icons={items.icons} isRouteBtn={items.isRouteBtn} content={items.content} />
        ))}
      </div>
      <span className={m.and}>Или</span>
      <div className={m.downContent}>
        {linkData.slice(2, 3).map((items: TButton) => (
          <Button key={items.id} text={items.text} icons={items.icons} isRouteBtn={items.isRouteBtn} content={items.content} />
        ))}
      </div>
    </div>
  )
}

export default ButtonWrapper;