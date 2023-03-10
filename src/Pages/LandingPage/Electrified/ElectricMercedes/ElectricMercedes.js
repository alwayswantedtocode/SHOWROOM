import React, { useState, useRef } from "react";
import data from "./Data";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import "./ElectricMercedes.css";

const ElectricMercedes = () => {
  const [mGoGreen, setMGoGreen] = useState(data);
  const [mDetails, setMDetails] = useState(data);
  const [index, setIndex] = useState(0);

  const greenSlideRef = useRef();
  let electBenzSlide = greenSlideRef.current?.clientWidth;

  const greenDetailsRef = useRef();
  let detailSlide = greenDetailsRef.current?.clientWidth;
  const leftBtnhandle = () => {
    const greenIndexSlide = index > 0 ? index - 1 : 0;
    setIndex(greenIndexSlide);
    // const greenDetailsSlide = index > 0 ? index - 1 : 0;
    // setIndex(greenDetailsSlide);
  };
  const rightBtnhandle = () => {
    const greenIndexSlide =
      index < mGoGreen.length - 1 ? index + 1 : mGoGreen.length - 1;
    setIndex(greenIndexSlide);
  };

  return (
    <div className="M-Green-container">
      <div className="M-Green-slide-container">
        {mGoGreen.map((Green, greenIndex) => {
          const { image, name, id } = Green;
          return (
            <div
              className="M-Green-slider-frame"
              key={id}
              style={{
                transform: "translateX(-" + electBenzSlide * index + "px",
              }}
              ref={greenSlideRef}
            >
              <img
                src={image}
                alt={name}
                style={{ left: greenIndex * 100 + "%" }}
                className={greenIndex === index ? "active" : ""}
              />
            </div>
          );
        })}
      </div>
      <div className="M-Green-btn-container">
        <button className="M-left-click" onClick={leftBtnhandle}>
          <BiChevronLeftCircle />
        </button>
        <button className="M-right-click" onClick={rightBtnhandle}>
          <BiChevronRightCircle />
        </button>
      </div>
      <div className="M-Green-details-container">
        {mDetails.map((detail, detailIndex) => {
          const { id, heading, desc } = detail;
          return (
            <div
              className="M-Green-details-slide"
              key={id}
              style={{
                transform: "translateX(-" + detailSlide * index + "px",
              }}
              ref={greenDetailsRef}
            >
              <div
                className={`M-Green-details ${
                  detailIndex === index ? "active" : ""
                }`}
                style={{ left: detailIndex * 100 + "%" }}
              >
                <h4>{heading}</h4>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="M-green-count-container">
        {mDetails.map((count, countIndex) => {
          const { id } = count;
          return (
            <div
              className={`M-green-count ${
                countIndex === index ? "active" : ""
              }`}
              key={id}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ElectricMercedes;
