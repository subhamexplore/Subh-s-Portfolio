import React, { useEffect, useRef } from 'react';
import "../Assets/styles/Ayushtha.css";
import Ayushthaimg1 from "../Assets/images/Frame 162877 (1).png";
import Ayushthaimg2 from "../Assets/images/Frame 162882.png";
import Ayushthaimg3 from "../Assets/images/Frame 162890 (1).png";
import Ayushthaimg4 from "../Assets/images/Group 2494.png";
import Ayushthaimg5 from "../Assets/images/Frame 162882 (1).png";
import Ayushthaimg6 from "../Assets/images/Group 2494 (1).png";
import Ayushthaimg7 from "../Assets/images/Frame 162859.png";
import Ayushthaimg8 from "../Assets/images/Frame 162996.png";

const Ayushtha = () => {
  const ayushthaRef = useRef(null);

  // Use effect to scroll to the top when the component mounts
  useEffect(() => {
    ayushthaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);
  return (
    <div style={{ paddingTop: "100px" }} ref={ayushthaRef} id='ayushtha-page'>
      <div>
        <p className="small-head-bbt">Ayustha</p>
        <p className="head-bbt">A guide to healthy lifestyle</p>
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
          <div className="dot"></div> <span>Presentation</span>
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <img className="proj-part-img1" src={Ayushthaimg1} alt="" />
        </div>
        <div className="project-brief">
          <p className="project-brief-head">The Project brief</p>
          <div className="date-week-dot">
            <p className="date-week-dot-single">2022</p>
            <div className="fst"></div>
            <p className="date-week-dot-single">4 WEEKS</p>
            <div className="fst"></div>
            <p className="date-week-dot-single">UMO DESIGN</p>
          </div>
          <p className="bbt-para">
            This project aims to improve consumer health awareness by addressing
            the confusion caused by the proliferation of natural and organic
            products. The ongoing COVID-19 pandemic has heightened health
            concerns, making informed choices even more critical.
          </p>
          <br />
          <span>
            <span className="bbt-risk">RISKS: </span>
            <span>
              User Needs Alignment, Visual Overload, Information Presentation,
              Technology Limitations
            </span>
          </span>
        </div>
        <br />
        <br />
        <div className="obj-ayu">
          <p className="obj-head">Objectives:</p>
          <ol className="ol">
            <li>
              Empower Consumers: Develop a solution to help consumers make
              informed decisions.
            </li>
            <li>
              Information Access: Provide accessible ingredient and health
              impact information for products.
            </li>
            <li>
              Clarity: Create a user-friendly interface for better ingredient
              understanding.
            </li>
            <li>
              Healthy Habits: Encourage users to adopt and maintain healthy
              habits.
            </li>
            <li>
              Myth Debunking: Disseminate accurate health information to debunk
              myths.
            </li>
          </ol>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="bbt-second">
        <p className="bbt-second-head">The Problem focused</p>
        {/* <p className="slant">“Is it safe for us to use?”</p> */}
        <p className="bbt-second-para-2">
          The question everyone started to ask after the wave of terror and
          massacre of the COVID pandemic shook people by their bones. They are
          more alert and conscious now than ever. The increased alertness calls
          for details that were ignored previously. The Covid-19 pandemic has
          resulted in a massive change in people behaviour globally. Now the
          focus has shifted more towards a natural and holistic way of living.{" "}
        </p>
        <br />
        <p className="bbt-second-para-2">
          Post the outbreak, people have started exploring their roots again and
          embraced Ayurveda and nature as a part of their daily lifestyle.
          People have indeed become more receptive to Ayurvedic and other
          organic products. The wave of Covid-19 devastated the whole world and
          changed people’s perspective towards health. People have started to
          ask questions like:
        </p>
        <br />
        <p className="bbt-second-para-3">
          <ul>
            <li>Which would be a healthier option?</li>
            <li>Are they trustworthy?</li>
            <li>Is it really safe to use?</li>
            <li>Can we trust them with our health?</li>
          </ul>
        </p>
        <br />
        <p className="bbt-second-para-2">
          A growing preference for Organic food products, immunity boosters, and
          food supplements etc., has been observed. A sudden sense of enquiry
          has seeped into the minds of people. They want to know:
        </p>
        <br />
        <ul className="ol">
          <li>What they eat? where it comes from? how is it grown?</li>
          <li>What they use: How is it made/produced?</li>
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <img className="proj-part-img-2" src={Ayushthaimg2}  alt="" />
        </div>
      </div>
      <br />
      <br />

      <div className="card-sorting">
        <p className="bbt-second-head">Looking into some numbers</p>
        <p className="bbt-second-para-1">
          According to WHO, individual health and quality of life is 60% related
          to our lifestyle. Health research indicates that 23% of global deaths
          and 26% of deaths among children under five are due to modifiable
          environmental factors.
        </p>
        <br />
        <p className="bbt-second-para-2">
          The economy of Ayurveda, which is Rs 30,000 crore with a growth of 15
          to 20 per cent, has gone up to 50 to 90 per cent from pre-Covid era to
          post Covid era.
        </p>
        <p className="bbt-second-para-2">
          Higher the demand, higher is the supply in the market. New and old
          ayurvedic and organic brands started to surge up. But as a consumer,
          how to choose that one good product from the self of a supermarket
          with multiple options?
        </p>
        <br />
        <br />
        <br />
      </div>

      <div className="card-sorting">
        <p className="bbt-second-head">Research for our own numbers</p>
        <p className="bbt-second-para-2">
          To understand the view people have on healthy lifestyle, our team
          conducted a survey of 100+ participants.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <img src={Ayushthaimg3} className="proj-part-img-3" alt="" />
        </div>
        <p className="ol">
          When asked about the healthy habits they have incorporated, answers
          were mainly like:
        </p>
        <ul className="ol">
          <li>
            Regular sufficient <span className="violet">sleep</span> 😴
          </li>
          <li>Exercise 🧘</li>
          <li>
            <span className="violet">Vegies and fruits</span> in diet 🍽
          </li>
          <li>
            Avoiding <span className="violet">junk food</span> 🍕
          </li>
          <li>
            Staying <span className="violet">hydrated</span> 💦
          </li>
          <li>
            Using organic <span className="violet">daily essentials</span> 💄
          </li>
        </ul>
        <p className="ol">
          Asked about the natural products they use, people mentioned:{" "}
        </p>
        <ul className="ol">
          <li>
            Fruit <span className="violet">juice</span>🥤
          </li>
          <li>
            Ayurvedic/Organic <span className="violet">Consmetics</span> 🍀
          </li>
          <li>
            <span className="violet">Skin & Hair</span> care products 💇‍♀
          </li>
          <li>
            <span className="violet">Aloe-vera</span> juice 💚
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />

      <div className="card-sorting">
        <p className="bbt-second-head">Diving deeper through interviews</p>
        <p className="bbt-second-para-2">
          After all this research we needed some deep insights on the problem.
          For which we talked to some 5-6 people{" "}
          <span className="bbt-para-dark">(interviewed)</span>, who believed to
          be health conscious or were facing issues to maintain a healthy
          living. Asked them detailed questions related to their lifestyle and
          healthy living. And analysed their answers to find some generic key
          points to focus our directions.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <img src={Ayushthaimg4} className="proj-part-img1" alt="" />
        </div>
        <p className="bbt-second-para-2">
          The interviews gave our team valuable insights, and they also pointed
          us in various directions. For Example, some insights were like:
        </p>
        <ul>
          <li className="in-para" style={{ marginBottom: "10px" }}>
            <span className="bbt-para-dark-in">
              Myths about health habits:{" "}
            </span>
            People tend to easily believe on what they read or hear from their
            friends/family/relative. They don’t check for any scientific
            relevance before believing or following them and making them into
            their habits.
          </li>
          <li className="in-para" style={{ marginBottom: "10px" }}>
            <span className="bbt-para-dark-in">
              Lack of insights on ingredients and their impact:{" "}
            </span>
            There are a lot of ingredients that are harmful for our body but we
            ingest them into our body everyday through a product or the other
            that we use in our daily lives. People are aware of this but they
            have no way to identify each and every ingredient used in all those
            products they use.
          </li>
          <li className="in-para">
            <span className="bbt-para-dark-in">Mental health awareness:</span>
            The circumstances had led people to be aware of their mental health
            including their physical health. The myth of psycatrist being a
            doctor of mad people has been broken by people. But, as said
            “precaution over prevention”, everyone is now looking for healthy
            and natural way of living.
          </li>
          <li className="in-para" style={{ marginTop: "10px" }}>
            <span className="bbt-para-dark-in">
              Switch to natural/organic living:{" "}
            </span>
            People desperately want to go back to their roots and live a natural
            chemical free life, like our grand parents. Because our current life
            is surrounded with chemical products including the food and
            beverages we consume.
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />

      <div className="card-sorting">
        <p className="bbt-second-head">Finalising our arena</p>
        <p className="bbt-second-para-2">
          Our journey continued as we delved into the interview results through{" "}
          <span className="bbt-para-dark">thematic analysis</span>. With each
          interview, a new chapter emerged, and gradually, the common pain
          points began to take shape which was finally shortlisted by the team.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <img src={Ayushthaimg5} className="proj-part-img-2" alt="" />
        </div>
        <p className="bbt-second-para-2">
          Following a careful thematic analysis of the interview findings, we
          assigned priority to the identified themes and used them as a
          foundation for crafting our solution.
        </p>
      </div>
      <br />
      <br />
      <br />

      <div className="card-sorting">
        <p className="bbt-second-head">Final Solution</p>
        <p className="bbt-second-para-2">
          Once our arena boundaries were set, the team focused on brainstorming
          and creating prototypes for our solution.
        </p>
        <p className="bbt-second-para-2">
          Here’s a brief video that offers a detailed look at our proposed
          solution.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <iframe
            className="proj-part-img1"
            src={`https://www.youtube.com/embed/Bac5Oip2-kE`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="card-sorting">
        <p className="bbt-second-head">Prototype Testing</p>
        <div className="obj-ayu2">
          <p className="obj-head">
            Objective:
            <span className="bbt-second-para-2">
              To validate our design concepts and gather user feedback.
            </span>
          </p>
        </div>
        <p className="bbt-second-para-2">
          Users were given specific tasks to complete, and their interactions
          and feedback were observed. Their feedback allowed us to make
          enhancements to our product, ensuring that the final product aligns
          seamlessly with the expectations and needs of our target audience, and
          offers a user-centric experience.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <img src={Ayushthaimg6} className="proj-part-img1" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="card-sorting">
        <div style={{display:'flex'}}>
          <p className="bbt-second-head">Feedback Iteration</p>
          <img src={Ayushthaimg8} className="th-sm-img" height={45} style={{marginTop:'-8px'}} alt="" />
        </div>
        <p className="bbt-second-para-2">
          During this phase, we encountered some mixed feedback. Initially,
          users expressed concerns about the overwhelming amount of information
          related to product ingredients. In response, our team made the
          decision to streamline the content, focusing solely on natural and
          synthetic ingredients.
        </p>
        <p className="bbt-second-para-2">
          However, during a subsequent round of testing, we were surprised to
          find that users now expressed a desire for more detailed information,
          particularly about potentially harmful ingredients. This led to
          multiple iterations, culminating in our current approach – a dropdown
          feature for ingredient listings. Now, users can conveniently see
          whether an ingredient is natural or synthetic, and if they wish to
          explore more about a specific ingredient, they can simply click the
          dropdown button.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px 0",
          }}
        >
          <img src={Ayushthaimg7} className="proj-part-img1" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="card-sorting">
        <p className="bbt-second-head">Learnings from the project</p>
        <p className="bbt-second-para-2">
          My key takeaways from this project can be distilled into the following
          insights:
        </p>
        <br />
        <ol className="ol">
          <li>
            User Trust: It's essential not to place blind trust in users'
            self-assessments. In this project, we discovered that users who
            considered themselves health-conscious were unknowingly following
            habits that were less healthy than they believed.
          </li>
          <li>
            Designer Bias: Recognizing that designer bias is inevitable is
            crucial. There will always be design choices that seem optimal from
            a designer's perspective, but user feedback may reveal a different
            viewpoint. In such situations, it's important to take a step back,
            assess the validity of the user perspective, and make informed
            decisions that align with the project's goals.
          </li>
        </ol>
        <p className="bbt-second-para-2">
          These insights underscore the importance of a user-centered approach
          in design and the need for designers to remain open to user feedback,
          even when it challenges their initial assumptions.
        </p>
      </div>
      <br />
      <br />
      <br />

      <div className="card-sorting">
        <p className="bbt-second-head">My role</p>
        <p className="bbt-second-para-2">
          I initiated this project in collaboration with my team during the
          DESIGNxSOCIAL hackathon organized by UMO, where we aimed to leverage
          our design expertise to address a real-time problem.
        </p>
        <p className="bbt-second-para-2">
          My significant contributions to this endeavor centered around
          conducting user interviews and meticulously analyzing the findings
          during the research phase. Additionally, I took a lead role in shaping
          the product purchase flow, ensuring a seamless and user-centric
          experience in the final design. This project not only honed my design
          skills but also reinforced my ability to bridge user insights with
          practical solutions.
        </p>
        <br />
      </div>
      <br />
      <br />

      <div
        className="footer"
        style={{ backgroundColor: "rgba(249, 249, 249, 1)" }}
      >
        <div className="links">
          <a style={{textDecoration:'none', color:'black'}} href="https://www.linkedin.com/in/subhasmita-pradhan-675456158/" target="_blank"><p>Linkedin</p></a>
          <div className="dot-foot"></div>
          <a style={{textDecoration:'none', color:'black'}} href="https://www.behance.net/subhasmpradhan1" target="_blank"><p>Behance</p></a>
          <div className="dot-foot"></div>
          <a style={{textDecoration:'none', color:'black'}} href="https://www.instagram.com/subhs.design/" target="_blank"><p>Instagram</p></a>
          <div className="dot-foot"></div>
          <a
            className="ht"
            href="#ayushtha-page"
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

export default Ayushtha;
