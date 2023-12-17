import React, { useEffect, useRef } from 'react';
import "../Assets/styles/AboutUs.css";
import aboutTopImg from "../Assets/images/Group 28864.png";
import about2img from "../Assets/images/Rectangle 157.png";
import about3img from "../Assets/images/Group 28865.png";
import about4img from "../Assets/images/Rectangle 159.png";
import about5img from "../Assets/images/Rectangle 157.png";
import vector from "../Assets/images/Vector 38.png";

const AboutUs = () => {
  const aboutRef = useRef(null);

  // Use effect to scroll to the top when the component mounts
  useEffect(() => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div style={{ paddingTop: "90px" }} ref={aboutRef}>
      <div>
        <div className="vector-back">
          <div className="about-head-div" style={{marginTop:'50px'}}>
            <p className="about-heading">My Lifebook Stories</p>
          </div>
          <div className="about-top-img">
            <img src={aboutTopImg} className="about-top-img-img" alt="" />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className="top-about-para">
              To celebrate our massive launch, we have prepared prizes worth
              $17,000 in total to reward over a hundred lucky winners!
            </p>
          </div>
          <div className="childhood">
            <img className="childhood-sub1" src={about2img} alt="" />
            <div className="childhood-sub2">
              <p className="childhood-head1">Childhood Pencil:</p>
              <p className="childhood-head2">An Artistic Odyssey</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p className="childhood-para">
                  Where every drawing contest and doodle on the testbook edges
                  planted the seed of my design passion.
                </p>
              </div>
            </div>
          </div>
          <div className="childhood">
            <img
              className="childhood-sub1"
              src={about3img}
              alt=""
              height={400}
            />
            <div className="childhood-sub2">
              <p className="childhood-head1">Empathy: Observer by</p>
              <p className="childhood-head2">Nature, Listener by Choice</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p className="childhood-para">
                  In school, I observed quietly in corners and found joy in
                  listening to friends. These moments inspire my user-centric
                  design journey.
                </p>
              </div>
            </div>
          </div>

          <div className="childhood">
            <div className="childhood-sub2">
              <p className="childhood-head1">Zairza: Igniting Design</p>
              <p className="childhood-head2">Passion</p>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <p className="childhood-para">
                  In Zairza, mentors embraced me. Here, I uncovered design's art
                  and science, realizing it's about crafting experiences.
                </p>
              </div>
            </div>
            <img
              className="childhood-sub1"
              src={about4img}
              alt=""
              height={400}
            />
          </div>

          <div className="childhood">
            <img
              className="childhood-sub1"
              src={about5img}
              alt=""
              height={400}
            />
            <div className="childhood-sub2">
              <p className="childhood-head1">DXAI Hackathon:</p>
              <p className="childhood-head2">Special Jury Award at</p>
              <p className="childhood-head3">UXINDIA-23 Conference</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p className="childhood-para">
                  This conference exposed me to a world of diverse perspectives
                  from UX designers and entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-foot">
          <div>
            <p className="about-foot-text1">
              My UI/UX journey from sketchbooks to hackathons, internships, and
              full-time roles reflects my passion, and evolving creativity.
            </p>
            <p className="about-foot-text2">Excited for what's next!!</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default AboutUs;
