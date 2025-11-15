import { Container, Row, Col } from "react-bootstrap";
import cdc from "../../../../Assets/Projects/zwap/cdc.png"
import zwap from "../../../../Assets/Projects/zwap/zwap.png"

function ZwapDetail() {
  return (
    <Container fluid className="about-section">
      <Container fluid style={{ paddingLeft: "60px", paddingRight: "60px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1 style={{ fontSize: "3rem" }}>Zwap - Second‑Hand Trading Platform</h1>
          <h4 style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
            A microservice-based second‑hand trading platform that allows users to post products, browse items, and make purchases.
          </h4>


          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <h1>Highlight: </h1>
            <section>
              <h2 style={{ fontSize: "2.5rem" }}>Microservice Architecture</h2>
              <div style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                <p>The platform is divided into multiple independent microservices:</p>
                <ul style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                  <li>User Service — integrates with Firebase Authentication and Firebase Storage.</li>
                  <li>Product Read Service — reads product details from MongoDB with Redis as a read cache.</li>
                  <li>Product Write Service — writes product data to MongoDB and updates Redis.</li>
                  <li>Product Search Service — built on Elasticsearch for fast product search.</li>
                </ul>
                <p>To coordinate these services:</p>
                <ul style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                  <li>Eureka Service Discovery is used for service registration and discovery.</li>
                  <li>An API Gateway routes incoming traffic based on URL prefixes.</li>
                  <li>Jenkins and GitHub Actions automate CI/CD for all services.</li>
                  <li>HashiCorp Vault secures sensitive configuration and secrets.</li>
                  <li>A Spring Cloud Config Server manages centralized configuration for each microservice.</li>
                  <li>A shared gRPC proto repository centralizes gRPC definitions across services.</li>
                </ul>
              </div>
              <img
                src={zwap}
                alt="zwap system"
                style={{ maxWidth: "1000px", height: "auto", display: "block", margin: "0 auto", borderRadius: "12px" }}
              />
            </section>

            <section>
              <h2 style={{ fontSize: "2.5rem" }}>Real‑Time Syncing Mechanism</h2>
              <div style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                <p>Product data updates flow through a real‑time syncing pipeline:</p>
                <ul style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                  <li>A MongoDB Source Connector listens for data changes.</li>
                  <li>Each change is published to Kafka as an event.</li>
                  <li>A Redis Sink Connector stores relevant cache updates.</li>
                  <li>An Elasticsearch Sink Connector indexes product documents for search.</li>
                </ul>
                <p>This guarantees product data stays consistent across MongoDB, Redis, and Elasticsearch, providing low‑latency reads and fast search performance.</p>
              </div>
              <img
                src={cdc}
                alt="CDC pipeline"
                style={{ maxWidth: "1000px", height: "auto", display: "block", margin: "0 auto", borderRadius: "12px" }}
              />
            </section>
          </div>

        </div>
      </Container>
    </Container>
  );
}

export default ZwapDetail;