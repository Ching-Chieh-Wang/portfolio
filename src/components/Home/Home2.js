import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE ABOUT <span className="purple"> ME</span>
            </h1>
            <p className="home-about-body">
  My journey to becoming a software engineer began unexpectedly. I studied 
  <b className="purple"> Civil Engineering</b> during my bachelor's degree. 
  In my final year, I enrolled in a <b className="purple">Python course </b> 
  and immediately fell in love with coding—the way the teacher explained concepts 
  and the creativity behind solving problems fascinated me. From creating patterns 
  like printing a Christmas tree with for loops to experimenting with algorithms, 
  I knew I wanted to explore more. 
  <br />
  <br />
  During my first master's in Civil Engineering, I asked my mentor if I could 
  combine my civil engineering background with software development. This led 
  me to create a <b className="purple">3D concrete crack reconstruction program</b>, 
  which gave me hands-on experience in applying programming to real-world problems. 
  <br />
  <br />
  Since then, I have fully committed to <b className="purple">software development </b> 
  and continue to pursue this path, building applications, improving systems, 
  and working toward my dream of becoming a professional software engineer.
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className=" img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET'S CONNECT</h1>
            <p>
              You can find me on these platforms:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ching-Chieh-Wang"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ching-chieh-wang/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=wangchingchiehjake@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
