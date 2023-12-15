import React from "react";
import "../Assets/styles/Home.css";
import Bounce from "../Assets/images/bounce.png";
import LeftImg from "../Assets/images/landing_image.png";
import img from "../Assets/images/Frame 65.png";
import phone1 from "../Assets/images/Tip of the day.png";
import phone2 from "../Assets/images/Explore.png";
import card2 from "../Assets/images/card2.png";
import card3 from "../Assets/images/card3.png";
import bulb from "../Assets/images/bulb.png";
import cc1 from "../Assets/images/Rectangle 12.png";
import cc2 from "../Assets/images/Rectangle 14.png";
import cc3 from "../Assets/images/Rectangle 15.png";
import cc4 from "../Assets/images/Rectangle 16.png";
import port1 from "../Assets/images/Rectangle 18.png";
import port2 from "../Assets/images/Rectangle 19.png";
import port3 from "../Assets/images/Rectangle 20.png";
import calm from "../Assets/images/image 338.png";
import last from "../Assets/images/last.png";
import last1 from '../Assets/images/last1.png'
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  return (
    <>
      <section id="home-top" style={{ backgroundColor: "rgba(8, 0, 37, 1)" }}>
        <div className="Home-top">
          <div className="card img-card-left">
            <img src={LeftImg} className="card-img-top img-left" alt="..." />
          </div>
          <div className="card img-card-right my-animation">
            <img src={Bounce} className="card-img-top img-right" alt="..." />
          </div>
        </div>
      </section>
      <div>
        <img src={img} alt="" className="wave-img-text" />
      </div>

      <div className="works">
        <div className="work-in">
          <p className="my-work">My Works</p>
          <div className="">
            <h3 className="heading-work" style={{ marginTop: "-10px" }}>
              Peek into my{" "}
            </h3>
            <h3
              className="heading-work"
              style={{ marginTop: "-15px", color: "rgba(153, 141, 248, 1)" }}
            >
              Experince
            </h3>
          </div>
        </div>
        <div
          className="card-work"
          style={{ overflow: "auto", overflowY: "hidden" }}
        >
          <div className="text-part">
            <p className="ui-ux">UI/UX PROJECT</p>
            <h1 className="name-text-part">Ayushtha</h1>
            <p className="para-text-part">
              A solution to help people manage a healthy life in the current
              busy living schedule with small hints on doing things the right
              way.{" "}
            </p>
            <span className="span-text">
              <span>UI Design</span> <div className="dot"></div>{" "}
              <span>UX Research</span> <div className="dot"></div>{" "}
              <span>Presentation</span>
            </span>
            <Link to={"/ayushtha"}>
              <button className="check-detail">Check Details</button>
            </Link>
          </div>
          <img
            src={phone2}
            style={{ marginTop: "-230px" }}
            alt=""
            height={550}
            className="phone2"
          />
          <img
            src={phone1}
            style={{ marginTop: "-30px" }}
            alt=""
            height={550}
            className="phone1"
          />
        </div>
        <div className="next-cards">
          <div className="card2">
            <div className="text-part text-part-2">
              <p className="ui-ux2">FUN PROJECT</p>
              <h1 className="name-text-part2">Tasty Treat</h1>
              <p className="para-text-part2">
                Introducing my versions of Chocolate House in all my favourite
                flavours, with all the toppings. Idea expressed through 3D
                Design.
              </p>
              <span className="span-text2">
                <span>3D Design</span> <div className="dot2"></div>{" "}
                <span>Sketching</span> <div className="dot2"></div>{" "}
                <span>Lighting and Texture</span>
              </span>
              <Link to={"/tastyTreat"}>
                <button className="check-detail2">Check Details</button>
              </Link>
            </div>
            <img src={card2} alt="" className="imgPartSsmall2" />
          </div>
          <div className="card3">
            <div className="text-part text-part-3">
              <p className="ui-ux3" style={{ color: "rgba(248, 219, 70, 1)" }}>
                FUN PROJECT
              </p>
              <div style={{ display: "flex" }}>
                <h1 className="name-text-part3">Sheaf Icons</h1>
                <img
                  src={bulb}
                  style={{ marginLeft: "10px", marginTop: "-5px" }}
                  height={65}
                  alt=""
                />
              </div>
              <p className="para-text-part3">
                A consistent ravishing icon pack of 49 icons related to events
                of college life covering everything from the hard-working days
                to the pizza party nights.
              </p>
              <span className="span-text3">
                <span>Iconography</span> <div className="dot3"></div>{" "}
                <span>Research</span> <div className="dot3"></div>{" "}
                <span>Presentation</span>
              </span>
              <Link to={"/sheafIcons"}>
                <button className="check-detail3">Check Details</button>
              </Link>
            </div>
            <img src={card3} alt="" className="imgPartSsmall3" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to={'/project'}><button className="exploreAll">EXPLORE ALL</button></Link>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="exploration">
        <div style={{ textAlign: "center" }}>
          <p className="my-work" style={{ paddingTop: "80px" }}>
            Daily Exploraton
          </p>
          <div className="">
            <h3 className="heading-work" style={{ marginTop: "-10px" }}>
              I love to explore
            </h3>
            <h3
              className="heading-work"
              style={{ marginTop: "-15px", color: "rgba(153, 141, 248, 1)" }}
            >
              the Unknown
            </h3>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="card-carousal">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={cc1} height={320} alt="" />
                  <img
                    src={cc2}
                    height={400}
                    alt=""
                    style={{ margin: "0 30px" }}
                  />
                  <img src={cc3} height={320} alt="" />
                </div>
              </div>
              <div className="carousel-item">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={cc4} height={400} alt="..." />
                  <img
                    src={cc4}
                    height={320}
                    alt="..."
                    style={{ margin: "0 30px" }}
                  />
                  <img src={cc4} height={400} alt="..." />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <h4
          style={{
            width: "50%",
            textAlign: "center",
            margin: "auto",
            color: "rgba(217, 217, 217, 0.5)",
            fontFamily: "gilroy",
          }}
        >
          Exploring various styles and tools is like navigating the vast design
          ocean. I enjoy challenges and getting hands-on.
        </h4>
        <br />
        <br />
        <br />
      </div>

      <div className="make-sense">
        <div style={{ textAlign: "center" }}>
          <p className="my-work" style={{ paddingTop: "80px" }}>
            Makes Sense?
          </p>
          <div className="">
            <h3 className="heading-work" style={{ marginTop: "-10px" }}>
              Swimming not my forte
            </h3>
            <h3
              className="heading-work"
              style={{ marginTop: "-15px", color: "rgba(153, 141, 248, 1)" }}
            >
              But I love the Ocean
            </h3>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="subhs-img">
          <img src={port3} className="port3" alt="..." />
          <img
            src={port1}
            className="port1"
            alt="..."
            style={{ margin: "0 30px" }}
          />
          <img className="port2" src={port2} alt="..." />
        </div>

        <div className="toggle-img">
          <div className="subhs-img2">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={port1}
                  className="port11"
                  alt="..."
                  style={{ margin: "0 30px" }}
                />
              </div>
              <div className="subhs-img-bottom">
                <img src={port3} className="port33" alt="..." />
                <img className="port22" src={port2} alt="..." />
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <h4
          style={{
            width: "50%",
            textAlign: "center",
            margin: "auto",
            color: "rgba(217, 217, 217, 0.5)",
            fontFamily: "gilroy",
          }}
        >
          My soul's calming haven! <img src={calm} height={40} alt="" />
        </h4>
        <br />
        <br />
        <br />
      </div>

      <div>
        <div className="above-links">
          <div className="text-part-above-link">
            <div className="above-links-sub">
              <p className="my-work" style={{ paddingTop: "80px" }}>
                My Life Highlights
              </p>
              <div className="">
                <h3 className="heading-work" style={{ marginTop: "-10px" }}>
                  Voyages Through
                </h3>
                <h3
                  className="heading-work"
                  style={{
                    marginTop: "-15px",
                    color: "rgba(153, 141, 248, 1)",
                  }}
                >
                  Life's Chapters
                </h3>
              </div>
              <button className="exploreAll">READ IT NOW</button>
            </div>
          </div>
          <img src={last} alt="" className="lhighl" />
          <img src={last1} alt="" className="lhighl1" />
        </div>
      </div>

      <div className="footer">
        <div className="links">
          <a style={{textDecoration:'none', color:'black'}} href="https://www.linkedin.com/in/subhasmita-pradhan-675456158/" target="_blank"><p>Linkedin</p></a>
          <div className="dot-foot"></div>
          <a style={{textDecoration:'none', color:'black'}} href="https://www.behance.net/subhasmpradhan1" target="_blank"><p>Behance</p></a>
          <div className="dot-foot"></div>
          <a style={{textDecoration:'none', color:'black'}} href="https://www.instagram.com/subhs.design/" target="_blank"><p>Instagram</p></a>
          <div className="dot-foot"></div>
          <a
            className="ht"
            href="#home-top"
          >
            Back to top
          </a>
        </div>
        <p
        className="foots-foot"
          style={{
            textAlign: "center",
            fontFamily: "gilroy",
            fontWeight: "700",
            color: "rgba(139, 139, 139, 1)",
          }}
        >
          Copyrigh@2023 Subhs <span className="gara">|</span> Developed by Subham Parida{" "}
        </p>
      </div>

      <div className="nothing"></div>
    </>
  );
};

export default Home;
