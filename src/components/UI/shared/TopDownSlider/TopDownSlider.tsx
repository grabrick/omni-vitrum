import Image, { StaticImageData } from "next/image";
import m from "./TopDownSlider.module.scss";
import { FC } from "react";

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
        {findCurrentProduct.map((img) => (
          <Image className={m.img} key={img.id} src={img.image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default TopDownSlider;
