import { Container, Row, Col } from "react-bootstrap";
import youtube from "../../../Assets/Projects/youtube-clone/youtube.png"
import youtubeCloneWorkflow from "../../../Assets/Projects/youtube-clone/youtube-clone-workflow.png"

function YoutubeCloneDetail() {
    return (
        <Container fluid className="about-section">
            <Container fluid style={{ paddingLeft: "60px", paddingRight: "60px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <h1 style={{ fontSize: "3rem" }}>YouTube Skeleton Clone</h1>
                    <h4 style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
                        A simplified YouTube clone built for learning full‑stack and cloud infra development concepts, focusing on video upload, processing, and viewing.
                    </h4>
                    <img
                        src={youtube}
                        alt="YouTube Clone Workflow"
                        style={{ maxWidth: "1000px", height: "auto", display: "block", margin: "0 auto", borderRadius: "12px" }}
                    />


                    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                        <h1>Highlights:</h1>

                        <section>
                            <h2 style={{ fontSize: "2.5rem" }}>High‑Level Architecture</h2>
                            <div style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                                <p>This project implements the core workflow of YouTube using cloud services:</p>
                                <ul style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                                    <li>Users sign in using Google Sign‑In via Firebase Auth.</li>
                                    <li>Video uploads go directly to Google Cloud Storage using signed URLs.</li>
                                    <li>Upload events are published to Cloud Pub/Sub for durability and async processing.</li>
                                    <li>Cloud Run workers transcode videos using ffmpeg.</li>
                                    <li>Processed videos are stored back in Cloud Storage.</li>
                                    <li>Firestore stores video metadata such as title, description, and processing status.</li>
                                    <li>Firebase Functions provide APIs for upload URL generation and metadata retrieval.</li>
                                    <li>A Next.js client (hosted on Cloud Run) allows users to upload and view videos.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 style={{ fontSize: "2.5rem" }}>Simplified Workflow</h2>
                            <div style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                                <p>The system follows this straightforward pipeline:</p>
                                <ul style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
                                    <li>User signs in and requests a signed upload URL.</li>
                                    <li>User uploads a raw video to Cloud Storage.</li>
                                    <li>Upload triggers a Pub/Sub message containing video info.</li>
                                    <li>Cloud Run worker transcodes the video.</li>
                                    <li>Worker saves processed video and writes metadata to Firestore.</li>
                                    <li>User can view available uploaded videos through the web UI.</li>
                                </ul>
                            </div>
                            <img
                                src={youtubeCloneWorkflow}
                                alt="YouTube Clone Workflow"
                                style={{ maxWidth: "1400px", height: "auto", display: "block", margin: "20px auto", borderRadius: "12px" }}
                            />
                        </section>
                    </div>

                </div>
            </Container>
        </Container>
    );
}

export default YoutubeCloneDetail;