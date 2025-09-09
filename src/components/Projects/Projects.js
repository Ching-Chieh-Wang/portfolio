import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import youtube from "../../Assets/Projects/youtube.png";
import leximind from "../../Assets/Projects/Leximind.png";
import aruco_locating from "../../Assets/Projects/aruco-locating.jpg";
import zwap from "../../Assets/Projects/zwap.png";
import concreteCrackReconstruction from "../../Assets/Projects/ConcreteCrack.png";
import user from "../../Assets/Projects/user.png";

function Projects() {
  return (
    <Container fluid className="about-section">
      <Container fluid style={{ paddingLeft: "60px", paddingRight: "60px" }}>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of projects showcasing my journey and skills in software development.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leximind}
              isBlog={false}
              title="Leximind - Vocabulary Learning Platform"
              description="A full-stack web application for efficient vocabulary memorization. Features user authentication (OAuth), personalized vocabulary collection management, and an interactive sliding vocabulary gallery."
              ghLink="https://github.com/Ching-Chieh-Wang/Leximind"
              demoLink="https://leximind-aj2c.onrender.com"
              tags={["React", "Nodejs", "Nextjs", "Express", "Postgresql", "Redis" , "AWS", "Docker"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="YouTube Clone - Video Sharing Platform"
              description="A scalable clone of YouTube with video uploading, processing, and playback. Implements low-resolution sampling to optimize cloud storage usage during high traffic."
              tags={["React", "Nodejs", "Nextjs", "Firebase", "GCP", "Docker"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zwap}
              isBlog={false}
              title="Zwap - Secondhand Trading Backend"
              description="A backend system that enables users to create, browse, and search secondhand products. Built with scalability to manage heavy concurrent product queries."
              ghLink="https://github.com/Ching-Chieh-Wang/zwap"
              // demoLink="https://editor.soumya-jit.tech/"
              tags={["Spring", "Java", "Go", "MongoDB" , "Redis", "Kafka", "Jenkins", "Vault", "Firebase", "Linux", "Bash", "Elasticsearch"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aruco_locating}
              isBlog={false}
              title="Camera Pose Estimation with ArUco Markers"
              description="A C++ computer vision application that performs real-time detection of ArUco markers in images and estimates the camera's position and orientation based on the detected markers."
              ghLink="https://github.com/Ching-Chieh-Wang/aruco_locating"
              // demoLink="https://editor.soumya-jit.tech/"
              tags={["C++", "OpenCV"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={concreteCrackReconstruction}
              isBlog={false}
              title="Concrete Crack 3D Reconstruction with AI"
              description="A real-time program that reconstructs 3D models of concrete cracks. Combines ArUco marker-based camera pose estimation with AI-driven crack detection to generate accurate 3D point clouds."
              ghLink="https://github.com/Ching-Chieh-Wang/aruco_crack_sfm"
              // demoLink="https://editor.soumya-jit.tech/"
              tags={["C++", "Python", "OpenCV", "Tensorflow"]}
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
