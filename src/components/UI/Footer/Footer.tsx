import Link from "next/link";
import Logo from "../shared/Logo/Logo";
import m from "./Footer.module.scss";
import Sectors from "./Sectors/Sectors";

const Footer = () => {
  const contacts = [
    {
      id: 0,
      type: "contacts",
      title: "Наши контакты",
      selectors: [
        { id: 0, text: "Адрес: Москва, ул.Пришвина 26" },
        { id: 1, text: "Тел: 8(800)201-54-67" },
        { id: 2, text: "Почта: zerkalka2016@yandex.ru" },
      ],
    },
    {
      id: 1,
      type: "social",
      title: "Соц.Сети",
      selectors: [
        { id: 0, text: "WhatsApp", link: '' },
        { id: 1, text: "Telegram", link: '' },
      ],
    },
  ];
  return (
    <footer className={m.container}>
      <div className={m.wrapper}>
        <div className={m.wrapp}>
          <Logo />
          <span className={m.nameTags}>Дизайн и разработка: <Link className={m.tags} href={"https://rodya.kz"} target="_blank">rodya.kz</Link></span>
        </div>
        <Sectors sector={contacts} />
      </div>
    </footer>
  );
};

export default Footer;
