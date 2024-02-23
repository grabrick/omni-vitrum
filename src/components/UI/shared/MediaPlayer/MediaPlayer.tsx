import m from "./MediaPlayer.module.scss";
import { FC, useEffect, useRef } from "react";

type TProps = {
  src: string;
  defaultVolume?: number;
};

const MediaPlayer: FC<TProps> = ({ src, defaultVolume }) => {
  const videoRef = useRef<HTMLVideoElement | any>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = defaultVolume;
    }
  }, [defaultVolume]);

  return (
    <div className={m.overLayer}>
      <video className={m.videoPlayer} ref={videoRef} src={src} controls />
    </div>
  );
};

export default MediaPlayer;
