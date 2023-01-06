import React from "react";
import { useGlobalContext } from "../GlobalContext";
import { FaTimes } from "react-icons/fa";

const SlideMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useGlobalContext();

  return (
    <aside
      className={`${
        isMobileMenuOpen ? "slideMenu-wrapper show" : "slideMenu-wrapper "
      }`}
    >
      <div className="slideMenu">
        <button className="closeBtn" onClick={closeMobileMenu}>
          <FaTimes />
        </button>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
        consectetur laborum velit itaque incidunt iusto enim nesciunt
        temporibus, omnis in ipsum debitis voluptates! Est quod id nobis commodi
        consequuntur ipsa.
      </div>
    </aside>
  );
};
export default SlideMenu;
