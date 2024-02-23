import { useEffect, useState } from "react";

type TProps = {
  width: null | number,
  height: null | number,
}

const useWindowSize = () => {
  const [size, setSize] = useState<TProps>({ width: null, height: null });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      // Функция очистки
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Пустой массив зависимостей гарантирует, что эффект запустится один раз

  return size;
};

export { useWindowSize }