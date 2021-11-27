import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../common/Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Projects from '../Projects/Projects.js'
import About from '../About/About'
import Resume from '../Resume/Resume.js'
import { DeveloperAnimation } from '../../../lotties/Lotties';
import Tilt from "react-parallax-tilt";
import { AiOutlineDownload } from "react-icons/ai";
import Card from "react-bootstrap/Card";
import Copy from "../../common/Copy";
import { ImPointRight } from "react-icons/im";

function Home() {
  const pdf = 'https://drive.google.com/file/d/1trsOB4sbv5gKRQp-bzmmFYhwvPZfBC0g/view?usp=sharing'
  const cal = 'https://calendly.com/s-muazzam-siddiqhi'
  const dwn = 'https://docs.google.com/document/d/1XvIdphkNLPkICvHjXUbf2pneT9tc472I/edit?usp=sharing&ouid=112689532247814358148&rtpof=true&sd=true'
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">

          <Row>
            <Col md={5} xs={12} sm={12} style={{ paddingBottom: 20, position: "absolute", display: "flex" }}>
              <div className="developer-animation" >
                <Tilt><DeveloperAnimation /></Tilt>
              </div>


            </Col>
            <Col xs={12} className="home-header1">

              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong  > &nbsp; Syed Muazzam Siddiqhi</strong>

              </h1>

              <div style={{ paddingLeft: 50, textAlign: "left" }} className="main-name">
                <p style={{ color: "white" }}> Scroll below and copy the details </p>
                <p>Note: <span style={{ color: "white" }}>I may miss out call, you will get all HR details here,  please drop a mail </span> </p>
                <Type />
                <br />
                <br />
                <br />
                <Row style={{ display: "block" }}>
                  <div class="buttons">

                    <div class="action_btn">
                      <Button variant="primary" class="action_btn " href={pdf} target="_blank">
                        <AiOutlineDownload />
                        &nbsp; Get Résumé
                      </Button>

                      <Button variant="primary" class="action_btn " style={{ paddingLeft: 5 }} href={cal} target="_blank">
                        <AiOutlineDownload />
                        &nbsp; My Calendar
                      </Button>

                      <Button variant="primary" class="action_btn " style={{ paddingLeft: 5 }} href={dwn} target="_blank">
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
              <Card className="quote-card-view">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                      <ImPointRight /> <span className="purple"> Total Years of experience  </span><br />
                      6 years of Experience in Software Development following Agile.<br />
                      <br />
                      <ImPointRight /><span className="purple"> Relevant years</span><br />
                      Java 1.7, 1.8 -`{'>'}` 6 years<br />
                      Spring Boot and microservices -`{'>'}` 2 years<br />
                      Database/PlSql/Sql -`{'>'}` 3 years<br />
                      RestFul Api -`{'>'}` 3 years<br /><br />
                      <ImPointRight /><span className="purple"> Also Know</span>
                      -`{'>'}` PostgreSQL, Birt report, MongoDB, Apache camel,
                      Apache ActiveMQ, Javascript, Docker, Teamcity, DS, Vm Template.
                      <br /><br />
                      <ImPointRight /><span className="purple"> Personal Details</span>
                    </p>
                    <ul>
                      <br />
                      <ImPointRight /><span className="purple"> Contact</span>
                      <li className="about-activity">
                        <ImPointRight /> Email: s.muazzam.siddiqhi @gmail.com
                      </li>
                      <li className="about-activity">
                        <ImPointRight /> Phone: +918951631056
                      </li>

                      <span className="purple"> Education</span>
                      <li className="about-activity">
                        <li className="about-activity"><ImPointRight /> Bachelor of Engineering in Computer Science - 2015 - 60%</li>
                        <li className="about-activity"><ImPointRight /> 2nd PU - 2011 - 62%</li>
                        <li className="about-activity"><ImPointRight /> 10th - 2009 - 93.92%</li>
                      </li>
                      <span className="purple"> Location</span>
                      <li className="about-activity">
                        <li className="about-activity"><ImPointRight /> Native and work location : Mysore</li>
                        <li className="about-activity"> <ImPointRight /> Ready to Relocate : yes</li>
                        <li className="about-activity"><ImPointRight /> Preferred location : Anywhere outside India</li>
                        <li className="about-activity"><ImPointRight /> Preferred location in India : Bangalore</li>
                      </li>
                      <span className="purple"> Worked in</span>
                      <li className="about-activity">
                        <li className="about-activity"><ImPointRight /> Arisglobal : 4 years</li>
                        <li className="about-activity"> <ImPointRight /> White Clarke Group, acquired by Ids group, now renamed to Solifi : 2 years</li>
                      </li>
                      <span className="purple"> Skillset</span>
                      <li className="about-activity">
                        <li className="about-activity"><ImPointRight /> Main Skills/Ready for interview : Java 1.7,8, Spring, Spring Boot, Microservices, Rest Api, Oracle Plsql, Design Patterns, Algorithms, DataStructures</li>
                        <li className="about-activity"><ImPointRight /> Also worked on but not prepared for Interview : Soap, Docker, Drools, Vm Template, Birt report, PostgreSql, MongoDb, Nodejs, React, Javascript</li>
                      </li>
                      <li className="about-activity">
                        <ImPointRight /> Availability: I may miss phone call, please drop a mail, you can schedule meeting directly after 3 pm.
                      </li>
                      <li className="about-activity">
                        <ImPointRight /> Resume: Latest attached here, please download </li>
                      <li className="about-activity">
                        <ImPointRight /> Need more details?: Request you to drop a mail </li>
                      <li className="about-activity">
                        <ImPointRight /> I am serving notice period: Last working day is Jan 19th 2022 </li>
                    </ul>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>




          </Row>


        </Container>

      </Container >

      {/* <Home2 /> */}
      < About />
      {/* <Projects /> */}
      {/* <Resume /> */}
    </section >
  );
}

export default Home;
