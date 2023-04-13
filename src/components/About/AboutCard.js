import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "#656565" }}>
            Welcome to our website! <span className="purple">Meet Shiva Verma </span>
            , an experienced software developer hailing from <span className="purple"> Delhi, India.</span>
            <br /> Shiva is proficient in Dot Net applications and MERN stack web development, with a proven track record of leading successful teams on various projects. His expertise in SQL, MongoDB, and Oracle ensures efficient database management. Shiva is currently pursuing a Master's degree in Data Science to augment his skill set. He is passionate about building innovative solutions and thrives in challenging environments. If you share these traits, connect with Shiva to explore new opportunities. 
            <br />
            <br />
            Besides coding, Shiva enjoys a few other activities, such as
          </p>
          <ul style={{color: "#606060"}}>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(153 153 153)" }}>
            "Make it work, make it right, make it fast."{" "}
          </p>
          <footer className="blockquote-footer">Shiva Verma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
