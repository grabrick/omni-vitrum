import Template from "../shared/Template/Template";
import m from "./Submit.module.scss";

import Message from "@/assets/icons/Message.svg";
import Call from "@/assets/icons/Call.svg";
import Sms from "@/assets/icons/Sms.svg";
import Button from "../shared/Button/Button";
import ButtonWrapper from "./ButtonWrapper/ButtonWrapper";
import { motion } from "framer-motion";
import { bottomToTop } from "@/assets/animation/animation";
import { useWindowSize } from "@/helpers/useWindowSize";
import SlicedButtonWrapper from "./SlicedButtonWrapper/SlicedButtonWrapper";

const Submit = () => {
  const { width } = useWindowSize()
  const linkData = [
    {
      id: 0,
      text: "WhatsApp",
      icons: Message,
      isRouteBtn: true,
      content: "+79160161365",
    },
    {
      id: 1,
      text: "Телефон",
      icons: Call,
      isRouteBtn: false,
      content: "+79160161365",
    },
    {
      id: 2,
      text: "zerkalka2016@yandex.ru",
      icons: Sms,
      isRouteBtn: false,
      content: "zerkalka2016@yandex.ru",
    },
  ];
  
  return (
    <motion.div 
      className={m.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={2}
      variants={bottomToTop}
    >
      <div className={m.textWrapper}>
        <h1 className={m.title}>Понравилась наша продукция</h1>
        <label className={m.label}>Свяжитесь с нами напрямую</label>
      </div>
      <Template>
        {(width && width > 768) && <ButtonWrapper linkData={linkData} />}
        {/* {(width && width < 769) && <SlicedButtonWrapper />} */}
      </Template>
    </motion.div>
  );
};

export default Submit;
