import React, { useEffect, useRef, Suspense } from "react";
import "../Assets/styles/Home.scss";
import Bounce from "../Assets/images/bounce.png";
import LeftImg from "../Assets/images/landing_image.png";
import phone1 from "../Assets/images/Tip of the day.png";
import phone2 from "../Assets/images/Explore.png";
import card2 from "../Assets/images/card2.png";
import card3 from "../Assets/images/card3.png";
import bulb from "../Assets/images/bulb.png";
import cc1 from "../Assets/images/Rectangle 14.png";
import cc2 from "../Assets/images/Rectangle 12.png";
import cc3 from "../Assets/images/Rectangle 119.png";
import cc4 from "../Assets/images/Rectangle 16.png";
import cc5 from "../Assets/images/Rectangle 17.png";
import cc6 from "../Assets/images/Rectangle 118.png";
import cc7 from "../Assets/images/Rectangle 15.png";
import cc8 from "../Assets/images/Rectangle 120.png";
import port1 from "../Assets/images/Rectangle 18.png";
import port2 from "../Assets/images/Rectangle 19.png";
import port3 from "../Assets/images/Rectangle 20.png";
import calm from "../Assets/images/image 338.png";
import last from "../Assets/images/last.png";
import last1 from "../Assets/images/last1.png";
import star from "../Assets/images/Star.png";
import silent from "../Assets/images/silent.png";
import wave from "../Assets/images/wave.png";
import { Link } from "react-router-dom";
import $ from "jquery";
import { gsap } from "gsap";
import Spline from "@splinetool/react-spline";
import { Puff } from 'react-loader-spinner'
import hover from '../Assets/images/hover.png'

