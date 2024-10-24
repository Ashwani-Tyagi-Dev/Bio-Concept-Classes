import React from "react";
import logo from "../images/lW.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  //todo
  // const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <img src={logo} className="navbar-brand" alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fs-5">
            <li className="nav-item">
              <Link className="nav-link active ml-5" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active ml-5" to="/classes">
                Classes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active ml-5" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active ml-5" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
