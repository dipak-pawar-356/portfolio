import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I’m <span className="purple">Dipak Pawar</span> from{" "}
            <span className="purple">Pandharpur, Maharashtra 🇮🇳</span>.
            <br />
            I’m a passionate full-stack developer, tech explorer, and enthusiastic learner.
            <br />
            I’m currently pursuing my degree at{" "}
            <span className="purple">SVERI's College of Engineering, Pandharpur</span>.
            <br />
            <br />
            I love building real-world tech solutions and exploring new ideas through code. Whether it's web, mobile, or AI projects – I’m always curious to learn and grow!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building full-stack apps
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tech trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and connecting with nature 🌿
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Keep learning, keep building, and always stay curious.” 🚀
          </p>
          <footer className="blockquote-footer">Dipak Pawar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
