import Image from "next/image";
import ArrowDownWhite from "@/assets/icons/ArrowDownWhite.svg";
import m from "./SHeader.module.scss";

const SHeader = ({ selectorRefs, items, isActive, setIsActive }: any) => {
  return (
    <div
      ref={selectorRefs.current[items.id]}
      className={
        isActive.id === items.id && isActive.flag === true
          ? m.activeHeaderWrapper
          : m.headerWrapper
      }
      onClick={() => {
        if (isActive.id === items.id) {
          setIsActive((prevState: any) => ({
            ...prevState,
            flag: !prevState.flag,
          }));
        } else {
          setIsActive({ id: items.id, flag: true });
          selectorRefs.current[items.id].current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }}
    >
      <h2 className={m.title}>{items.title}</h2>
      <Image
        src={ArrowDownWhite}
        style={{
          rotate:
            isActive.id === items.id && isActive.flag === true
              ? "180deg"
              : "360deg",
        }}
        alt=""
      />
    </div>
  );
};

export default SHeader;
