import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../../common/Particle";


import edibios from "../../../Assets/Projects/edubios.png";
import cloudio from "../../../Assets/Projects/cloudio.png";
import qring from "../../../Assets/Projects/qring.png";
import solidsnake from "../../../Assets/Projects/solidSnake.png";
import weather from "../../../Assets/Projects/weatherApp.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={cloudio}
              isBlog={false}
              title="LsPublish"
              description=""
              link=""
            />
          </Col>

          <Col md={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={qring}
              isBlog={false}
              title="Susar"
              description=""
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
