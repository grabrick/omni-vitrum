import Image, { StaticImageData } from "next/image";
import m from "./TopDownSlider.module.scss";
import { FC } from "react";
import img from '@/assets/images/123.png'  

type TData = {
  id: number,
  image: StaticImageData | string
}

type TProps = {
  findCurrentProduct: TData[],
}

const TopDownSlider:FC<TProps> = ({ findCurrentProduct }) => {
  return (
    <div className={m.images}>
      <div className={m.imagesWrapper}>
        {/* {findCurrentProduct.map((img) => ( */}
          {/* <Image className={m.img} key={img.id} src={img.image} alt="" /> */}
        {/* ))} */}
        <Image className={m.img} src={img} alt="" />
        {/* <Image className={m.img} src={img} alt="" />
        <Image className={m.img} src={img} alt="" />
        <Image className={m.img} src={img} alt="" />
        <Image className={m.img} src={img} alt="" /> */}
      </div>
    </div>
  );
};

export default TopDownSlider;
