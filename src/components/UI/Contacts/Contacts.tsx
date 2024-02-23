import Image from "next/image";
import Section from "../shared/Section/Section";
import Template from "../shared/Template/Template";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { contactData } from "./data/contactMap";

import m from "./Contacts.module.scss";
import { motion } from "framer-motion";
import { topToBottom } from "@/assets/animation/animation";

const Contacts = () => {
  const defaultState = {
    center: [55.888023, 37.63281],
    zoom: 15,
  };
  const addressCoordinates = [55.888023, 37.63281];

  return (
    <>
      <Section title="Контакты" />
      <Template>
        <div className={m.content}>
          <div className={m.mapWrap}>
            <YMaps>
              <Map
                defaultState={defaultState}
                style={{
                  width: "95vw",
                  maxWidth: "1275px",
                  height: "500px",
                }}
                className={m.map}
              >
                <Placemark geometry={addressCoordinates} />
              </Map>
            </YMaps>
          </div>
          <motion.div
            className={m.contactsWrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={topToBottom}
          >
            <h1 className={m.title}>Контактные данные</h1>
            <div className={m.wrap}>
              {contactData.map((items) => (
                <motion.div
                  className={m.section}
                  key={items.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={items.id * 4}
                  variants={topToBottom}
                >
                  <h4 className={m.sectionTitle}>{items.title}</h4>
                  <ul className={m.element}>
                    {items.content.map((el) => (
                      <li
                        className={m.listItem}
                        style={{
                          cursor: el.activeRoute !== null ? "pointer" : "",
                        }}
                        onClick={() => ""}
                        key={el.id}
                      >
                        {el.img !== null && <Image src={el.img} alt="" />}
                        <span className={m.text}>{el.text}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Template>
    </>
  );
};

export default Contacts;
