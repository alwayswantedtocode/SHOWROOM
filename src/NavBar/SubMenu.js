import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../GlobalContext";
import { Link, NavLink } from "react-router-dom";

const SubMenu = () => {
  const {
    openSubMenu,
    closeSubMenu,
    isSubMenuOpen,
    page: { Links, names },
  } = useGlobalContext();
  const [column, setColumn] = useState("col-4");
  useEffect(() => {
    setColumn("col-4");
    if (Links.length === 4) {
      setColumn("col-4");
    }
    if (Links.column > 4) {
      setColumn("col-4");
    }
  }, [Links]);
  return (
    <aside className={`${isSubMenuOpen ? "subMenu show" : "subMenu"}`}>
      {/* <h4>{page}</h4> */}

      {Links.map((Link, firstIndex) => {
        const { names } = Link;
        return (
          <div className="brandContainer" key={firstIndex}>
            <h3 className="brand-name">{names}</h3>
            {/* <div className={`brandNav${column}`}> */}
            <div className="brandNav">
              {Link.subLinks.map((subLink, secondIndex) => {
                const { image, Description, URL } = subLink;
                return (
                  <NavLink className="brand-image" key={secondIndex}>
                    <img src={image} alt={Description} className="image" />
                    <p>{Description}</p>
                  </NavLink>
                );
              })}
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default SubMenu;
