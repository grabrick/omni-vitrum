import Image from "next/image";
import Section from "../shared/Section/Section";
import Template from "../shared/Template/Template";
import m from "./ImagesSlider.module.scss";

const ImagesSlider = () => {
  return (
    <>
      <Section title="Наши работы" />
      <Template>
        <div className={m.container}>
          {Array.from({ length: 30 }, (_, index) => (
            <Image
              src={`https://bentglass.ru/public/images/${index}.png`}
              width={300}
              className={m.img}
              height={300}
              alt=""
            />
          ))}
        </div>
      </Template>
    </>
  );
};

export default ImagesSlider;
