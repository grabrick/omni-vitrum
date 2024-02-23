import Whatsapp from "@/assets/icons/whatsapp.svg";
import Inst from "@/assets/icons/insta.svg";

const contactData = [
  {
    id: 0,
    title: "Контакты",
    content: [
      { id: 0, text: "Тел. 8(800)201-54-67", img: null, activeRoute: null },
      { id: 1, text: "zerkalka2016@yandex.ru", img: null, activeRoute: null },
    ],
  },
  {
    id: 1,
    title: "Адрес",
    content: [
      { id: 0, text: "Москва, ул.Пришвина 26", img: null, activeRoute: null },
    ],
  },
  {
    id: 2,
    title: "Социальные сети",
    content: [
      { id: 0, text: "WhatsApp", img: Whatsapp, activeRoute: "" },
      { id: 1, text: "Instagram", img: Inst, activeRoute: "" },
    ],
  },
];

export { contactData }