import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../common/Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const pdf = 'https://drive.google.com/file/d/1trsOB4sbv5gKRQp-bzmmFYhwvPZfBC0g/view?usp=sharing'
  const calendly = 'https://calendly.com/s-muazzam-siddiqhi'

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
            <h3 className="resume-title">Required details in short</h3>
            <Resumecontent
              title="Total Years of experience"
              content={["6 years of Experience in Software Development following Agile.",
              "Worked in Arisglobal for 4 years, White clarke now called Solifi for 2 years"
              ]}
            />
            <Resumecontent
              title="Relevant years"
              content={["Java 1.7, 1.8 -> 6 years",
               "Spring Boot and microservices -> 2 years",
               "Database/PlSql/Sql -> 3 years",
               "RestFul Api -> 3 years",
               "Experienced In backend software application development with Java, Spring boot, Microservices, Oracle SQL, PostgreSQL, Restful Architecture, Birt report, MongoDB, Apache camel, Apache ActiveMQ, Javascript, Docker, Teamcity, DS, Vm Template."
                ]} />   
             <Resumecontent
              title="Education and passed year"
              content={[ "Have done Bachelor of Engineering in Computer Science - 2015 passed"
              ]}
            />        
          </Col>
        </Row>
       <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="White Clarke acquired by IDS infotech and now renamed as Solifi  "
              date="Jan 2020 - Present"
              content={[
                "Projects: Core platform.",
        "Changed Restful Webservices integration to Amazon SQS Integration to use the producer-consumer methodology. UI changes and validations on basic ReactsJs",
        "Part of, Platform Development, globally distributed team with startup environment, Achieved validation through drools rule engine. Parsed JSON to browser UI on Node framework.",
        "Have contributed for the Test Automation of project on selenium. "
          ]}
            />
             </Col>
               <Col md={6} className="resume-right">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Arisglobal is the biggest and leading mid tier life sciences Product development company."
              date="2015 – 2019"
              content={[
                "Projects: Clinical, Susar, Publisher, Siteportal, DMS, RIMS integration, CTMS.",
                "Implemented API integrations via Restful Webservices architecture, WSDL, microservices. Created Efficient Birt reports. Mentored 3 developers. Developed customer focus Efficient validator for rules defined by FDA, Hyperlinks and bookmarks for documents on Pdfjs. ",
                "Implemented web edit feature for pdf document similar to Adobe. Created Esign feature, Document management web technology. Increased the code maintainability and flexibility by different data structures, algorithms, design patterns and Multithreading.",
                "Conceptualized POCs for Risk-Based Monitoring by the rule engine fundamentals, hybrid application. Technical leadership in System Design, the business logic of Pdf edit and rule validation. Worked with globally distributed teams on distributed systems in a collaborative way. Excellent interpersonal skills, good with people, ability to negotiate"
              
              ]}
            />
             </Col>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelor of Engineering in Computer Science"
              date="2015"
              content={["Pestim Shimoga, affiliated to Visvesvaraya Technological University Belgaum" ]}
            />
            <Resumecontent
              title="Certifications"
              content={[
                "Please find it on Linkedin"
              ]}
            />
          </Col>
        </Row>
         <Row style={{ justifyContent: "center", position: "relative" }}>
         <Col md={6} className="resume-center">
            <h3 className="resume-title">SkillSet</h3>
            <Resumecontent
              title="Main Skills"
              content={["Java, Java 8, J2EE, JavaScript. Oracle SQL, PostgreSQL, MongoDB, Restful Webservices." ]}
            />
            <Resumecontent
              title="Also having knowledge on, but not prepared for interview"
              content={["Nodejs, Apache Camel, Apache ActiveMQ, Spring Boot, Microservices, GitHub, Soap, Docker, Birt Report, Velocity Template, Html, Analytics, Design Implementation, Algorithm design, Frameworks, Drools, Algo, Junit Testing, Sonar, Maven, Jira, Linux, Motivated, flexible."]}
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
