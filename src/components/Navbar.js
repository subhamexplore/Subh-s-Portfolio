import React from "react";
import "../Assets/styles/Navbar.css";
import Logo from "../Assets/images/logo.png";
import LogoAlt from '../Assets/images/logoalt.png'
import ResumeBtn from "../Assets/images/dresume.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import resume from "./Subhasmita Pradhan.pdf"



const Navbar = () => {
  const [home, sethome] = useState(true);
  const [project, setproject] = useState(false);
  const [about, setabout] = useState(false);

  const handleClick = () => {
    const link = document.createElement("a");
    link.download = "SubhasmitaPradhanResume";

    link.href = resume;

    link.click();
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: project||about?'white':"rgba(8, 0, 37, 1)",
          color: "white",
          padding: "0 50px",
        }}
      >
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" href="#">
            <img
              src={project||about?LogoAlt:Logo}
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
            <ul className="navbar-nav mx-auto" style={{backgroundColor:project||about?'rgba(240, 240, 240, 1)':'rgba(255, 255, 255, 0.266)'}}>
              <div className="d-flex">
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
                    color: project|| about ? "black" : "white",
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
                    color: project||about ? "black" : "white",
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
            <div className="d-flex" style={{ cursor: "pointer" }} onClick={handleClick}>
              <img
                src={ResumeBtn}
                alt="doenload_resume"
                height="45"
                style={{ marginRight: "10px" }}
                className="dresume"
              />
              <div style={{ height: "20px" }}>
                <p style={{color: home?'white':'black'}}>Download</p>
                <p style={{ marginTop: "-20px", color: home?'white':'black' }}>Resume</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