const Home = ({ home, sethome, project, setproject, about, setabout }) => {
  useEffect(() => {
    $(".butto--bubbl").each(function () {
      var $circlesTopLeft = $(this).parent().find(".circl.top-left");
      var $circlesBottomRight = $(this).parent().find(".circl.bottom-right");

      var tl = gsap.timeline();
      var tl2 = gsap.timeline();

      var btTl = gsap.timeline({ paused: true });

      tl.to($circlesTopLeft, 1.2, {
        x: -25,
        y: -25,
        scaleY: 2,
        ease: "power0.inOut",
      });
      tl.to($circlesTopLeft.eq(0), 0.1, { scale: 0.2, x: "+=6", y: "-=2" });
      tl.to(
        $circlesTopLeft.eq(1),
        0.1,
        { scaleX: 1, scaleY: 0.8, x: "-=10", y: "-=7" },
        "-=0.1"
      );
      tl.to(
        $circlesTopLeft.eq(2),
        0.1,
        { scale: 0.2, x: "-=15", y: "+=6" },
        "-=0.1"
      );
      tl.to($circlesTopLeft.eq(0), 1, {
        scale: 0,
        x: "-=5",
        y: "-=15",
        opacity: 0,
      });
      tl.to(
        $circlesTopLeft.eq(1),
        1,
        { scaleX: 0.4, scaleY: 0.4, x: "-=10", y: "-=10", opacity: 0 },
        "-=1"
      );
      tl.to(
        $circlesTopLeft.eq(2),
        1,
        { scale: 0, x: "-=15", y: "+=5", opacity: 0 },
        "-=1"
      );

      var tlBt1 = gsap.timeline();
      var tlBt2 = gsap.timeline();

      tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
      tlBt1.add(tl);

      tl2.set($circlesBottomRight, { x: 0, y: 0 });
      tl2.to($circlesBottomRight, 1.1, { x: 30, y: 30, ease: "power0.inOut" });
      tl2.to($circlesBottomRight.eq(0), 0.1, {
        scale: 0.2,
        x: "-=6",
        y: "+=3",
      });
      tl2.to(
        $circlesBottomRight.eq(1),
        0.1,
        { scale: 0.8, x: "+=7", y: "+=3" },
        "-=0.1"
      );
      tl2.to(
        $circlesBottomRight.eq(2),
        0.1,
        { scale: 0.2, x: "+=15", y: "-=6" },
        "-=0.2"
      );
      tl2.to($circlesBottomRight.eq(0), 1, {
        scale: 0,
        x: "+=5",
        y: "+=15",
        opacity: 0,
      });
      tl2.to(
        $circlesBottomRight.eq(1),
        1,
        { scale: 0.4, x: "+=7", y: "+=7", opacity: 0 },
        "-=1"
      );
      tl2.to(
        $circlesBottomRight.eq(2),
        1,
        { scale: 0, x: "+=15", y: "-=5", opacity: 0 },
        "-=1"
      );

      tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
      tlBt2.add(tl2);

      btTl.add(tlBt1);
      btTl.to(
        $(this).parent().find(".butto.effect-butto"),
        0.8,
        { scaleY: 1.1 },
        0.1
      );
      btTl.add(tlBt2, 0.2);
      btTl.to(
        $(this).parent().find(".butto.effect-butto"),
        1.8,
        { scale: 1, ease: "elastic.out(1.2, 0.4)" },
        1.2
      );

      btTl.timeScale(2.6);

      $(this).on("mouseover", function () {
        btTl.restart();
      });
    });
  }, []);
  const homeRef = useRef(null);

  // Use effect to scroll to the top when the component mounts
  useEffect(() => {
    homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  const [isSplineLoaded, setIsSplineLoaded] = React.useState(false);
  const onload = (spline) => {
    setTimeout(() => {
      setIsSplineLoaded(true);
    }, 1000);
  };

  return (
    <>
      <section id="home-top" className="homii" ref={homeRef}>
        <div className="Home-top">
          <div className="card img-card-left">
            <img src={LeftImg} className="card-img-top img-left" alt="..." />
          </div>
          <div className="spline-div">
            <Spline
              scene="https://prod.spline.design/lYSB0PUts5pS6fKu/scene.splinecode"
              className="spline-char"
              onLoad={onload}
            />
            <img src={hover} al0t="" className="hover-on-me" />
            {isSplineLoaded ? null : (
              <div className="splineLoad">
              <div>
              <Puff
              visible={true}
                height="80"
                width="80"
                color="white"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
              <p style={{color:'white', textAlign:'center', margin:'10px 0', fontSize:'18px'}}>Loading...</p>
              </div>
              </div>
            )}
            <img src={Bounce} className="animation img-right" alt="" />
          </div>
        </div>
      </section>
      <div className="wid-section">
        <div className="what-i-do">
          <p className="my-work">What I do</p>
          <h3
            className="heading-work-wid"
            style={{ color: "rgba(8, 0, 36, 1)" }}
          >
            <span>
              <span>
                <img
                  style={{ marginTop: "-37px", marginRight: "-40px" }}
                  src={star}
                  height={50}
                  alt=""
                />
              </span>{" "}
              Crafting{" "}
            </span>
            <span style={{ color: "rgba(153, 141, 248, 1)" }}>products</span>{" "}
            surfing user's silent{" "}
            <span>
              <img src={silent} height={40} alt="" />
            </span>{" "}
            waves <img src={wave} height={40} alt="" />
          </h3>
        </div>
        <div className="body-wave"></div>
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
        <div className="ye-div-ea">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>

          <span className="butto--bubbl__containe button-home-exp">
            <Link
              to={"/project"}
              onClick={() => {
                sethome(false);
                setproject(true);
                setabout(false);
              }}
              className="butto butto--bubbl"
            >
              EXPLORE ALL
            </Link>
            <span className="butto--bubbl__effect-containe">
              <span className="circl top-left"></span>
              <span className="circl top-left"></span>
              <span className="circl top-left"></span>

              <span className="butto effect-butto"></span>

              <span className="circl bottom-right"></span>
              <span className="circl bottom-right"></span>
              <span className="circl bottom-right"></span>
            </span>
          </span>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="exploration">
        <div style={{ textAlign: "center", paddingTop: "50px" }}>
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
        {/* <div className="card-carousal-type">
          <img
            src={cc1}
            className="cc-cc-img1"
            alt=""
            style={{ margin: "70px 0" }}
          />
          <img
            src={cc2}
            className="cc-cc-img2"
            alt=""
            style={{ margin: "0 30px" }}
          />
          <img
            src={cc3}
            className="cc-cc-img1"
            alt=""
            style={{ margin: "70px 0" }}
          />
          <img
            src={cc4}
            className="cc-cc-img2"
            alt="..."
            style={{ margin: "0 30px" }}
          />
        </div> */}
        <div class="wrapper">
          <div class="slider">
            <div class="slide-track">
              <div class="slide">
                <img src={cc1} />
              </div>

              <div class="slide1">
                <img src={cc2} />
              </div>

              <div class="slide">
                <img src={cc3} />
              </div>

              <div class="slide1">
                <img src={cc4} />
              </div>

              <div class="slide">
                <img src={cc5} />
              </div>

              <div class="slide1">
                <img src={cc6} />
              </div>

              <div class="slide">
                <img src={cc7} />
              </div>

              <div class="slide1">
                <img src={cc8} />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <h4 className="below-caro">
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
            fontSize: "26px",
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
              <div className="mlh-sc">
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
              <div className="ye-div-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  className="goo"
                >
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="10"
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                        result="goo"
                      />
                      <feComposite in="SourceGraphic" in2="goo" />
                    </filter>
                  </defs>
                </svg>

                <span className="butto--bubbl__containe">
                  <Link
                    to={"/about"}
                    onClick={() => {
                      sethome(false);
                      setproject(false);
                      setabout(true);
                    }}
                    className="butto butto--bubbl"
                  >
                    READ IT NOW
                  </Link>
                  <span className="butto--bubbl__effect-containe">
                    <span className="circl top-left"></span>
                    <span className="circl top-left"></span>
                    <span className="circl top-left"></span>

                    <span className="butto effect-butto"></span>

                    <span className="circl bottom-right"></span>
                    <span className="circl bottom-right"></span>
                    <span className="circl bottom-right"></span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <img src={last} alt="" className="lhighl" />
          <img src={last1} alt="" className="lhighl1" />
        </div>
      </div>

      <div className="footer">
        <div className="links">
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://www.linkedin.com/in/subhasmita-pradhan-675456158/"
            target="_blank"
          >
            <p>Linkedin</p>
          </a>
          <div className="dot-foot"></div>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://www.behance.net/subhasmpradhan1"
            target="_blank"
          >
            <p>Behance</p>
          </a>
          <div className="dot-foot"></div>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://www.instagram.com/subhs.design/"
            target="_blank"
          >
            <p>Instagram</p>
          </a>
          <div className="dot-foot"></div>
          <a className="ht" href="#home-top">
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
          Copyright@2023 Subhs <span className="gara">|</span> Developed by
          <span><a className="mx-1" style={{textDecoration:'none', color:'rgb(139, 139, 139)'}} href="https://www.linkedin.com/in/subham-parida-48442a245/" target="_blank">Subham Parida</a></span>{" "}
        </p>
      </div>
    </>
  );
};

export default Home;
