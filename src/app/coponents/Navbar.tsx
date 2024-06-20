import React from "react";
import Nav from "./nav";

const Navbar = () => {
  return (
    <div className={"sticky z-10 shadow-sm h-20  top-0 w-full"}>
      <Nav />
    </div>
  );
};

export default Navbar;
