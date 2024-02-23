import { motion } from 'framer-motion';
import m from './Section.module.scss';
import { bottomToTop } from '@/assets/animation/animation';

type TProps = {
  title: string | undefined,
  pathname?: string
}

const Section = ({ title, pathname }: TProps) => {
  return (
    <motion.div 
      key={pathname}
      className={m.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1} 
      variants={bottomToTop}
    >
      <div className={m.wrapper}>
        <h1 className={m.title}>{title}</h1>
      </div>
    </motion.div>
  )
}

export default Section;