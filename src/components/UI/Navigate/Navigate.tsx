import Link from "next/link";
import { productsData } from "../Header/data/routersMap";
import Section from "../shared/Section/Section";
import Template from "../shared/Template/Template";
import m from "./Navigate.module.scss";

const Navigate = () => {
  return (
    <>
      <Section title="Продукция и Услуги" />
      <Template>
        <div className={m.conteiner}>
          {productsData.map((items) => (
            <div key={items.id} className={m.card}>
              <h4 className={m.title}>{items.title}</h4>
              <div className={m.listWrapper}>
                {items.content.map((el) => (
                  <Link className={m.link} key={el.id} href={el.route}>
                    {el.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Template>
    </>
  );
};

export default Navigate;
