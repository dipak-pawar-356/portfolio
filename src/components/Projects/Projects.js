import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Button, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { Fade } from "react-awesome-reveal";

import agrihub from "../../Assets/Projects/agrihub.png";
import inventory from "../../Assets/Projects/inventory.png";
import uber from "../../Assets/Projects/uber.png";
import aiInterview from "../../Assets/Projects/aiinterview.png";
import chatapp from "../../Assets/Projects/chatapp.png";

const allTags = ["MERN", "Java", "Spring", "AI", "Flutter", "Firebase", "Maps"];

const projects = [
  {
    title: "AgriHub – Unified Agriculture Platform",
    img: agrihub,
    description:
      "Built a multilingual B2B platform connecting 150+ farmers with nurseries and agri vendors. Integrated Razorpay, chatbot, crop scheduler, and WhatsApp automation.",
    ghLink: "https://github.com/dipak-pawar-356/agrihub",
    demoLink: "https://agrihub-demo.vercel.app",
    tags: ["MERN"]
  },
  {
    title: "Inventory Management System",
    img: inventory,
    description:
      "Spring Boot & MySQL app with REST APIs, role-based access, and JWT security. Deployed for fast, scalable inventory operations.",
    ghLink: "https://github.com/dipak-pawar-356/inventory-management",
    tags: ["Java", "Spring"]
  },
  {
    title: "Uber Clone",
    img: uber,
    description:
      "React/Node-based ride app with live routing, fare logic, Google Maps API integration, and JWT-based login.",
    ghLink: "https://github.com/dipak-pawar-356/uber-clone",
    tags: ["MERN", "Maps"]
  },
  {
    title: "AI Interview Taker",
    img: aiInterview,
    description:
      "Real-time AI-powered mock interviewer using Gemini API + NLP scoring. Reduced manual evaluation time by 80%.",
    ghLink: "https://github.com/dipak-pawar-356/ai-interview",
    tags: ["AI"]
  },
  {
    title: "ConnectCraze Chat App",
    img: chatapp,
    description:
      "Real-time group chat app with image, text, and voice support using Flutter + Firebase stack. Tested with 75+ users.",
    ghLink: "https://github.com/dipak-pawar-356/connectcraze",
    tags: ["Flutter", "Firebase"]
  },
];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [modal, setModal] = useState({ show: false, project: null });

  const filtered =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Real <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>Click a project for details or filter by tech stack.</p>

        <div className="mb-4 d-flex flex-wrap gap-2 justify-content-center">
          <Badge
            pill
            bg={selectedTag === "All" ? "info" : "secondary"}
            onClick={() => setSelectedTag("All")}
            style={{ cursor: "pointer" }}
          >
            All
          </Badge>
          {allTags.map((tag) => (
            <Badge
              pill
              bg={selectedTag === tag ? "info" : "secondary"}
              onClick={() => setSelectedTag(tag)}
              key={tag}
              style={{ cursor: "pointer" }}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Row className="g-4" style={{ justifyContent: "center" }}>
          {filtered.map((proj, idx) => (
            <Col md={6} lg={4} key={idx}>
              <Fade cascade>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="hover-card"
                  onClick={() => setModal({ show: true, project: proj })}
                >
                  <Card className="project-card-view">
                    <Card.Img variant="top" src={proj.img} className="project-img" />
                    <Card.Body>
                      <Card.Title>{proj.title}</Card.Title>
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
          <img
            src={modal.project?.img}
            alt="project-preview"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
          />
          <p>{modal.project?.description}</p>
          <div className="d-flex gap-3">
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
          object-fit: cover;
        }
      `}</style>
    </Container>
  );
}
