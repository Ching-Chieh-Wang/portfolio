import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import youtube from "../../Assets/Projects/youtube.png";
import leximind from "../../Assets/Projects/Leximind.png";
import image from "../../Assets/Projects/imageprocess.png";
import editor from "../../Assets/Projects/codeEditor.png";
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
              tags={["React", "Nodejs", "Nextjs", "Express", "Postgresql", "Redis"]}
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
              imgPath="https://private-user-images.githubusercontent.com/81002444/269875721-a83f96b0-9a42-4e0e-bb17-f68a89bf1cb4.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTczNDExOTgsIm5iZiI6MTc1NzM0MDg5OCwicGF0aCI6Ii84MTAwMjQ0NC8yNjk4NzU3MjEtYTgzZjk2YjAtOWE0Mi00ZTBlLWJiMTctZjY4YTg5YmYxY2I0LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA5MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwOTA4VDE0MTQ1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIwYWU0NDhhMDRkOTZjYTU2NGZhOGYzNTQ3OWYxYjI2OGZmMjMwYTYyMzhmNWJmYWFkMzJmZGY2NjBiYzdhOGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.gZ59bllRULe_haxrKQoGhvgSfoYVr1gLjM3iqAs3WrA"
              isBlog={false}
              title="Aruco label detection + Camera pose estimation"
              description="A C++ Computer Vision application that real-time detects Aruco Label in image, and using the Aruco Label to estimate the position and the shooting angle of the capturing camera."
              ghLink="https://github.com/Ching-Chieh-Wang/aruco_locating"
              // demoLink="https://editor.soumya-jit.tech/"
              tags={["C++", "OpenCV"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={user}
              isBlog={false}
              title="AI-Driven User Routing & Matching System"
              description="A real-time user–interviewer routing system with FastAPI, MongoDB, and Elasticsearch, applying semantic embeddings (Ollama, Hugging Face) with KNN for dynamic project matching."
              ghLink="https://github.com/XIUXIU25/user_research_web"
              // demoLink="https://editor.soumya-jit.tech/"
              tags={["FastAPI", "MongoDB", "Elasticsearch", "HuggingFace"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="GitHub User Activity"
              description="This tool allows you to see the latest activities (like pushes, issues, stars, etc.) of any GitHub user directly in your terminal."
              ghLink="https://github.com/XIUXIU25/github_activity"
              // demoLink="https://editor.soumya-jit.tech/"
              tags={["Python", "GitHub API"]}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
