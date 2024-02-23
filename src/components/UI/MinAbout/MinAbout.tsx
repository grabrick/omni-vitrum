import Section from "../shared/Section/Section";
import Template from "../shared/Template/Template";
import m from "./MinAbout.module.scss";
import Cards from "./Cards/Cards";
import Description from "./Description/Description";
import { cards, description } from './data/minAbout'

const MinAbout = () => {
  return (
    <>
      <Section title="Немного о нас" />
      <Template>
        <div className={m.content}>
          <h1 className={m.title}>Наши преимущества</h1>
          <div className={m.main}>
            <Cards cards={cards} />
            <Description text={description} />
          </div>
        </div>
      </Template>
    </>
  );
};

export default MinAbout;
