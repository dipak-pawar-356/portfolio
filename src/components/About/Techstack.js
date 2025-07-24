import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiBootstrap,
} from "react-icons/di";
import {
  SiMysql,
  SiFirebase,
  SiExpress,
  SiTailwindcss,
  SiSpringboot,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

const skills = [
  { icon: <DiHtml5 />, name: "HTML5" },
  { icon: <DiCss3 />, name: "CSS3" },
  { icon: <DiBootstrap />, name: "Bootstrap" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiReact />, name: "React" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <DiGit />, name: "Git" },
  { icon: <DiJava />, name: "Java" },
  { icon: <SiSpringboot />, name: "Spring Boot" },
  { icon: <DiPython />, name: "Python" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col
          xs={4}
          md={2}
          key={index}
          className="tech-icons animate__animated animate__zoomIn"
        >
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{skill.name}</Tooltip>}
          >
            <div className="tech-icon-wrapper">
              {skill.icon}
            </div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
