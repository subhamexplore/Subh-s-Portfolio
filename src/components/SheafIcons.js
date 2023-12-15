import React from "react";
import "../Assets/styles/SheafIcons.css";
import SheafIcons1 from "../Assets/images/103.png";
import SheafIcons2 from "../Assets/images/102.png";
import SheafIcons3 from "../Assets/images/101.png";

const SheafIcons = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <div>
        <p className="small-head-bbt">Sheaf Icons</p>
        <p className="head-bbt">A Fun Project</p>
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
          <span>Iconography</span> <div className="dot"></div>{" "}
          <span>Colour Thoery</span>
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom:'45px'
          }}
        >
          <img src={SheafIcons1} className="proj-part-img1" alt="" />
        </div>
        <div className="project-brief">
          <p className="project-brief-head">The Project brief</p>
          <div className="date-week-dot">
            <p className="date-week-dot-single">2022</p>
            <div className="fst"></div>
            <p className="date-week-dot-single">3 DAYS</p>
            <div className="fst"></div>
            <p className="date-week-dot-single">ICONOGRAPHY</p>
          </div>
          <p className="bbt-para">
          In this dedicated and fun project, our aim was to learn the art of crafting icons. We've put together a collection of 49 icons that vividly portray the lively moments of college life. From the hustle of job hunting to the thrill of parties, from promoting a healthy lifestyle to relishing pizza indulgence, our icon set mirrors the diverse scenarios we experience. Take a dive into this creative exploration of college life iconography and enjoy the playful journey!
          </p>
          <br /><br />
        </div>
        <div style={{display:'flex', justifyContent:'center'}} className="tt-img-div">
            <img src={SheafIcons2} className="tt-tt-img-2" style={{borderRadius:'20px'}} alt="" />
            <img src={SheafIcons3} className="tt-tt-img-3" style={{borderRadius:'20px'}} alt="" />
        </div>
        <a href="https://www.behance.net/gallery/154913501/Iconography-a-fun-project" target="_blank" style={{textDecoration:'none'}}>
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

export default SheafIcons;
