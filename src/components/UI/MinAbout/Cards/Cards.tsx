import Image, { StaticImageData } from 'next/image';
import m from './Cards.module.scss';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { topToBottom } from '@/assets/animation/animation';

type TProps = {
  id: number,
  title: string,
  icons: string | StaticImageData,
  text: string,
}

type TCards = {
  cards: TProps[]
}

const Cards:FC<TCards> = ({ cards }) => {
  return (
    <div className={m.container}>
      {cards.map((items: TProps) => (
        <motion.div 
          key={items.id} 
          className={m.cards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={topToBottom}
        >
          <div className={m.header}>
            <h4 className={m.title}>{items.title}</h4>
            <Image src={items.icons} alt='' />
          </div>
          <p className={m.text}>{items.text}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default Cards;