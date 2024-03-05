import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const content = (
    <>
      <div className="">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between text-white">
        <div className="text-white">
          <span>Logo</span>
        </div>
        <div>
          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
