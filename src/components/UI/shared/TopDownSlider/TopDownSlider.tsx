import Image, { StaticImageData } from "next/image";
import m from "./TopDownSlider.module.scss";
import { FC } from "react";
import NotImage from '@/assets/images/topography_wallpaper.jpg'  

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
          <>
          {console.log()}
          {img.image.toString().length > 0 ? (
            <Image className={m.img} width={510} height={223} key={img.id} src={img.image} alt="" />
          ) : (
            <Image className={m.img} width={510} height={223} key={img.id} src={NotImage} alt="" />
          )}
          </>
        ))}
      </div>
    </div>
  );
};

export default TopDownSlider;
