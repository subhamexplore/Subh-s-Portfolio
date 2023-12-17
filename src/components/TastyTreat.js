import React, { useEffect, useRef } from 'react';
import "../Assets/styles/TastyTreat.scss";
import TastyTreat1 from "../Assets/images/Frame 16.png";
import TastyTreat2 from "../Assets/images/Rectangle 1140.png";
import TastyTreat3 from "../Assets/images/Rectangle 1141.png";
import $ from "jquery";
import { gsap } from "gsap";

const TastyTreat = () => {

  useEffect(() => {
    $(".button--bubble").each(function () {
      var $circlesTopLeft = $(this).parent().find(".circle.top-left");
      var $circlesBottomRight = $(this).parent().find(".circle.bottom-right");

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
        $(this).parent().find(".button.effect-button"),
        0.8,
        { scaleY: 1.1 },
        0.1
      );
      btTl.add(tlBt2, 0.2);
      btTl.to(
        $(this).parent().find(".button.effect-button"),
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

  const ttRef = useRef(null);

  // Use effect to scroll to the top when the component mounts
  useEffect(() => {
    ttRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);
  return (
    <div style={{ paddingTop: "100px" }} ref={ttRef} id='tt-page'>
      <div>
        <p className="small-head-bbt">Tasty Treat</p>
        <p className="head-bbt lh-head-bbt">Mouth Watering Castle</p>
        <span
          className="span-text"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-10px",
            fontFamily: "gilroy",
            marginBottom:'45px'
          }}
        >
          <span>3D Design</span> <div className="dot"></div>{" "}
          <span>Ideation</span>
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom:'45px'
          }}
        >
          <img src={TastyTreat1} className="proj-part-img1" alt="" />
        </div>
        <div className="project-brief">
          <p className="project-brief-head">The Project brief</p>
          <div className="date-week-dot">
            <p className="date-week-dot-single">2022</p>
            <div className="fst"></div>
            <p className="date-week-dot-single">2 WEEKS</p>
            <div className="fst"></div>
            <p className="date-week-dot-single">3D DESIGN</p>
          </div>
          <p className="bbt-para">
          Stepping into my first big 3D project, 'The Tastiest Treat!' is a playful take on Hansel and Gretel's world. Picture a chocolate house with exciting flavors! It's not just chocolate; find your favorite flavor castle in this sweet adventure. This project is a blend of creativity, storytelling, and the joy of discovery – can't wait to share the magic!
          </p>
          <br /><br />
        </div>
        <div style={{display:'flex', justifyContent:'center'}} className="tt-img-div">
            <img src={TastyTreat2} className="tt-tt-img-2" alt="" />
            <img src={TastyTreat3} className="tt-tt-img-3" alt="" />
        </div>

        <div className="ye-div">
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

          <span className="button--bubble__container">
            <a href="https://www.behance.net/gallery/135513669/Tasty-Treat-(3D-Project)" target="_blank" className="button button--bubble">
              Behance Case Study
            </a>
            <span className="button--bubble__effect-container">
              <span className="circle top-left"></span>
              <span className="circle top-left"></span>
              <span className="circle top-left"></span>

              <span className="button effect-button"></span>

              <span className="circle bottom-right"></span>
              <span className="circle bottom-right"></span>
              <span className="circle bottom-right"></span>
            </span>
          </span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="footer" style={{backgroundColor:"rgba(249, 249, 249, 1)"}}>
      <div className="links">
          <a style={{textDecoration:'none', color:'black'}} href="https://www.linkedin.com/in/subhasmita-pradhan-675456158/" target="_blank"><p>Linkedin</p></a>
          <div className="dot-foot"></div>
          <a style={{textDecoration:'none', color:'black'}} href="https://www.behance.net/subhasmpradhan1" target="_blank"><p>Behance</p></a>
          <div className="dot-foot"></div>
          <a style={{textDecoration:'none', color:'black'}} href="https://www.instagram.com/subhs.design/" target="_blank"><p>Instagram</p></a>
          <div className="dot-foot"></div>
          <a
            className="ht"
            href="#tt-page"
          >
            Back to top
          </a>
        </div>
        <p
          style={{
            textAlign: "center",
            fontFamily: "gilroy",
            fontWeight: "700",
            color: "rgba(139, 139, 139, 1)",
          }}
        >
          Copyrigh@2023 Subhs
        </p>
      </div>
    </div>
  );
};

export default TastyTreat;
