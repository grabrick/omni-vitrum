import { FC, useState } from "react";
import m from "./ButtonSlider.module.scss";
import { TActiveRoute, TData } from "../../type";

type TProps = {
  items: TData;
  setActiveRoute: (value: TActiveRoute) => void;
};

const ButtonSlider: FC<TProps> = ({ items, setActiveRoute }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const activeRoute = items.selectedRoute?.[currentIndex] ?? null;

  const updateActiveRoute = (index: number) => {
    if (items.selectedRoute && items.selectedRoute.length > 0) {
      const route = items.selectedRoute[index];
      if (route) {
        setActiveRoute({ id: route.id, type: route.type });
      }
    }
  };

  const goToNext = () => {
    if (items.selectedRoute && items.selectedRoute.length > 0) {
      const nextIndex = (currentIndex + 1) % items.selectedRoute.length;
      setCurrentIndex(nextIndex);
      updateActiveRoute(nextIndex);
    }
  };

  const goToPrev = () => {
    if (items.selectedRoute && items.selectedRoute.length > 0) {
      const prevIndex =
        (currentIndex - 1 + items.selectedRoute.length) %
        items.selectedRoute.length;
      setCurrentIndex(prevIndex);
      updateActiveRoute(prevIndex);
    }
  };

  return (
    <div className={m.sliderContainer}>
      <div className={m.navigation}>
        <button className={m.prev} onClick={goToPrev} />
      </div>
      <div className={m.routerWrapper}>
        <div className={m.route}>
          <span className={m.routeText}>{activeRoute?.title}</span>
        </div>
      </div>
      <div className={m.navigation}>
        <button className={m.next} onClick={goToNext} />
      </div>
    </div>
  );
};

export default ButtonSlider;
