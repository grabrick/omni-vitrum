import Image from "next/image";
import Section from "../shared/Section/Section";
import Template from "../shared/Template/Template";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { contactData } from "./data/contactMap";

import m from "./Contacts.module.scss";
import { motion } from "framer-motion";
import { topToBottom } from "@/assets/animation/animation";
import { useState } from "react";
import Link from "next/link";

const Contacts = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const defaultState = {
    center: [55.888023, 37.63281],
    zoom: 15,
  };
  const addressCoordinates = [55.888023, 37.63281];

  const handleMapLoad = () => {
    console.log("Карта загружена");
    setIsLoaded(true);
  };

  return (
    <>
      <Section title="Контакты" />
      <Template>
        <div className={m.content}>
          <div className={m.mapWrap}>
            <YMaps query={{ lang: "ru_RU" }}>
              <Map
                defaultState={defaultState}
                onLoad={handleMapLoad}
                style={{
                  width: "97vmax",
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
                      <>
                        {items.title === "Социальные сети" ? (
                          <Link
                            href={
                              el.text === "WhatsApp"
                                ? "https://wa.me/78002015467"
                                : "https://t.me/gnutoe_steklo"
                            }
                            target="_blank"
                            className={m.listItem}
                            style={{
                              cursor: el.activeRoute !== null ? "pointer" : "",
                            }}
                            onClick={() => ""}
                            key={el.id}
                          >
                            {el.img !== null && <Image src={el.img} alt="" />}
                            <span className={m.text}>{el.text}</span>
                          </Link>
                        ) : (
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
                        )}
                      </>
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
