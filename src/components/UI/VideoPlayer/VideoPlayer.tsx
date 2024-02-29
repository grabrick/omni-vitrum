import React, { useEffect, useRef, useState } from "react";
import m from "./VideoPlayer.module.scss";
import Buld from "@/assets/icons/Building.svg";
import Button from "../shared/Button/Button";
import Template from "../shared/Template/Template";
import { motion } from "framer-motion";
import { StepOutShadows, topToBottom } from "@/assets/animation/animation";
import { useWindowSize } from "@/helpers/useWindowSize";

const VideoPlayer = () => {
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [backgroundVideoReady, setBackgroundVideoReady] = useState(false);
  const [mainVideoReady, setMainVideoReady] = useState(false);
  const { width } = useWindowSize();

  const syncVideos = () => {
    const backgroundVideo = backgroundVideoRef.current;
    const mainVideo = mainVideoRef.current;

    if (
      !backgroundVideo ||
      !mainVideo ||
      !backgroundVideoReady ||
      !mainVideoReady
    )
      return;

    if (Math.abs(backgroundVideo.currentTime - mainVideo.currentTime) > 0.1) {
      mainVideo.currentTime = backgroundVideo.currentTime;
    }
  };

  const handleVideoReady = (videoRef: any) => {
    if (videoRef === backgroundVideoRef.current) {
      setBackgroundVideoReady(true);
    } else if (videoRef === mainVideoRef.current) {
      setMainVideoReady(true);
    }
  };

  useEffect(() => {
    const backgroundVideo = backgroundVideoRef.current;
    const mainVideo = mainVideoRef.current;

    const handlePlay = () => {
      setIsPlaying(true);
      handleVideoReady(backgroundVideo);
      handleVideoReady(mainVideo);
    };

    const handlePause = () => setIsPlaying(false);

    backgroundVideo?.addEventListener("play", handlePlay);
    backgroundVideo?.addEventListener("pause", handlePause);
    mainVideo?.addEventListener("play", handlePlay);
    mainVideo?.addEventListener("pause", handlePause);
    backgroundVideo?.addEventListener("canplaythrough", () =>
      handleVideoReady(backgroundVideoRef.current)
    );
    mainVideo?.addEventListener("canplaythrough", () =>
      handleVideoReady(mainVideoRef.current)
    );

    let intervalId: any;

    if (isPlaying && backgroundVideoReady && mainVideoReady) {
      intervalId = setInterval(syncVideos, 1000);
    }

    return () => {
      backgroundVideo?.removeEventListener("play", handlePlay);
      backgroundVideo?.removeEventListener("pause", handlePause);
      mainVideo?.removeEventListener("play", handlePlay);
      mainVideo?.removeEventListener("pause", handlePause);
      backgroundVideo?.removeEventListener("canplaythrough", () =>
        handleVideoReady(backgroundVideoRef.current)
      );
      mainVideo?.removeEventListener("canplaythrough", () =>
        handleVideoReady(mainVideoRef.current)
      );

      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, backgroundVideoReady, mainVideoReady]);

  return (
    <Template styles={{ position: "relative", paddingBottom: "40px" }}>
      <div className={m.wrapper}>
        <div className={m.overlay}>
          <motion.div
            className={m.backgroundBlur}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={StepOutShadows}
          />
          {width && width > 839 && (
            <video
              className={m.backgroundPlayer}
              ref={backgroundVideoRef}
              src={"https://bentglass.ru/public/aboutVideo/aboutVideo.mp4"}
              autoPlay
              preload="auto"
              loop
              muted
            />
          )}
        </div>
        <div className={m.mainScreen}>
          {width && width > 839 && (
            <video
              className={m.backgroundPlayer}
              ref={mainVideoRef}
              src={"https://bentglass.ru/public/aboutVideo/aboutVideo.mp4"}
              autoPlay
              preload="auto"
              loop
              muted
            />
          )}
          {width && width < 839 && (
            <video
              className={m.backgroundPlayer}
              src={"https://bentglass.ru/public/aboutVideo/aboutVideo.mp4"}
              poster="../../../assets/images/poster.jpg"
              controls
              muted
            />
          )}
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
          <Button
            text="О Компании"
            icons={Buld}
            isRouteBtn={true}
            routePath="/about"
          />
        </motion.div>
      </div>
    </Template>
  );
};

export default VideoPlayer;
