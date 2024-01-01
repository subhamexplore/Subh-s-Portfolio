import React from "react";
import "../Assets/styles/Navbar.scss";
import Logo from "../Assets/images/logo.png";
import LogoAlt from "../Assets/images/logoalt.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import resume from "./Subhasmita Pradhan.pdf";

const Navbar = ({home,sethome, project, setproject, about, setabout}) => {
  // const [home, sethome] = useState(true);
  // const [project, setproject] = useState(false);
  // const [about, setabout] = useState(false);

  // const handleClick = () => {
  //   const link = document.createElement("a");
  //   link.download = "SubhasmitaPradhanResume";

  //   link.href = resume;

  //   link.click();
  // };
  const handleClick = () => {
    window.open(resume, '_blank');
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        id="nav-nav-bar"
        style={{
          backgroundColor: project || about ? "white" : "rgba(8, 0, 37, 1)",
          color: "white",
        }}
      >
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" href="#">
            <img
              src={project || about ? LogoAlt : Logo}
              alt="Bootstrap"
              height="40"
              onClick={() => {
                sethome(true);
                setproject(false);
                setabout(false);
              }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <div className="d-flex-div">
                <Link
                  to={"/"}
                  className="nav-link"
                  aria-current="page"
                  style={{
                    color: "black",
                    backgroundColor: home
                      ? "rgba(248, 219, 70, 1)"
                      : "transparent",
                  }}
                  onClick={() => {
                    sethome(true);
                    setproject(false);
                    setabout(false);
                  }}
                >
                  Home
                </Link>
                <Link
                  to={"/project"}
                  className="nav-link"
                  style={{
                    color: project || about ? "black" : "white",
                    backgroundColor: project
                      ? "rgba(248, 219, 70, 1)"
                      : "transparent",
                  }}
                  onClick={() => {
                    sethome(false);
                    setproject(true);
                    setabout(false);
                  }}
                >
                  Projects
                </Link>
                <Link
                  to={"/about"}
                  className="nav-link"
                  style={{
                    color: project || about ? "black" : "white",
                    backgroundColor: about
                      ? "rgba(248, 219, 70, 1)"
                      : "transparent",
                  }}
                  onClick={() => {
                    sethome(false);
                    setproject(false);
                    setabout(true);
                  }}
                >
                  About Me
                </Link>
              </div>
            </ul>
            <div
              className="d-flex-div-2"
              style={{ cursor: "pointer" }}
              onClick={handleClick}
            >
              <span class="pulse-button"></span>
              <div className="dr" style={{ height: "20px" }}>
                <p style={{ color: home ? "white" : "black" }}>Download</p>
                <p className="dr-r" style={{ color: home ? "white" : "black" }}>
                  Resume
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
