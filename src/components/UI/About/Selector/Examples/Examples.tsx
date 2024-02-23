import Image from "next/image";
import m from "./Examples.module.scss";
import { FC } from "react";
import { TActiveRoute, TData, TFilteredContent } from "../type";
import ButtonSlider from "./ButtonSlider/ButtonSlider";

type TProps = {
  items: TData;
  activeRoute: TActiveRoute;
  setActiveRoute: (value: TActiveRoute) => void;
  filteredContent: TFilteredContent[];
};

const Examples: FC<TProps> = ({
  items,
  activeRoute,
  setActiveRoute,
  filteredContent,
}) => {
  return (
    <div className={m.routerContainer}>
      <h3 className={m.routeTitle}>Пример наших работ</h3>
      <div className={m.routerWrapper}>
        {items?.selectedRoute?.map((route) => (
          <div
            className={
              (activeRoute.id && activeRoute.type) === (route.id && route.type)
                ? m.activeRoute
                : m.route
            }
            onClick={() => setActiveRoute({ id: route.id, type: route.type })}
            key={route.id}
          >
            <span className={m.routeText}>{route.title}</span>
          </div>
        ))}
      </div>
      <div className={m.slider}>
        <ButtonSlider items={items} setActiveRoute={setActiveRoute} />
      </div>
      <div className={m.content}>
        {filteredContent.map((items) => (
          <div key={items.id} className={m.element}>
            <div className={m.images}>
              {items.images.map((el) => (
                <div key={el.id} className={m.imageWrapper}>
                  <Image src={el.image} alt="" className={m.img} />
                </div>
              ))}
            </div>
            <div className={m.texts}>
              {items.texts.map((el) => (
                <p key={el.id} className={m.text}>
                  {el.text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Examples;
