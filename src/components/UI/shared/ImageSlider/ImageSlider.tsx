import { FC, useState } from 'react';
import m from './ImageSlider.module.scss';
import Image, { StaticImageData } from 'next/image';

type TImage = {
  id: number,
  image: string | StaticImageData,
}

type TProps = {
  images: TImage[];
};

const ImageSlider:FC<TProps> = ({ images }) => {
  return (
    <div className={m.slider}>
      <ul className={m.sliderImages}>
        {images.map((el) => (
          <li key={el.id} className={m.imageWrapper}>
            <Image className={m.img} src={el.image} alt={`Slide ${el.id}`} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ImageSlider;