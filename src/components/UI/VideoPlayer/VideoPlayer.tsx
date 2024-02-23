import m from "./VideoPlayer.module.scss";
import Video from "@/assets/video/back.webm";
import Buld from "@/assets/icons/Building.svg";
import { useEffect, useRef, useState } from "react";
import Button from "../shared/Button/Button";
import Template from "../shared/Template/Template";
import { motion } from "framer-motion";
import { StepOutShadows, topToBottom } from "@/assets/animation/animation";

const VideoPlayer = () => {
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const syncVideos = () => {
    const backgroundVideo = backgroundVideoRef.current;
    const mainVideo = mainVideoRef.current;

    if (!backgroundVideo || !mainVideo) return;

    if (Math.abs(backgroundVideo.currentTime - mainVideo.currentTime) > 0.1) {
      mainVideo.currentTime = backgroundVideo.currentTime;
    }
  };

  useEffect(() => {
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const backgroundVideo = backgroundVideoRef.current;
    const mainVideo = mainVideoRef.current;

    backgroundVideo?.addEventListener('play', handlePlay);
    backgroundVideo?.addEventListener('pause', handlePause);

    let intervalId: number | undefined;

    if (isPlaying) {
      intervalId = window.setInterval(syncVideos, 1000);
    }

    return () => {
      backgroundVideo?.removeEventListener('play', handlePlay);
      backgroundVideo?.removeEventListener('pause', handlePause);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying]);

  return (
    <Template styles={{ position: 'relative', paddingBottom: '40px' }}>
      <>
      <div className={m.overlay}>
        <motion.div 
          className={m.backgroundBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={StepOutShadows}
        />
        <video
          className={m.backgroundPlayer}
          ref={backgroundVideoRef}
          src={Video}
          // controls
          autoPlay
          loop
          muted
        />
      </div>
      <div className={m.mainScreen}>
        <video
          className={m.backgroundPlayer}
          ref={mainVideoRef}
          src={Video}
          // controls
          autoPlay
          loop
          muted
        />
      </div>
      <motion.div 
        className={m.other}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={topToBottom}
      >
        <p className={m.desc}>
          Мы предлагаем свои профессиональные услуги по моллированию стекла
          любого размера и толщины. Изготовим криволинейные стеклянные
          конструкции любых форм и радиусов.
        </p>
        <Button text="О Компании" icons={Buld} isRouteBtn={true} routePath="/about" />
      </motion.div>
      </>
    </Template>
  );
};

export default VideoPlayer;