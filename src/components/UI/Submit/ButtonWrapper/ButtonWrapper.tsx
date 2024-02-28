import { FC } from 'react';
import m from './ButtonWrapper.module.scss';
import Image, { StaticImageData } from 'next/image';
import Button from '../../shared/Button/Button';
import Link from 'next/link';

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
          <div className={m.el}>
            <Link href={'https://wa.me/78002015467'} target="_blank" className={m.text}>{items.text}</Link>
            <Image src={items.icons} alt="" />
          </div>
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