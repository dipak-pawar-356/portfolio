import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Button, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import Particle from "../Particle";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { Fade } from "react-awesome-reveal";

// Project images
import ag1 from "../../Assets/Projects/agrihub1.png";
import ag2 from "../../Assets/Projects/agrihub2.png";
import ag3 from "../../Assets/Projects/agrihub3.png";
import ub1 from "../../Assets/Projects/uber.png";
import ub2 from "../../Assets/Projects/uber2.png";
import ub3 from "../../Assets/Projects/uber3.png";
import ai1 from "../../Assets/Projects/aiinterview1.jpg";
import ai2 from "../../Assets/Projects/aiinterview2.jpg";
import cc1 from "../../Assets/Projects/chatapp.jpg";
import cc2 from "../../Assets/Projects/chatapp2.jpg";
import ie1 from "../../Assets/Projects/aiimageeditor1.png";
import ie2 from "../../Assets/Projects/aiimageeditor2.png";
import ie3 from "../../Assets/Projects/aiimageeditor3.png";

const projects = [
  {
    title: "AgriHub – Unified Agriculture Platform",
    images: [ag1, ag2, ag3],
    description:
      "Multilingual B2B platform connecting 150+ farmers with nurseries/vendors. Razorpay, chatbot, crop scheduler & WhatsApp automation.",
    ghLink: "https://github.com/dipak-pawar-356/agrostores_atria",
    demoLink: "https://agro-stores.netlify.app/",
    tags: ["MERN", "Firebase", "Razorpay", "Chatbot", "Postman", "WhatsApp API"]
  },
  {
    title: "Uber Clone",
    images: [ub1, ub2, ub3],
    description:
      "Ride app with live routing, fare logic, Google Maps API and JWT login built with React/Node.",
    ghLink: "https://github.com/dipak-pawar-356/uber-clone",
    demoLink: "https://uber-video-ochre.vercel.app/",
    tags: ["MERN", "Maps", "JWT","Firebase", "Postman" ]
  },
  {
    title: "AI Interview Taker",
    images: [ai1, ai2],
    description:
      "AI‑powered mock interviewer using Gemini API + NLP scoring. 80% reduction in manual evaluation time.",
    ghLink: "https://github.com/dipak-pawar-356/ai_mock_interview",
    demoLink: null,
    tags: ["AI", "PostgreSQL", "Next.js", "NLP"]
  },
  {
    title: "ConnectCraze Chat App",
    images: [cc1, cc2],
    description:
      "Flutter + Firebase group chat app supporting real‑time image/text/voice messages, used by 75+ users.",
    ghLink: "https://github.com/dipak-pawar-356/connect_craze",
    demoLink: null,
    tags: ["Flutter", "Firebase"]
  },
  {
    title: "AI Image Editor",
    images: [ie1, ie2, ie3],
    description:
      "Browser‑based AI image editor inspired by Photopea. Includes Generative Fill, background removal (Step1X‑Edit, Inpaint Anything).",
    ghLink: "https://github.com/yourusername/ai-image-editor",
    demoLink: "https://your-ai-editor-demo.vercel.app",
    tags: ["AI", "Next.js"]
  }
];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [modal, setModal] = useState({ show: false, project: null });

  const uniqueTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  uniqueTags.sort((a, b) => a.localeCompare(b));
  uniqueTags.unshift("All");
  // const allTags = uniqueTags;
  const allTags = ["All", "MERN", "Firebase","Map","PostgreSQL", "Postman", "AI", "Next.js", "Flutter"];


  const filtered =
    selectedTag === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())
        );

  return (
    <Container fluid className="project-section py-5" style={{ backgroundColor: "#0d1117", marginTop: '80px' }}>
      <Particle />
      <Container>
        <h1 className="project-heading text-center mb-3">
          My Real <strong className="purple">Projects</strong>
        </h1>
        <p className="text-center text-white mb-4">
          Click a project for details or filter by tech stack.
        </p>

        <div className="mb-5 d-flex flex-wrap gap-3 justify-content-center">
          {allTags.map((tag) => (
            <Badge
              pill
              key={tag}
              bg={selectedTag === tag ? "info" : "secondary"}
              onClick={() => setSelectedTag(tag)}
              style={{ cursor: "pointer", padding: "10px 14px", fontSize: "15px" }}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Row className="g-4 justify-content-center">
          {filtered.map((proj, idx) => (
            <Col xs={12} sm={10} md={6} lg={4} key={idx}>
              <Fade direction="up" cascade>
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="hover-card"
                  onClick={() => setModal({ show: true, project: proj })}
                >
                  <Card className="project-card-view rounded-4 shadow-sm bg-dark text-white">
                    <motion.img
                      src={proj.images[0]}
                      className="project-img card-img-top"
                      alt="project-thumbnail"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="fs-5 fw-bold">{proj.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        show={modal.show}
        onHide={() => setModal({ show: false, project: null })}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{modal.project?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modal.project && (
            <Carousel fade interval={3000}>
              {modal.project.images.map((imgSrc, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={imgSrc}
                    alt={`Slide ${index + 1}`}
                    style={{ borderRadius: "10px", maxHeight: "450px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
          <p className="mt-3">{modal.project?.description}</p>
          <div className="d-flex gap-3 mt-3">
            <Button variant="dark" href={modal.project?.ghLink} target="_blank">
              <BsGithub /> GitHub
            </Button>
            {modal.project?.demoLink && (
              <Button variant="primary" href={modal.project?.demoLink} target="_blank">
                <CgWebsite /> Live Demo
              </Button>
            )}
          </div>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .project-img {
          height: 220px;
          width: 100%;
          object-fit: cover;
          border-radius: 12px 12px 0 0;
        }
        .project-card-view {
          border: none;
          background: linear-gradient(145deg, #1e1e2f, #111123);
          transition: all 0.3s ease;
        }
        .project-card-view:hover {
          transform: translateY(-5px);
        }
      `}</style>
    {/* Certificate Section */}
  
    </Container>
  );
}
