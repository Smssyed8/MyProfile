import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../common/Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { AiOutlineDownload } from "react-icons/ai";
import { ImPointRight } from "react-icons/im";

function Home() {
  const pdf = 'https://drive.google.com/file/d/1trsOB4sbv5gKRQp-bzmmFYhwvPZfBC0g/view?usp=sharing'
  const cal = 'https://calendar.ai/syed'
  const dwn = 'https://docs.google.com/document/d/1XvIdphkNLPkICvHjXUbf2pneT9tc472I/edit?usp=sharing&ouid=112689532247814358148&rtpof=true&sd=true'

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col xs={12} className="home-header1">
              <h1 className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong> &nbsp; Syed Muazzam Siddiqhi</strong>
              </h1>
              <div className="main-name">
                <p>Scroll below and copy the details</p>
                <Type />
                <Row>
                  <div class="buttons">
                    <div class="action_btn">
                      <Button variant="primary" class="action_btn" href={pdf} target="_blank">
                        <AiOutlineDownload />
                        &nbsp; Get Résumé
                      </Button>
                      <Button variant="primary" class="action_btn" href={cal} target="_blank">
                        <AiOutlineDownload />
                        &nbsp; My Calendar
                      </Button>
                      <Button variant="primary" class="action_btn" href={dwn} target="_blank">
                        <AiOutlineDownload />
                        &nbsp; Download Below Details
                      </Button>
                    </div>
                  </div>
                </Row>
              </div>
              <br />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="home-header">
              <h3 className="quote-header">Professional Profile</h3>
              <div className="quote-card-view">
                <blockquote className="blockquote mb-0">
                  <p>
                    <ImPointRight /> <span className="purple">Total Years of experience:</span><br />
                    6 years of experience in Software Development following Agile methodologies.
                    <br />
                    <br />
                    <ImPointRight /><span className="purple">Relevant Skills:</span><br />
                    Java 8, 9, 11, Spring Boot, Microservices, RESTful Web Services, PostgreSQL, MongoDB, Docker, TeamCity, Kubernetes, Kafka, Linux.
                    <br />
                    <br />
                    <ImPointRight /><span className="purple">Additional Skills:</span><br />
                    Apache Camel, Apache ActiveMQ, JavaScript, HTML, TypeScript, React, Maven, Selenium, JUnit, Git.
                    <br />
                    <br />
                    <ImPointRight /><span className="purple">Personal Details:</span><br />
                    <ul>
                      <li>Email: s.muazzam.siddiqhi@gmail.com</li>
                      <li>Phone: +918951631056</li>
                      <li>Marital Status: Married</li>
                      <li>Reason For Change: Career Growth</li>
                    </ul>
                  </p>
                </blockquote>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
