import React from "react";
import "../Assets/styles/TastyTreat.css";
import TastyTreat1 from "../Assets/images/Frame 16.png";
import TastyTreat2 from "../Assets/images/Rectangle 1140.png";
import TastyTreat3 from "../Assets/images/Rectangle 1141.png";

const TastyTreat = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
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
        <a href="https://www.behance.net/gallery/135513669/Tasty-Treat-(3D-Project)" target="_blank" style={{textDecoration:'none'}}>
        <div className="tt-button">
            Behance Case Study
        </div>
        </a>
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
            href="#home-top"
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
