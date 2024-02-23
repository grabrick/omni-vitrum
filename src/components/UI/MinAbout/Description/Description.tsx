import { FC } from 'react';
import m from './Description.module.scss';
import { argv0 } from 'process';
import { motion } from 'framer-motion';
import { topToBottom } from '@/assets/animation/animation';

type TElement = {
  id: number,
  text: string,
}

type TProps = {
  text: TElement[]
}

const Description:FC<TProps> = ({ text }) => {
  return (
    <div className={m.container}>
      {text.map((items: TElement) => (
        <motion.p 
          className={m.text} 
          key={items.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={topToBottom}
        >
          {items.text}
        </motion.p>
      ))}
    </div>
  )
}

export default Description;