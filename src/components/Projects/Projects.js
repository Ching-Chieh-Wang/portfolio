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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leximind}
              isBlog={false}
              title="Leximind"
              description="A full stack vocabulary memorizing website. Featuring user authenticaion (Oauth) vocabularies collection management and a sliding vocabularies gallery."
              ghLink="https://github.com/Ching-Chieh-Wang/Leximind"
              demoLink="https://leximind-aj2c.onrender.com"
              tags={["React", "Nodejs", "Nextjs", "Express", "Postgresql", "Redis" , "AWS", "Docker"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube Clone"
              description="YouTube functionality—video uploading, processing, and viewing. Featuring video low sampling for saving space for cloud storage bucket on high traffics."
              tags={["React", "Nodejs", "Nextjs", "Firebase", "GCP", "Docker"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zwap}
              isBlog={false}
              title="Zwap - secondhand trading backend system"
              description="This tool allows you to see the latest activities (like pushes, issues, stars, etc.) of any GitHub user directly in your terminal."
              ghLink="https://github.com/Ching-Chieh-Wang/zwap"
              // demoLink="https://editor.soumya-jit.tech/"
              tags={["Spring", "Java", "Go", "MongoDB" , "Redis", "Kafka", "Jenkins", "Vault", "Firebase", "Linux", "Bash", "Elasticsearch"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aruco_locating}
              isBlog={false}
              title="Camera pose estimation using Aruco marker image detection"
              description="A C++ Computer Vision application that real-time detects Aruco Label in image, and using the Aruco Label to estimate the position and the shooting angle of the capturing camera."
              ghLink="https://github.com/Ching-Chieh-Wang/aruco_locating"
              // demoLink="https://editor.soumya-jit.tech/"
              tags={["C++", "OpenCV"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={concreteCrackReconstruction}
              isBlog={false}
              title="Concrete crack 3-D point cloud reconstruction using captured Aruco Marker"
              description="A real-time concrete crack  reconstruction program. By using a camera"
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
