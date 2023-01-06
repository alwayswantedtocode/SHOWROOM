import React, { useState, useRef } from "react";
import Data from "./LandingPagedata";

const VideoSlide = () => {
  const [video, setVideo] = useState(Data);
  const [index, setIndex] = useState(0);

  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div className="SlideContainer">
      {video.map((clips, clipIndex) => {
        const { Video, explore, icon, play, pause, id } = clips;
        return (
          <article key={id}>
            <video className="videoSlide" ref={videoRef}>
              <source src={Video} />
            </video>
            <button className="btn-play" onClick={current.handlePlay}>
              {play}
            </button>
            <button className="btn-pause" onClick={current.handlePause}>
              {pause}
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default VideoSlide;
