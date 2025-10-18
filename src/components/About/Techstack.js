import React from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import matlabLogo from "../../Assets/tools/Matlab_Logo.png";
import bashLogo from "../../Assets/tools/bash.png";
import jenkinsLogo from "../../Assets/tools/jenkins.png";

function Techstack() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div style={{ padding: "50px" }}>
      <h2 className="purple">Languages</h2>
      <Row className="mb-4" style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />

        </Col>
        <Col xs={4} md={2} className="tech-icons">

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />

        </Col>
        <Col xs={4} md={2} className="tech-icons">

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />

        </Col>
        <Col xs={4} md={2} className="tech-icons">

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" />

        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img alt="Matlab Logo" src={matlabLogo} style={{ width: "100%", height: "100%" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img alt="Bash Logo" src={bashLogo} style={{ width: "100%", height: "100%" }} />
        </Col>
      </Row>

      <h2 className="purple">Frameworks</h2>
      <Row className="mb-4" style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original-wordmark.svg" />
        </Col>         
      </Row>

      <h2 className="purple">Databases</h2>
      <Row className="mb-4" style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original-wordmark.svg" />
        </Col>
      </Row>

      <h2 className="purple">Tools & OS</h2>
      <Row className="mb-4" style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vault/vault-plain-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img alt="Jenkins Logo" src={jenkinsLogo} style={{ width: "100%", height: "100%" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original-wordmark.svg" />
        </Col> 
        <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original-wordmark.svg" />
        </Col> 
        <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-plain-wordmark.svg" />
        </Col>
      </Row>

      <h2 className="purple">Cloud Providers</h2>
      <Row className="mb-4" style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />

        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg" />
        </Col>
      </Row>
      <h2 className="purple">Badges</h2>
      <Row className="mb-4" style={{ justifyContent: "center" }}>
        <Col xs={12} md={6} className="tech-icons">
          <div
            data-iframe-width="500"
            data-iframe-height="250"
            data-share-badge-id="989a4434-25a1-45b6-9376-473c86a46311"
            data-share-badge-host="https://www.credly.com"
          ></div>
        </Col>
        <Col  xs={12} md={6} className="tech-icons">
          <div
            data-iframe-width="500"
            data-iframe-height="250"
            data-share-badge-id="4c3a14a2-3d46-4bbc-911b-7bbefbc79465"
            data-share-badge-host="https://www.credly.com"
          ></div>
        </Col>
      </Row>
      
    </div>
  );
}

export default Techstack;
