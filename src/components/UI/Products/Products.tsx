import { FC } from "react";
import m from "./Products.module.scss";
import Section from "../shared/Section/Section";
import Template from "../shared/Template/Template";
import MediaPlayer from "../shared/MediaPlayer/MediaPlayer";

import Vid from "@/assets/video/back.webm";
import ImageSlider from "../shared/ImageSlider/ImageSlider";
import TopDownSlider from "../shared/TopDownSlider/TopDownSlider";
import { motion } from "framer-motion";
import { topToBottom } from "@/assets/animation/animation";
import ErrorWrapper from "../ErrorWrapper/ErrorWrapper";
import { TProps } from "./type/type";

const Products: FC<TProps> = ({ query }) => {  
  return (
    <>
      {query && (
        <>
          <Section pathname={query.type} title={query?.routeTitle} />
          <Template key={query.type}>
            <div className={m.conteiner}>
              <motion.div 
                className={m.mediaWrapper}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={topToBottom}
              >
                <MediaPlayer src={query.content.video} styles={{ height: '450px' }} defaultVolume={0.5} />
                <TopDownSlider findCurrentProduct={query.content.images} />
              </motion.div>
              <div className={m.wrapper}>
                <motion.div className={m.textWrapper}>
                  {query.content.texts.map((el) => (
                    <div className={m.wrapp} key={el.id}>
                      {el.text && (
                        <motion.p
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className={m.text}
                          custom={el.animatedId}
                          variants={topToBottom}
                        >
                          {el.text}
                        </motion.p>
                      )}
                      {el.other && (
                        <motion.span
                          style={{ textAlign: "center", fontSize: '18px', fontWeight: "600" }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          custom={el.animatedId}
                          variants={topToBottom}
                        >
                          {el.other}
                        </motion.span>
                      )}
                      {el.subText !== null && (
                        <motion.div
                          className={m.subTextWrapper}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          custom={el.animatedId}
                          variants={topToBottom}
                        >
                          {el.subText.map((sub) => (
                            <span className={m.span} key={sub.id}>
                              {sub.text}
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </Template>
        </>
      )}
      {!query && (
        <ErrorWrapper
          errorMessage={"В данный момент продукция отсутствует"}
          backRoute={"/"}
        />
      )}
    </>
  );
};

export default Products;
