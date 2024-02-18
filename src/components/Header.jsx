import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  //   const [nav, setNav] = useState(false);
  const [navbar, updateNavbar] = useState(false);
  // MenuToggle
  //   const toggleMenu = () => setNav(!nav);

  //    Fixed menubar
  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };
  window.addEventListener("scroll", scrollHandler);

  return (
    <header>
      <div
        className={`w-full h-20 fixed bg-white z-[9000] ${
          navbar
            ? "shadow-sm transition-all duration-500 ease-in shadow-gray-100"
            : "border border-b-1"
        }`}
      >
        <div className="w-full  flex items-center justify-between px-10 h-full ">
          <div className=" w-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center gap-20 h-full">
                <div>
                  <NavLink to="/">
                    <h1 className="text-xl font-lalezar text-first font-semibold">
                      Netcare
                    </h1>
                  </NavLink>
                </div>
                <div className="">
                  <ul className="md:flex hidden">
                    <li
                      // change link color when path changes
                      className={`${
                        location.pathname === "/" ? "active " : ""
                      }`}
                    
                      to="/"
                    >
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li
                      className={`${
                        location.pathname === "/about" ? "active" : ""
                      }`}
                    >
                      <NavLink to="/about" activeClassName="text-blue-400">
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/projects"
                        className={`${
                          location.pathname === "/projects" ? "active" : ""
                        }`}
                      >
                        Projects
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className={`${
                          location.pathname === "/contact" ? "active " : ""
                        }`}
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex gap-3 ">
                  <button className="btn-alt">Login</button>
                  <button className="btn">Signup</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
