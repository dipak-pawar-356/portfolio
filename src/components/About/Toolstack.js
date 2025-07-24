import React from "react";
import { Col, Row } from "react-bootstrap";
import "animate.css/animate.min.css";

import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiWindows11,
  SiUbuntu,
} from "react-icons/si";
import "./Toolstack.css"; 

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons animate__animated animate__zoomIn"
        title="macOS"
        style={{ transition: "transform 0.3s" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
        <SiWindows11 />
      </Col>

      <Col
        xs={4}
        md={2}
        className="tech-icons animate__animated animate__zoomIn"
        title="macOS"
        style={{ transition: "transform 0.3s" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
        <SiUbuntu />
      </Col>

      <Col
        xs={4}
        md={2}
        className="tech-icons animate__animated animate__zoomIn"
        title="VS Code"
        style={{ transition: "transform 0.3s" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
        <SiVisualstudiocode />
      </Col>

      <Col
        xs={4}
        md={2}
        className="tech-icons animate__animated animate__zoomIn"
        title="Postman"
        style={{ transition: "transform 0.3s" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
        <SiPostman />
      </Col>

      {/* <Col
        xs={4}
        md={2}
        className="tech-icons animate__animated animate__zoomIn"
        title="Slack"
        style={{ transition: "transform 0.3s" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
        <SiSlack />
      </Col> */}

      <Col
        xs={4}
        md={2}
        className="tech-icons animate__animated animate__zoomIn"
        title="Vercel"
        style={{ transition: "transform 0.3s" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
