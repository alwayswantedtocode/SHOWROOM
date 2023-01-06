import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./NavBar/SharedLayout";
import Brands from "./Pages/Brands/Brands";
import Dealers from "./Pages/Dealers/Dealers";
import Supports from "./Pages/Supports/Support";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SlideMenu from "./NavBar/SlideMenu";
import SubMenu from "./NavBar/SubMenu";
import Footer from "./footer/footer";

import React from "react";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SlideMenu />
        <SubMenu />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="brands" element={<Brands />} />
            <Route path="dealers" element={<Dealers />} />
            <Route path="support" element={<Supports />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
};

export default App;
