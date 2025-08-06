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
  { icon: <DiHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <DiCss3 />, name: "CSS3", color: "#1572B6" },
  { icon: <DiBootstrap />, name: "Bootstrap", color: "#7952B3" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38B2AC" },
  { icon: <DiJavascript1 />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <DiReact />, name: "React", color: "#61DAFB" },
  { icon: <DiNodejs />, name: "Node.js", color: "#339933" },
  { icon: <SiExpress />, name: "Express.js", color: "#000000" },
  { icon: <DiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiMysql />, name: "MySQL", color: "#00758F" },
  { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
  { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
  { icon: <SiKubernetes />, name: "Kubernetes", color: "#326CE5" },
  { icon: <DiGit />, name: "Git", color: "#F05032" },
  { icon: <DiJava />, name: "Java", color: "#007396" },
  { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
  { icon: <DiPython />, name: "Python", color: "#3776AB" },
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
            <div className="tech-icon-wrapper" style={{ backgroundColor: skill.color }}>
              {skill.icon}
              
            </div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
