import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const clickHandler = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <nav className="h-auto w-full md:h-24 p-2 bg-blue-200  mx-auto flex justify-between md:items-center ">
      <Link to="/">
      <h2 className="text-4xl font-bold"><FcHome/></h2>
      </Link>
      <div className={toggleNav ? 'flex flex-col gap-4 md:inline' : 'hidden md:inline'}>
        <NavLink className="nav-link"  onClick={clickHandler} to="/">
          Todo Tab
        </NavLink>
      <NavLink className="nav-link"  onClick={clickHandler} to="/form-validation">
      Form Validation
        </NavLink>
        <NavLink className="nav-link" onClick={clickHandler} activeClassName to="/event-handlers"> Event Handlers </NavLink>

        {/* <NavLink className="nav-link"  onClick={clickHandler} to="/rest-api">
          RestApi
  </NavLink>*/}
      </div>
      <button
        className="inline md:hidden self-start nav-link"
        onClick={clickHandler}
      >
        {toggleNav ? <FaBars /> : <AiOutlineClose />}
      </button>
    </nav>
  );
};

export default Navbar;