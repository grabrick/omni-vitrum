import { CSSProperties, ReactNode } from "react";
import m from "./Template.module.scss";
import { motion } from "framer-motion";
import { bottomToTop } from "@/assets/animation/animation";

type TProps = {
  children: ReactNode,
  styles?: CSSProperties,
}

const Template = ({ children, styles }: TProps) => {
  return (
    <motion.section 
      className={m.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1} 
      variants={bottomToTop}
      style={styles}
    >
      { children }
    </motion.section>
  )
};

export default Template;
