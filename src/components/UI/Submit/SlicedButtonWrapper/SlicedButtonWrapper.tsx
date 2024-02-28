import m from "./SlicedButtonWrapper.module.scss";
import Image from "next/image";
import Message from "@/assets/icons/Message.svg";
import Call from "@/assets/icons/Call.svg";
import Sms from "@/assets/icons/Sms.svg";
import Link from "next/link";

const SlicedButtonWrapper = () => {
  return (
    <div className={m.content}>
      <div className={m.upContent}>
        <div className={m.el}>
          <Link href={'https://wa.me/78002015467'} target="_blank" className={m.text}>Whatsapp</Link>
          <Image src={Message} alt="" />
        </div>
        {/* <div className={m.border} /> */}
        <div className={m.el}>
          <span className={m.text}>+7778937534</span>
          <Image src={Call} alt="" />
        </div>
      </div>
      {/* <span className={m.and}>Или</span> */}
      <div className={m.downContent}>
        <div className={m.el}>
          <span className={m.text}>zerkalka2016@yandex.ru</span>
          <Image src={Sms} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SlicedButtonWrapper;
