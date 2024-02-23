import Template from "../shared/Template/Template";
import m from "./Submit.module.scss";

import Message from "@/assets/icons/Message.svg";
import Call from "@/assets/icons/Call.svg";
import Sms from "@/assets/icons/Sms.svg";
import Button from "../shared/Button/Button";
import ButtonWrapper from "./ButtonWrapper/ButtonWrapper";
import { motion } from "framer-motion";
import { bottomToTop } from "@/assets/animation/animation";

const Submit = () => {
  const linkData = [
    {
      id: 0,
      text: "WhatsApp",
      icons: Message,
      isRouteBtn: false,
      content: "/",
    },
    {
      id: 1,
      text: "Телефон",
      icons: Call,
      isRouteBtn: false,
      content: "+7778937534",
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
        <h1 className={m.title}>Нужно больше информации о продукции?</h1>
        <label className={m.label}>Переходите в наш блог</label>
      </div>
      <Template>
        <ButtonWrapper linkData={linkData} />
      </Template>
    </motion.div>
  );
};

export default Submit;
