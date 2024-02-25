import m from "./MediaPlayer.module.scss";
import { CSSProperties, FC, useEffect, useRef } from "react";

type TProps = {
  src: string;
  styles?: CSSProperties;
  defaultVolume?: number;
};

const MediaPlayer: FC<TProps> = ({ src, styles, defaultVolume }) => {
  const videoRef = useRef<HTMLVideoElement | any>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = defaultVolume;
    }
  }, [defaultVolume]);

  return (
    <div className={m.overLayer}>
      <video 
        className={m.videoPlayer}
        style={styles} 
        ref={videoRef} 
        src={src} 
        controls
        controlsList="nodownload"
      />
    </div>
  );
};

export default MediaPlayer;
