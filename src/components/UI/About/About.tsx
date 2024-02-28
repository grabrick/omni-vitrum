import Section from "../shared/Section/Section";
import Template from "../shared/Template/Template";
import Play from "@/assets/icons/PlayBtn.svg";
import m from "./About.module.scss";
import Image from "next/image";
import Selector from "./Selector/Selector";
import { selectorsData } from './data/selectorsMap'
import Vid from '@/assets/video/back.webm'
import MediaPlayer from "../shared/MediaPlayer/MediaPlayer";

const About = () => {
  return (
    <>
      <Section title="О компании" />
      <Template>
        <div className={m.content}>
          <MediaPlayer src={"https://bentglass.ru/public/aboutVideo/aboutVideo.mp4"} defaultVolume={0.5} />
          <div className={m.wrapper}>
            <span className={m.desc}>
              Наш офис находится прямо на производстве, поэтому вы всегда можете
              увидеть готовые гнутые стекла и другую продукцию.
            </span>
            <Selector selectorsData={selectorsData} />
          </div>
        </div>
      </Template>
    </>
  );
};

export default About;
