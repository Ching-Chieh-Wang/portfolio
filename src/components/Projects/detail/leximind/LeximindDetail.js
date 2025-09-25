// src/components/Projects/LeximindDetail.js

import { Container, Row, Col } from "react-bootstrap";
import leximind1 from "./leximind 1.png"
import leximind2 from "./leximind 2.png"
import leximind3 from "./leximind 3.png"
import leximind4 from "./leximind 4.png"
import leximind5 from "./leximind 5.png"


function LeximindDetail() {
  return (
    <Container fluid className="about-section">
      <Container fluid style={{ paddingLeft: "60px", paddingRight: "60px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1 style={{ fontSize: "3rem" }}>Leximind - Vocabulary Learning Platform</h1>
          <h4 style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
            A full-stack web application for efficient vocabulary memorization.
            Features user authentication (OAuth), personalized vocabulary
            collection management, and an interactive sliding vocabulary gallery.
          </h4>

          <img
            src={leximind1}
            alt="leximind1"
            style={{ maxWidth: "1000px", height: "auto", display: "block", margin: "0 auto", borderRadius: "12px" }}
          />
          <img
            src={leximind2}
            alt="leximind2"
            style={{ maxWidth: "1000px", height: "auto", display: "block", margin: "0 auto", borderRadius: "12px" }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <h1>Highlight: </h1>
            <section>
              <h2 style={{ fontSize: "2.5rem" }}>Cache-Aside Pattern</h2>
              <div style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                <p>This diagram shows how the application serves user requests for a vocabulary collection page.</p>
                <p>Read Workflow:</p>
                <ul style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                  <li>Application checks cache first for vocabulary data.</li>
                  <li>If cache miss, fetches data from the database.</li>
                  <li>Stores fetched data in cache for future requests.</li>
                </ul>
                <p>Write Workflow:</p>
                <ul style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                  <li>Updates are made directly to the database.</li>
                  <li>Cache is invalidated or updated accordingly.</li>
                </ul>
                <p>Benefit: ➡️ Keeps frequently read vocabulary collection pages fast, since most reads are served from Redis. At the same time, invalidating cache entries on CRUD ensures users always see fresh data after updates, striking a balance between speed and consistency.</p>
              </div>
              <img
                src={leximind3}
                alt="Cache-Aside Pattern"
                style={{ maxWidth: "1000px", height: "auto", display: "block", margin: "0 auto", borderRadius: "12px" }}
              />
            </section>

            <section>
              <h2 style={{ fontSize: "2.5rem" }}>Cache-Behind Pattern</h2>
              <div style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                <p>This diagram shows how page view counts are tracked.</p>
                <ul style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                  <li>Increments are made to Redis counters on each page view.</li>
                  <li>Periodic batch synchronization updates counts to Postgres.</li>
                </ul>
                <p>Benefit: ➡️ Handles high-frequency page view events efficiently by writing only to Redis in real time. This reduces direct Postgres writes, lowers system load, and still maintains eventual consistency by syncing counts in batches.</p>
              </div>
              <img
                src={leximind4}
                alt="Cache-Behind Pattern"
                style={{ maxWidth: "800px", height: "auto", display: "block", margin: "0 auto", borderRadius: "12px" }}
              />
            </section>

            <section>
              <h2 style={{ fontSize: "2.5rem" }}>Write-Through + Event Stream Hybrid</h2>
              <div style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                <p>This diagram shows how frequent 'memorized word' toggles are handled.</p>
                <ul style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                  <li>Toggles update a Redis Set synchronously.</li>
                  <li>Changes are appended to a Redis Stream asynchronously.</li>
                  <li>A worker processes the stream and batch syncs updates to the database.</li>
                </ul>
                <p>Benefit: ➡️ Provides low-latency feedback to users when toggling 'memorized' status because Redis is updated instantly. Meanwhile, the Redis Stream and worker batching strategy minimize database write load, making the system responsive for the user and scalable for heavy traffic.</p>
              </div>
              {/* Placeholder for third image */}
              <img
                src={leximind5}
                alt="Write-Through + Event Stream Hybrid"
                style={{ maxWidth: "800px", height: "auto", display: "block", margin: "0 auto", borderRadius: "12px" }}
              />
            </section>
          </div>

        </div>
      </Container>
    </Container>
  );
}

export default LeximindDetail;