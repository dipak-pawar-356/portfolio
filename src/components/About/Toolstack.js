// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import "animate.css/animate.min.css";

// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiVercel,
//   SiWindows11,
//   SiUbuntu,
// } from "react-icons/si";
// import "./Toolstack.css"; 

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col
//         xs={4}
//         md={2}
//         className="tech-icons animate__animated animate__zoomIn"
//         title="macOS"
//         style={{ transition: "transform 0.3s" }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
//         <SiWindows11 />
//       </Col>

//       <Col
//         xs={4}
//         md={2}
//         className="tech-icons animate__animated animate__zoomIn"
//         title="macOS"
//         style={{ transition: "transform 0.3s" }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
//         <SiUbuntu />
//       </Col>

//       <Col
//         xs={4}
//         md={2}
//         className="tech-icons animate__animated animate__zoomIn"
//         title="VS Code"
//         style={{ transition: "transform 0.3s" }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
//         <SiVisualstudiocode />
//       </Col>

//       <Col
//         xs={4}
//         md={2}
//         className="tech-icons animate__animated animate__zoomIn"
//         title="Postman"
//         style={{ transition: "transform 0.3s" }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
//         <SiPostman />
//       </Col>

     

//       <Col
//         xs={4}
//         md={2}
//         className="tech-icons animate__animated animate__zoomIn"
//         title="Vercel"
//         style={{ transition: "transform 0.3s" }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
//         <SiVercel />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;





import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiWindows11,
  SiUbuntu,
  SiGit,
} from "react-icons/si";
import "./Toolstack.css";

const tools = [
  { icon: <SiWindows11 />, name: "Windows", color: "#00adef" },
  { icon: <SiUbuntu />, name: "Ubuntu", color: "#e95420" },
  { icon: <SiVisualstudiocode />, name: "VS Code", color: "#0078d7" },
  { icon: <SiPostman />, name: "Postman", color: "#ff6c37" },
  { icon: <SiVercel />, name: "Vercel", color: "#000000" },
  { icon: <SiGit />, name: "Git", color: "#f1502f" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          xs={4}
          md={2}
          key={index}
          className="tech-icons animate__animated animate__zoomIn"
        >
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tool.name}</Tooltip>}
          >
            <div
              className="tech-icon-wrapper"
              style={{ backgroundColor: tool.color }}
            >
              {tool.icon}
            </div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
