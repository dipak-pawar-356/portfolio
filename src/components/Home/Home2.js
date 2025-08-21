import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I’m <b className="purple">Dipak Pawar</b>, a passionate{" "}
              <b className="purple">Full-Stack Developer</b> and innovation-driven problem solver 
              from Pandharpur, Maharashtra 🌱.
              <br />
              <br />
              My journey started with a deep love for logic and creativity, which led me to master core languages like{" "}
              <b className="purple"> C++, Java, and JavaScript</b>. Over the years, I’ve built impactful projects using{" "}
              <b className="purple">MERN stack</b>,{" "}
              <b className="purple">Spring Boot & Microservices</b>, and modern technologies like{" "}
              <b className="purple">React Native</b> and{" "}
              <b className="purple">Next.js</b>.
              <br />
              <br />
              I’ve led multiple hackathons and technical fests, including being the Lead Organizer of{" "}
              <b className="purple">Chakravyuh 1.0 (IEEE Bombay Section)</b> and founder of the{" "}
              <b className="purple">ThinkXLogic Club</b>.
              <br />
              {/* <br />
              My work revolves around building smart solutions in{" "}
              <b className="purple">AgriTech, Smart Mobility</b> (like Smart Bus Tracking System), and{" "}
              <b className="purple">AI-powered platforms</b> like SmartLearn and Project Drishti.
              <br /> */}
              <br />
              I love contributing to open source and experimenting with tools like{" "}
              <b className="purple">Vertex AI, Firebase, MongoDB, Docker</b>, and cloud-based deployment.
              <br />
              <br />
              When I'm not coding, I’m exploring Indian culture 🌍 through my venture idea{" "}
              <b className="purple">WaanderBliss</b> and helping students through tech mentorship 🤝.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dipak-pawar-356"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/DipakPa61805649"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dipakpawar356/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dipakpawar_05"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
