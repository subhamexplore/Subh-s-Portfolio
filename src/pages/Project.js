import React, { useEffect, useRef } from 'react';
import "../Assets/styles/Project.css";
import workbook from "../Assets/images/Group 28859.png";
import phone1 from "../Assets/images/Tip of the day.png";
import phone2 from "../Assets/images/Explore.png";
import car from "../Assets/images/Group 28861.png";
import card2 from "../Assets/images/card2.png";
import card3 from "../Assets/images/card3.png";
import bulb from "../Assets/images/bulb.png";
import card4 from "../Assets/images/Group 28862.png";
import {Link} from 'react-router-dom';

const Project = () => {
  const projectRef = useRef(null);

  // Use effect to scroll to the top when the component mounts
  useEffect(() => {
    projectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);
  return (
    <div id='project-page' style={{ paddingTop: "90px" }} ref={projectRef}>
      <div className="workbook-img-div">
        <img className="workbook-img" src={workbook} alt="" />
      </div>
      <br />
      <br />
      <div
        className="card-work"
        style={{ overflow: "auto", overflowY: "hidden"}}
      >
        <div className="text-part">
          <p className="ui-ux">UI/UX PROJECT</p>
          <h1 className="name-text-part">Ayushtha</h1>
          <p className="para-text-part">
            A solution to help people manage a healthy life in the current busy
            living schedule with small hints on doing things the right way.{" "}
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
        <img src={phone2} style={{ marginTop: "-230px" }} alt="" height={550}  className="phone2"/>
        <img src={phone1} style={{ marginTop: "-30px" }} alt="" height={550} className="phone1"/>
      </div>
      <br />
      <br />

      <div
        className="card-work card-work-bbt-card"
        style={{
          overflow: "auto",
          overflowX: "hidden",
          overflowY: "hidden",
          padding: "55px",
          backgroundImage: "none",
          backgroundColor: "rgba(240, 240, 240, 1)",
        }}
      >
        <div className="text-part">
          <p className="ui-ux">UI/UX PROJECT</p>
          <h1 className="name-text-part">Big Boy Toyz</h1>
          <p className="para-text-part">
            A practice project aimed at improvising the buying and selling
            experience of the user. The problem mainly solved during the project
            involves complex navigation and low content discovery.{" "}
          </p>
          <span className="span-text">
            <span>UI Research</span> <div className="dot"></div>{" "}
            <span>UX Design</span> <div className="dot"></div>{" "}
            <span>Presentation</span>
          </span>
          <Link to={'/bigBoyToyz'}>
          <button className="check-detail">Check Details</button>
          </Link>
        </div>
        <img src={car} style={{ marginRight: "-60px" }} alt="" height={370} />
      </div>

      <div className="next-cards">
        <div className="card2">
          <div className="text-part text-part-2">
            <p className="ui-ux2">FUN PROJECT</p>
            <h1 className="name-text-part2">Tasty Treat</h1>
            <p className="para-text-part2">
              Introducing my versions of Chocolate House in all my favourite
              flavours, with all the toppings. Idea expressed through 3D Design.
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
              A consistent ravishing icon pack of 49 icons related to events of
              college life covering everything from the hard-working days to the
              pizza party nights.
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

      <div
        className="card3"
        style={{ backgroundColor: "rgba(248, 219, 70, 1)", margin: "auto" }}
      >
        <div className="text-part text-part-2">
          <p className="ui-ux3" style={{ color: "black" }}>
            FUN PROJECT
          </p>
          <div style={{ display: "flex" }}>
            <h1 className="name-text-part3">Packaging Workshop</h1>
          </div>
          <span className="span-text3">
            <span>Ideation</span> <div className="dot3"></div>{" "}
            <span>Material Testing</span> <div className="dot3"></div>{" "}
            <span>Mockup Design</span>
          </span>
          <Link to={'/packagingWorkshop'}>
          <button className="check-detail3">Check Details</button>
          </Link>
        </div>
        <img src={card4} alt="" className="imgPartSsmall3" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="footer" style={{backgroundColor:"rgba(249, 249, 249, 1)"}}>
      <div className="links" style={{paddingTop:'22px'}}>
          <a style={{textDecoration:'none', color:'black'}} href="https://www.linkedin.com/in/subhasmita-pradhan-675456158/" target="_blank"><p>Linkedin</p></a>
          <div className="dot-foot"></div>
          <a style={{textDecoration:'none', color:'black'}} href="https://www.behance.net/subhasmpradhan1" target="_blank"><p>Behance</p></a>
          <div className="dot-foot"></div>
          <a style={{textDecoration:'none', color:'black'}} href="https://www.instagram.com/subhs.design/" target="_blank"><p>Instagram</p></a>
          <div className="dot-foot"></div>
          <a
            className="ht"
            href="#project-page"
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

export default Project;
