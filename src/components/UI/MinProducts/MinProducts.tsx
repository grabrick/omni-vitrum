import Button from "../shared/Button/Button";
import Section from "../shared/Section/Section";
import Template from "../shared/Template/Template";
import Cards from "./Cards/Cards";
import m from "./MinProducts.module.scss";

import File from "@/assets/icons/File.svg";
import { minProducts } from "./data/minProductMap";
import { motion } from "framer-motion";
import { topToBottom } from "@/assets/animation/animation";

const MinProducts = () => {
  
  return (
    <>
      <Section title="Наша продукция" />
      <Template>
        <div className={m.content}>
          <Cards cards={minProducts} />
          <motion.div 
            className={m.more}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={topToBottom}
          >
            <div className={m.textWrapper}>
              <h3 className={m.title}>Нужно больше информации о продукции?</h3>
              <label className={m.label}>Переходите в наш блог</label>
            </div>
            <Button text={"Блог"} icons={File} isRouteBtn={true} routePath="/blog" />
          </motion.div>
        </div>
      </Template>
    </>
  );
};

export default MinProducts;
