import React from "react";
import { motion } from "framer-motion";
import "./Certificate.css";

// Example certificate data
const certificates = [
  {
    title: "IEEE Bombay Membership",
    issuer: "IEEE Bombay",
    date: "October 2024",
    image: require("../../Assets/certificates/ieee_bombay.png"),
    link: "https://drive.google.com/file/d/16p485AGji4w4lPf1luhzXQVqr7DIwY3N/view?usp=sharing"
  },
  {
    title: "DSA With JAVA",
    issuer: "APNA College",
    date: "December 2024",
    image: require("../../Assets/certificates/apna_college_java_dsa.png"),
    link: "https://drive.google.com/file/d/1PlTG7T0LIDFS_-8ZXwAPrnUgOEyi3WjK/view?usp=sharing"
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS Academy",
    date: "May 2025",
    image: require("../../Assets/certificates/aws_academy.png"),
    link: "https://drive.google.com/file/d/10DcNYrzT_HqtCTtHEOJoBcYDeqcYbt-L/view?usp=sharing"
  },
  {
    title: "Frontend Web Development",
    issuer: "AICTE IBM",
    date: "August 2025",
    image: require("../../Assets/certificates/aicte_ibm.png"),
    link: "https://drive.google.com/file/d/1LDjzroEfikOIwi64ro67-uxKcABKfqQf/view?usp=sharing"
  }
  // Add more certificates as needed
];

function Certificate() {
  return (
    <div className="certificate-section">
      <h2 className="certificate-title">My <span className="purple">Certificates</span></h2>
      <div className="certificate-list">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className="certificate-card"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.07, boxShadow: "0 16px 40px #ffd70088", border: "2.5px solid #ffd700" }}
            whileTap={{ scale: 0.97, rotate: -2 }}
            transition={{ duration: 0.6, delay: idx * 0.2, type: "spring", stiffness: 120 }}
            style={{
              background: "linear-gradient(145deg, #23234a, #111123)",
              color: "#fff",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
              cursor: cert.link ? "pointer" : "default",
              position: "relative",
              overflow: "hidden",
              minHeight: "340px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            onClick={() => cert.link && window.open(cert.link, "_blank")}
          >
            <motion.div
              initial={{ rotate: -8, scale: 0.95 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="certificate-img-wrapper"
              style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "10px" }}
            >
              <img src={cert.image} alt={cert.title} className="certificate-img" />
            </motion.div>
            <div className="certificate-info" style={{ textAlign: "center", zIndex: 1 }}>
              <h3 className="certificate-name" style={{ marginBottom: "6px" }}>{cert.title}</h3>
              <p className="certificate-issuer" style={{ marginBottom: "2px" }}>{cert.issuer}</p>
              <span className="certificate-date" style={{ marginBottom: "8px", display: "block" }}>{cert.date}</span>
              {cert.link && (
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                  whileHover={{ color: "#a259ff", scale: 1.13 }}
                  style={{ display: "inline-block", marginTop: "10px", fontWeight: 700, letterSpacing: "0.5px" }}
                  onClick={e => e.stopPropagation()}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <svg width="20" height="20" fill="#ffd700" style={{ marginRight: "2px" }}><circle cx="10" cy="10" r="9" stroke="#a259ff" strokeWidth="2" fill="#ffd700" /></svg>
                    View Certificate
                  </span>
                </motion.a>
              )}
            </div>
            {/* Decorative animation */}
            <motion.div
              className="certificate-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.18 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              style={{
                position: "absolute",
                top: "-40px",
                left: "-40px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #ffd700 0%, #a259ff 100%)",
                filter: "blur(18px)",
                zIndex: 0
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
