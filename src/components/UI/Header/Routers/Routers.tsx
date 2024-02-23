import Link from "next/link";
import m from "./Routers.module.scss";
import Image from "next/image";
import ArrowDown from "@/assets/icons/ArrowDown.svg";
import { FC, useState } from "react";
import { IRouters } from "../type/type";
import ProductSelector from "./ProductSelector/ProductSelector";

const Routers: FC<IRouters> = ({ routers, pathname }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={m.container}>
      {routers.map((items: any) => (
        <div
          className={pathname === items.routePath ? m.wrappActive : ''}
          key={items.id}
        >
          {items.isSelector === false ? (
            <div
              className={pathname === items.routePath ? m.linkActive : m.link}
            >
              <Link href={`${items.routePath}`} key={items.id}>
                {items.title}
              </Link>
            </div>
          ) : (
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              onClick={() => setIsOpen(!isOpen)}

            >
              <div
                className={ isOpen === true ? m.selecrtorActive : m.selector} 
                key={items.id}                
              >
                <span className={m.selectorTitle}>{items.title}</span>
                <Image src={ArrowDown} style={{ rotate: isOpen === true ? "-180deg" : "360deg" }} alt="" />
              </div>
              {isOpen && <ProductSelector setIsOpen={setIsOpen} />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Routers;
