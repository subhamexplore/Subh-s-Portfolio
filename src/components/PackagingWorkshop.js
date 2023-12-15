import React from "react";
import "../Assets/styles/PackagingWorkshop.css";
import PackagingWorkshop1 from "../Assets/images/pw.png";
import PackagingWorkshop2 from "../Assets/images/pw2.png";
import PackagingWorkshop3 from "../Assets/images/pw1.png";

const PackagingWorkshop = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <div>
        <p className="small-head-bbt">Packaging Workshop</p>
        <p className="head-bbt lh-head-bbt">From Concept to Shelf</p>
        <span
          className="span-text"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-10px",
            fontFamily: "gilroy",
          }}
        >
          <span>Packaging Design</span> <div className="dot"></div>{" "}
          <span>Facilitator</span>
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <div className="PackagingWorkshopImg"></div>
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
          The Packaging Design Workshop was mainly crafted to provide a comprehensive understanding of the packaging design process. Participants delved into the intricacies of successful packaging design, focusing on key elements such as brand identity, user psychology, and insights into printing materials and processes. Our aim was to equip designers with the knowledge needed for optimal results in the world of packaging design.
          </p>
          <br /><br />
          <p className="project-brief-head">My Role</p>
          <p className="bbt-para">
          As the facilitator, I played a big part in planning the workshop, making sure we knew what we wanted to achieve. I took charge in getting everything ready beforehand, making sure we had all we needed for the event to go smoothly. I also learned right alongside the team, guiding everyone as we explored the world of packaging design together.
          </p><br />
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
            <img src={PackagingWorkshop2} className="tt-tt-img-2" style={{borderRadius:'20px'}} alt="" />
            <img src={PackagingWorkshop3} className="tt-tt-img-3" style={{borderRadius:'20px'}} alt="" />
        </div>
        <a href="https://www.behance.net/gallery/175861497/Packaging-Workshop-Overview" target="_blank" style={{textDecoration:'none'}}>
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

export default PackagingWorkshop;
