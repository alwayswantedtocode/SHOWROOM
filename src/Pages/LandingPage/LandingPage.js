import React from "react";
import VideoSlide from "./videoSlider/VideoSlide";
import VehiclesSlide from "./newVehicles/VehiclesSlide";
import Electrified from "./Electrified/Electrified";
const LandingPage = () => {
  return (
    <section className="landing-page-container">
      <VideoSlide />
      <VehiclesSlide />
      <Electrified />
    </section>
  );
};

export default LandingPage;
