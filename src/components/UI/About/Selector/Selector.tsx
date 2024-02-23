import Image from "next/image";
import img from "@/assets/images/topography_wallpaper.jpg";
import m from "./Selector.module.scss";
import { FC, Fragment, createRef, useEffect, useRef, useState } from "react";
import { ISelector } from "./type";
import SHeader from "./SHeader/SHeader";
import { contentMap } from "../data/contentMap";
import Examples from "./Examples/Examples";
import { motion } from "framer-motion";
import {
  topToBottom,
} from "@/assets/animation/animation";

const Selector: FC<ISelector> = ({ selectorsData }) => {
  const [isActive, setIsActive] = useState({ id: 0, flag: false });
  const [activeRoute, setActiveRoute] = useState({ id: 0, type: "Shower" });
  const selectorRefs = useRef<any>({});

  const filteredContent = contentMap.filter(
    (item) => item.id === activeRoute.id && item.type === activeRoute.type
  );

  useEffect(() => {
    selectorRefs.current = selectorsData.reduce((acc: any, value) => {
      acc[value.id] = createRef();
      return acc;
    }, {});
  }, [selectorsData]);

  useEffect(() => {
    if (isActive.flag) {
      const selectedElement = selectorRefs.current[isActive.id]?.current;
      if (selectedElement) {
        const offset = 120;
        const elementPosition =
          selectedElement.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }
  }, [isActive]);

  return (
    <>
      {selectorsData.map((items) => (
        <>
          {items.type === "multi" ? (
            <div className={m.selector}>
              <SHeader
                selectorRefs={selectorRefs}
                items={items}
                isActive={isActive}
                setIsActive={setIsActive}
              />
              {isActive.id === items.id && isActive.flag === true && (
                <div className={m.isOpened}>
                  {items.selectedTextData.map((el) => (
                    <motion.div 
                      className={m.card} 
                      key={el.id}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={1}
                      variants={topToBottom}
                    >
                      <h4 className={m.textTitle}>{el.text}</h4>
                      <div className={m.otherText}>
                        {el.subText?.map((text) => (
                          <motion.p 
                            className={m.text} 
                            key={text.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={text.animateID}
                            variants={topToBottom}
                          >
                            {text.text}
                          </motion.p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                  {items?.selectedRoute !== null && (
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={2}
                      variants={topToBottom}
                    >
                      <Examples
                        items={items}
                        activeRoute={activeRoute}
                        setActiveRoute={setActiveRoute}
                        filteredContent={filteredContent}
                      />
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className={m.selector} key={items.id}>
              <SHeader
                selectorRefs={selectorRefs}
                items={items}
                isActive={isActive}
                setIsActive={setIsActive}
              />
              {isActive.id === items.id && isActive.flag === true && (
                <div className={m.isOpened} style={{ gap: "30px" }}>
                  {items.selectedTextData.map((el) => (
                    <>
                      <motion.div 
                        className={m.card} 
                        key={el.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        variants={topToBottom}
                      >
                        <h4
                          className={
                            el.subText !== null ? m.textTitle : m.textTitleEmpty
                          }
                        >
                          {el.text}
                        </h4>
                        {el.subText !== null && (
                          <div className={m.otherText}>
                            {el.subText?.map((text) => (
                              <motion.p 
                                className={m.text} 
                                key={text.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={text.animateID}
                                variants={topToBottom}
                              >
                                {text.text}
                              </motion.p>
                            ))}
                          </div>
                        )}
                      </motion.div>
                      {el.other !== null && (
                        <motion.span 
                          className={m.other}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          custom={1}
                          variants={topToBottom}
                        >
                          {el.other}
                        </motion.span>
                      )}
                    </>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default Selector;
