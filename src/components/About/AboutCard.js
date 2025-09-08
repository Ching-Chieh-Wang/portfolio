import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
         <h1 style={{ fontSize: "2.6em" }}>
            </h1>
            <p className="home-about-body">
              I discovered my passion for programming early on and continuously strive to grow my skills.
              <br />
              <br />I am proficient in
              <b className="purple"> Python, Java, Go, JavaScript and C++. </b>
              <br />
              <br />
              My main interests include  &nbsp;
              <b className="purple"> building web applications and optimizing system performance </b>
              <br />
              <br />
              I also enjoy creating frontend experiences with
              <b className="purple"> NextJs, React, React Native, and Swift</b>.
              On the backend, I work with
              <b className="purple">
                Spring boot Java, Go, NodeJS, and FastAPI
              </b>

              <br />
              <br />
              I also have hands-on experience with databases and storage solutions including
              <b className="purple"> MongoDB, PostGreSQL, MySql, Redis, and ElasticSearch  </b>

              <br />
              <br />
              I am also experienced with cloud platforms such as <b className="purple">GCP, AWS, and OCI</b>.

            </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
