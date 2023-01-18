import React from "react";
import { Link } from "react-router-dom";
import LogIn from "./LogIn Comp/LogIn";

const Navbar = () => {
  const dataIsThere = localStorage.getItem("email") !== null;
  const logOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.reload(false);
  };

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark navbar-main fixed-top">
        <ul className="navbar-nav mx-2">
          <li className="nav-item active mx-2">
            <Link to="/" className="nav-link" >
              <strong> CBS</strong>
            </Link>
          </li>
         
          <li className="nav-item active mx-2">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>

          <li className="nav-item mx-2">
            <Link to="/Home" className="nav-link" href="#about">
              ABOUT US
            </Link>
          </li>

          <li className="nav-item mx-2">
            <Link to="/profileView" className="nav-link">
              CONTACT
            </Link>
          </li>
        </ul>
        <div className="collapse navbar-collapse mx-4" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link">
                <i className="bi bi-bell" id="liveToastBtn"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                {dataIsThere ? (
                  <p>
                    {" "}
                    {localStorage.getItem("email")}{" "}
                    <i onClick={logOut} class="bi bi-arrow-left-circle"></i>
                  </p>
                ) : (
                  <i
                    className="bi bi-person"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  ></i>
                )}
              </a>
              
            </li>
          </ul>
        </div>
      </nav>
      <LogIn/>
     
      
    </div>
  );
};

export default Navbar;
