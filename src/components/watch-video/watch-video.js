import React, { useRef, useState } from "react";
import styles from "./watch-video.module.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseIcon from '@mui/icons-material/Pause';
import watchvideo from "../../assets/images/watchvideo.png"
import '../../utils/i18next';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ReactPlayer from 'react-player';
import { themes } from "../../utils/themes";
const WatchVideo = () => {
  const videoRef = useRef()
  const [playVideo, setPlayVideo] = useState(true)
  const { videos, lang } = useSelector(state => state.mainReducer);
  const { t } = useTranslation()
  const controller = playVideo ? null : true

  const iconPlay = playVideo ? <PlayCircleOutlineIcon
    className={styles.iconPlay}
    onClick={() => setPlayVideo(false)}
  /> :
    <PauseIcon
      className={`${styles.iconPlay} ${styles.pause}`}
      onClick={() => setPlayVideo(true)}
    />


  return (
    <div style={themes.container}>
      <div className={styles.watchVideo} >
        <ReactPlayer
          className={styles.video}
          controls={controller}
          poster={watchvideo}
          url={lang ? videos[0] && videos[0].video : videos[1] && videos[1].video}
          playing={!playVideo}
          ref={videoRef}
          width="100%"
          height="100%"
        />
        <div className={styles.text}>
          <h2
            className={playVideo ? null : styles.videoText}>
            {t('watch_video')}
          </h2>
        </div>
        <div className={styles.icon}>
          {iconPlay}
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;

