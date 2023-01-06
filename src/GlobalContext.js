import React, { useState, useContext } from "react";
import SubMenuLinks from "./NavBar/NavbarData";

const GlobalContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // const [location, setLocation]= useState({});

  const [page, setPage] = useState({
    Links: [],
    names: "",
  }); //refer to read.me

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openSubMenu = (text) => {
    const page = SubMenuLinks.find(
      (submenuContent) => submenuContent.page === text
    );
    setPage(page);
    setIsSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        openMobileMenu,
        closeMobileMenu,
        isMobileMenuOpen,
        openSubMenu,
        closeSubMenu,
        isSubMenuOpen,
        page,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
