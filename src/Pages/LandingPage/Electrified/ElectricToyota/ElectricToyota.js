import React, { useState, useRef } from "react";
import data from "./data";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import "./ElectricToyota.css";

const ElectricToyota = () => {
  const [tGoGreen, setTGoGreen] = useState(data);
  const [tDetails, setTDetails] = useState(data);
  const [index, setIndex] = useState(0);

  const greenSlideRef = useRef();
  let electVenzaSlide = greenSlideRef.current?.clientWidth;

  const greenDetailsRef = useRef();
  let detailSlide = greenDetailsRef.current?.clientWidth;
  const leftBtnhandle = () => {
    const greenIndexSlide = index > 0 ? index - 1 : 0;
    setIndex(greenIndexSlide);
  };
  const rightBtnhandle = () => {
    const greenIndexSlide =
      index < tGoGreen.length - 1 ? index + 1 : tGoGreen.length - 1;
    setIndex(greenIndexSlide);
  };

  return (
    <div className="T-Green-container">
      <div className="T-Green-slide-container">
        {tGoGreen.map((Green, greenIndex) => {
          const { image, name, id } = Green;
          return (
            <div
              className="T-Green-slider-frame"
              key={id}
              style={{
                transform: "translateX(-" + electVenzaSlide * index + "px",
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
      <div className="T-Green-btn-container">
        <button className="T-left-click" onClick={leftBtnhandle}>
          <BiChevronLeftCircle />
        </button>
        <button className="T-right-click" onClick={rightBtnhandle}>
          <BiChevronRightCircle />
        </button>
      </div>
      <div className="T-Green-details-container">
        {tDetails.map((detail, detailIndex) => {
          const { id, heading, desc } = detail;
          return (
            <div
              className="T-Green-details-slide"
              key={id}
              style={{
                transform: "translateX(-" + detailSlide * index + "px",
              }}
              ref={greenDetailsRef}
            >
              <div
                className={`T-Green-details ${
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
      <div className="T-green-count-container">
        {tDetails.map((count, countIndex) => {
          const { id } = count;
          return (
            <div
              className={`T-green-count ${
                countIndex === index ? "active" : ""
              }`}
              key={id}
            ></div>
          );
        })}
      </div>
      {/* <div className="green-count-numeric">
        {index + 1}.{tGoGreen.length}
      </div> */}
    </div>
  );
};

export default ElectricToyota;
