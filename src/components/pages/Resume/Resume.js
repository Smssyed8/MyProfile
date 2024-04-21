import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../common/Particle";
import ResumeContent from "./ResumeContent";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const pdf = 'https://drive.google.com/file/d/1trsOB4sbv5gKRQp-bzmmFYhwvPZfBC0g/view?usp=sharing'
  const calendly = 'https://calendar.ai/syed'

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
                "Experienced Developer with a strong focus on backend applications. Proficient in Java 8, 9, and 11, J2EE, and JavaScript. Skilled in frameworks such as Spring Boot, Microservices, Apache Camel, and ActiveMQ. Expertise in RESTful Web services/ APIs, GraphQL APIs, Swagger, and SQL (Oracle SQL, PostgreSQL, MySQL) and NoSQL (MongoDB) databases. Experienced in Docker, TeamCity, GitHub, and DevOps principles. Proficient in Kibana and Elastic Search, MQ, Grafana. Committed to Agile methodologies, software development best practices and driving continuous improvement through CI/CD practices. Knowledgeable in test automation using TestNG and Selenium. Additionally, good in frontend with React, Artemis, Linux, JSON, InfluxDB, Cypress, Mockito, unit testing, VM Template, Python script, Git, Scrum, and Jenkins. Developed backend software for both consumer-facing like customer, dealer portal and internal products, including user, fleet management, dealer management tools. Hands-on with backend experience. Curious and open-minded person striving continuously to develop your skillsets. I am eager to develop a T-shaped profile by deepening and broadening my expertise. Self-motivated and keen on networking for technical collaboration. Recipient of a Delivery Excellence award for consistently delivering highly reliable, flexible, and scalable solutions. Certified AWS Developer Associate. Dedicated to delivering reliable solutions tailored to meet business-specific needs."
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={9} className="resume-center">
            <ResumeContent
              title="Skills"
              content={[
                "Programming Languages: Java (Java 8, 9, 11, 17), J2EE, JavaScript, Node.js.",
                "Frameworks and Technologies: Spring Boot, Microservices, Apache Camel, Apache ActiveMQ, RESTful Web services/ APIs, GraphQL APIs, Swagger, SOAP, Birt Report, Velocity Template, HTML, Artemis, JSON, AsposeJs, SpringBoot.",
                "Testing and Automation: JUnit, Selenium, TestNG, Cypress, Cucumber, Mockito.",
                "Databases: SQL (Oracle SQL, PostgreSQL, MySQL) and NoSQL (MongoDB) databases.",
                "DevOps: Docker, TeamCity, GitHub, Gerrit, Bitbucket, Git, Sonar, Maven, Jira, Linux.",
                "Agile Development: Scrum, Agile Methodologies, Kanban.",
                "CI/CD: Continuous Integration/Continuous Deployment principles, Jenkins.",
                "Cloud: AWS, cloud native services.",
                "Learning: Kubernetes, Kafka as event streaming platform, ArgoCD, Jaeger, and Prometheus.",
                "Others: Kibana and Elastic Search for observability, Multithreading, Asynchronous programming, Solid Design Principles, Design Patterns, Data Structures and Algorithms, Agile (SAFE) methodologies, Scrum, Drools, JavaScript, AWS (EC2, S3), Jenkins, Batch processing, Grafana, InfluxDB, Test-driven Development, Saas, JPA, MVC, MQ, Maven, React, NodeJs.",
                "Language: Proficient in English, Applied for Swedish classes at SFI."
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={9} className="resume-center">
            <ResumeContent
              title="Experience"
              content={[
                "Senior Software Engineer, Volvo Group - Presis Konsult, 2022 – Present",
                "Projects: Volvo Group Connected Solution, Customer Portal and Customer Fleet Management.",
                "Senior Software Engineer, Arisglobal-Nordic Capital, 2015 – 2019",
                "Projects: Core Platform, Customer and Dealer Management System, Invoice, and Insurance."
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={9} className="resume-center">
            <ResumeContent
              title="Education"
              content={[
                "Bachelor of Engineering in Computer Science, Visvesvaraya Technological University, PESITM, India, Jul 2011 - May 2015."
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={9} className="resume-center">
            <ResumeContent
              title="Honors & Awards"
              content={[
                "AWS Developer Associate Certificate",
                "LinkedIn And Udemy Certifications: Java, Solid principles, Spring.",
                "Received Delivery Excellence award for extraordinary performance among a team of 80 people. Recognized with Excel in Living up to Values award at Arisglobal."
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
