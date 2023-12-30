import React, { useEffect, useRef } from 'react';
import "../Assets/styles/BigBoyToyz.css";
import BigBoyCar from "../Assets/images/Frame 162877.png";
import flowchart from "../Assets/images/Frame 162890.png";
import cardSorting from "../Assets/images/Frame 7520.png";
import infoArch from "../Assets/images/Frame 163006.png";
import gr1 from "../Assets/images/Frame 162999.png";
import gr2 from "../Assets/images/Mask Group.png";
import gr3 from "../Assets/images/Frame 163001.png";
import rut from '../Assets/images/Group 28867.png'
import tra from '../Assets/images/Home Page.png'

const BigBoyToyz = () => {
  const bbtRef = useRef(null);

  // Use effect to scroll to the top when the component mounts
  useEffect(() => {
    bbtRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);
  return (
    <div style={{ paddingTop: "100px" }} ref={bbtRef} id='bbt-page'>
      <div>
        <div className="bbt-head-pro">
        <p className="small-head-bbt">Big Boy Toyz</p>
        <p className="head-bbt">The best for Exotic Cars</p>
        </div>
        <span
          className="span-text"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-10px",
            fontFamily: "gilroy",
          }}
        >
          <span>UI Design</span> <div className="dot"></div>{" "}
          <span>UX Research</span>
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <img src={BigBoyCar} className="proj-part-img1" alt="" />
        </div>
        <div className="project-brief">
          <p className="project-brief-head">The Project brief</p>
          <div className="date-week-dot">
            <p className="date-week-dot-single">2022</p>
            <div className="fst"></div>
            <p className="date-week-dot-single">5 WEEKS</p>
            <div className="fst"></div>
            <p className="date-week-dot-single">REDESIGN</p>
          </div>
          <p className="bbt-head-sub">
            I'm jazzed about sprucing up the Big Boy Toyz (BBT) website!
          </p>
          <p className="bbt-para">
            This personal passion project is all about making it easier for
            folks to buy and sell their dream supercars. Embarking on a mission
            to redefine the user journey for premium car seekers at BBT, this
            project centers on enhancing the experience with a keen focus on
            improving user retention and sparking new leads, our goal is to make
            the search for dream rides not just easy but downright enjoyable.
            Join me in reshaping how we navigate the world of premium cars at
            BBT – let's make every click, scroll, and discovery count! 🚗💨
          </p>
          <br />
          <span>
            <span className="bbt-risk">RISKS: </span>
            <span>
              User Adoption to the Redesign, Balancing Design Personalization,
              Limited Resources
            </span>
          </span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="bbt-second">
        <p className="bbt-second-head">Putting on our detective glasses</p>
        <p className="bbt-second-para-1">
          I kicked off the project by doing something slightly
          unconventional—placing an order for my dream car, even though I
          couldn't afford it. It turned out to be an amusing way to get into the
          user's shoes and understand the journey. And just for kicks, I booked
          a test drive via WhatsApp. Yes, you read that right-Test drive
          booking!{" "}
        </p>
        <br />
        <p className="bbt-second-para-2">
          But I didn't stop at whimsical test drives. To dive deeper into the
          project, embarked on some deep{" "}
          <span className="bbt-para-dark">desk research</span>. This led us into
          the market insights, past consumer trends, and behavioral quirks.
        </p>
        <br />
        <p className="bbt-second-para-3">
          Then, moving forward with a{" "}
          <span className="bbt-para-dark">heuristic evaluation</span>, revealing
          a bunch of usability issues within the product. After documenting our
          findings, I decided to put our brains back on and validate those
          issues through more user research.
        </p>
        <br />
        <br />
        <br />
        <p className="bbt-obj">Objectives</p>
        <p className="bbt-obj-para">
          Focused on a single problem statement—enhancing Information
          Architecture and streamlining flows. Key objectives include refining
          search and filter flows, as well as improving the navigation and site
          map for a more user-friendly experience.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="card-sorting">
        <p className="bbt-second-head">Task Flow Analysis</p>
        <p className="bbt-second-para-2">
          Moving forward I asked some of my crazy car lover friends and
          conducted a <span className="bbt-para-dark">hierarchical task</span>{" "}
          analysis to analyse most crutial user goals in the website and the
          basic steps that a user must take in order to complete those goal.
          This begins with research to collect tasks and goals, followed by
          systematic review of the tasks by the user observed.
        </p>
        <div
        
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img className="proj-part-img-4" src={flowchart} alt="" />
        </div>
        <div className="insight">
          <div className="insight-box-hash">
            <p className="insight-head"># Insight of task flow analysis</p>
          </div>
          <ul>
            <li className="in-para" style={{ marginBottom: "10px" }}>
              <span className="bbt-para-dark-in">Task Overload:</span> Booking a
              car takes too much time due to many steps.
            </li>
            <li className="in-para" style={{ marginBottom: "10px" }}>
              <span className="bbt-para-dark-in">Searching Flow: </span>The
              search process is lengthy, and finding the filter is challenging,
              making the overall experience more cumbersome.
            </li>
            <li className="in-para">
              <span className="bbt-para-dark-in">Decision making: </span>the
              process to go through the specs of the cars is very long which
              affects the decision making of the user, which leads to losing
              potential buyers.
            </li>
          </ul>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className="card-sorting">
        <p className="bbt-second-head">Card Sorting</p>
        <p className="bbt-second-para-2">
          Further I asked some users to hurdle up for a closed card sorting
          session, turning all our content into nifty cards. With a dash of
          teamwork we grouped them under catchy headings.🚀
        </p><br /><br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img className="proj-part-img-2" src={cardSorting} alt="" />
        </div><br /><br />
        <div className="insight">
          <div className="insight-box-hash">
            <p className="insight-head"> # Insight of Card Sorting</p>
          </div>
          <ul>
            <li className="in-para" style={{ marginBottom: "10px" }}>
              <span className="bbt-para-dark-in">Effective Grouping: </span>
              TSorting cards helped us neatly group items under specific
              headings.
            </li>
            <li className="in-para">
              <span className="bbt-para-dark-in">
                Handling Lots of Content:{" "}
              </span>
              Insights gained from card sorting are key to efficiently managing
              a large amount of content.
            </li>
          </ul>
        </div>
        <br />
        <br />
        <br />
      </div>

      <div className="card-sorting">
        <p className="bbt-second-head">Information Architecture</p>
        <p className="bbt-second-para-2">
          Multiple rounds of card sorting and a deep dive into understanding
          user pain points paved the way for a meticulously crafted solution.
          Through this iterative journey, we dissected the existing information
          architecture and revamped it.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={infoArch} className="proj-part-img-4" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="card-sorting">
        <p className="bbt-second-head">The grand result</p>
        <p className="bbt-second-para-2">The final UI Screens</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <img src={gr1} className="proj-part-img1"  alt="" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <img src={gr2} className="proj-part-img1" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <img src={gr3} className="proj-part-img-other" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="card-sorting">
        <p className="bbt-second-head">Remote Usability Testing</p>
        <p className="bbt-second-para-2">
          <span className="cs-obj">Objective:</span> To evaluate the redesigned
          Big Boy Toyz (BBT) website's user interface and experience in a
          real-world context.
        </p>
        <p className="bbt-second-para-2">
          Our friendly remote usability testing begins with a laid-back virtual
          coffee chat, a digital meet-up where we get to know the user a bit
          better. Now, the real fun begins as we transport them to an imaginary
          world where they had the chance to buy one of your favorite supercars
          right away. It's not just a task; it's a playful journey into the
          realm of their dream car.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <img src={rut} className="proj-part-img1" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="card-sorting">
        <p className="bbt-second-head">Testing Result Analysis</p>
        <p className="bbt-second-para-2">
        Users appreciated the existing feature of easy access to Used Cars, Vintage Cars, and New Cars, a detail I unintentionally overlooked in my recent design update. It became apparent through user searches in the new design that this feature held significant value.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <img src={tra} className="proj-part-img1" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="card-sorting">
        <p className="bbt-second-head">Learnings from the project</p>
        <p className="bbt-second-para-2">
        In reflecting on this project, a significant takeaway would be— while I nailed the navigation and made things easier to find, I missed the mark on the mental models of our current users. It's a classic challenge in the design world, trying to revamp for new users without messing up the groove for the ones already on board. Striking the right balance between spicing things up and keeping that familiar vibe is the real secret sauce for project success. 
        </p>
      </div>
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
            href="#bbt-page"
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

export default BigBoyToyz;
