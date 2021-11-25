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
              title="Cloudio"
              description="Cloudio is a virtual phone system for small businesses. With an easy in-app setup you'll get a landline phone number. Calls made to this number will be received on your mobile phone.Easily invite your co-workers and setup the preferred behavior for incoming calls."
              link=""
            />
          </Col>

          <Col md={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={qring}
              isBlog={false}
              title="Qring WebCall"
              description="With QRing you always have control over your valuable items. Our free app makes it easy for you to get in touch with the finder of your lost items or runaway pets.That is how it works
              ,Attach a QRing sticker or tag to your valuables or, for example, to your pet's collar.
              ,Add the item to the app.
              ,Done . What if I lose the item?
              - As soon as the finder scans the QRing sticker or tag, you will immediately receive a notification in the app where you immediately see at which location the item was just scanned.
              - The finder can then send you a message or call and the finder will never see your details. The finder does not need the QRing app for this."
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
