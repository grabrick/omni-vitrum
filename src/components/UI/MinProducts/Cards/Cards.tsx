import { FC } from "react";
import m from "./Cards.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LeftToRight, RightToLeft } from "@/assets/animation/animation";

type TProps = {
  id: number;
  title: string;
  label: string;
  image: string | StaticImageData;
  linkRouter: string;
  revers: boolean;
  text: string;
};

type TCard = {
  cards: TProps[];
};

const Cards: FC<TCard> = ({ cards }) => {
  return (
    <div className={m.container}>
      {cards.map((items: TProps) => (
        <>
          {items.revers !== true ? (
            <motion.div 
              className={m.card} 
              key={items.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={LeftToRight}
            >
              <div className={m.imageWrapper}>
                <Image className={m.img} width={507} height={331} src={items.image} alt="" />
              </div>
              <div className={m.textWrapper}>
                <div className={m.textHeader}>
                  <h2 className={m.title}>{items.title}</h2>
                  <label className={m.label}>{items.label}</label>
                </div>
                <p className={m.text}>{items.text}</p>
                <Link className={m.link} href={items.linkRouter}>
                  Подробнее...
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className={m.card} 
              key={items.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={RightToLeft}
            >
              <div className={m.textWrapper}>
                <div className={m.textHeader}>
                  <h2 className={m.title}>{items.title}</h2>
                  <label className={m.label}>{items.label}</label>
                </div>
                <p className={m.text}>{items.text}</p>
                <Link className={m.link} href={items.linkRouter}>
                  Подробнее...
                </Link>
              </div>
              <div className={m.imageWrapper}>
                <Image className={m.img} width={507} height={331} src={items.image} alt="" />
              </div>
            </motion.div>
          )}
        </>
      ))}
    </div>
  );
};

export default Cards;
