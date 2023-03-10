import React, { useState, useRef, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { BiPlayCircle, BiPauseCircle, BiChevronRight } from "react-icons/bi";

const FirstSlide = () => {
  const [isplay, setIsplay] = useState(false);

  const videoRef = useRef();

  const handlePlay = () => {
    if (!isplay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsplay((currentplaying) => !currentplaying);
  };
  useEffect(() => {
    // videoRef.current.play();
    // return () => clearautoplay(autoplay);
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef}>
        <source src="./images/BENZ/A-Class-Sedan/A-Class-SEDAN-Video-use.mp4" />
      </video>

      <div className="btn-container">
        <button className="btn-play   " onClick={handlePlay}>
          {isplay ? <BiPauseCircle /> : <BiPlayCircle />}
        </button>
      </div>
      <div className="description">
        <h3 className="brand-type">A-Class Sedan</h3>
        <p className="chasephrase">The value is in the virtues</p>
      </div>
      <div className="more-info-container">
        <div className="more-info">Learn More</div>
        <div className="nav-arrow">
          <BiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
