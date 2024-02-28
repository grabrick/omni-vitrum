import Image from "next/image";
import WhatsApp from "@/assets/icons/whatsapp.svg";
import Telega from "@/assets/icons/Telegram.svg";
import m from "./Sectors.module.scss";
import Link from "next/link";

const Sectors = ({ sector }: any) => {
  return (
    <div className={m.container}>
      {sector.map((data: any) => (
        <div key={data.id}>
          <>
            {data.type === "contacts" && (
              <div className={m.wrapper}>
                <h3 className={m.title}>{data.title}</h3>
                <div className={m.sector}>
                  {data.selectors.map((selectorData: any) => (
                    <p className={m.sectorText} key={selectorData.id}>
                      {selectorData.text}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {data.type === "social" && (
              <div className={m.wrapper}>
                <h3 className={m.title}>{data.title}</h3>
                <div className={m.sector}>
                  {data.selectors.map((selectorData: any) => (
                    <Link
                      href={
                        selectorData.text === "WhatsApp"
                          ? "https://wa.me/78002015467"
                          : "https://t.me/gnutoe_steklo"
                      }
                      target="_blank"
                      className={m.sectorSocial}
                      key={selectorData.id}
                    >
                      <Image
                        src={
                          selectorData.text === "WhatsApp" ? WhatsApp : Telega
                        }
                        alt=""
                      />
                      <p className={m.text}>{selectorData.text}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        </div>
      ))}
    </div>
  );
};

export default Sectors;
