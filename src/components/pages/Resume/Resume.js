import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../common/Particle";
import ResumeContent from "./ResumeContent";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const pdf = 'https://drive.google.com/file/d/1Ec4AsVgU2bt_ZCTH8jWUN1ikW7U5dY01/view?usp=sharing'
  const calendly = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Evy4T8_z7kXdwzntZI_JEeiMGc7PSu7d8D8XSHcNluBvCGjx_57Zj2CJkxCtqo4az3_9m98MI?gv=true'

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={6} className="resume-left">
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Get Résumé
            </Button>
          </Col>
          <Col md={6} className="resume-right">
            <Button variant="primary" href={calendly} target="_blank">
              <AiOutlineDownload />
              &nbsp;My Calendar
            </Button>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={9} className="resume-center">
            <ResumeContent
              title="Summary"
              content={[
                // Summary content
              ]}
            />
          </Col>
        </Row>
        {/* Embed the Google Calendar here */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={9} className="resume-center">
            <iframe
              src={calendly}
              style={{ border: 0, width: "100%", height: 600 }}
              frameborder="0"
              title="Google Calendar Appointment Scheduling"
            ></iframe>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={9} className="resume-center">
            <ResumeContent
              title="Skills"
              content={[
                // Skills content
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={9} className="resume-center">
            <ResumeContent
              title="Experience"
              content={[
                // Experience content
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={9} className="resume-center">
            <ResumeContent
              title="Education"
              content={[
                // Education content
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={9} className="resume-center">
            <ResumeContent
              title="Honors & Awards"
              content={[
                // Honors & Awards content
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />&nbsp;Get Résumé
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
