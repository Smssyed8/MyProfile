import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../common/Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { AiOutlineDownload } from "react-icons/ai";
import { ImPointRight } from "react-icons/im";

function Home() {
  const pdf = 'https://drive.google.com/file/d/1Ec4AsVgU2bt_ZCTH8jWUN1ikW7U5dY01/view?usp=sharing'
  const cal = 'https://calendar.ai/syed'
  const dwn = 'https://drive.google.com/file/d/1Ec4AsVgU2bt_ZCTH8jWUN1ikW7U5dY01/view?usp=sharing'

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
  <Col className="d-flex justify-content-center">
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
  </Col>
</Row>

              </div>
              <br />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="home-header">
              <h3 className="quote-header">Experience</h3>
              <div className="quote-card-view">
                <blockquote className="blockquote mb-0">
                  <p>
                    <ImPointRight /> <span className="purple">Senior Software Engineer</span><br />
                    Volvo Group - Presis Konsult | 2022 – Present<br />
                    - Projects: Volvo Group Connected Solution, Customer Portal and Customer Fleet Management.<br />
                    - Integrated backend APIs with frontend React in the Customer portal application.<br />
                    - Implemented Database indexing and ngram for performance and scaling.<br />
                    - Implemented RateLimiter and caching techniques.<br />
                    - Resolved technical debt and implemented new components based on client requirements.<br />
                    - Developed microservices following best practices and ensured comprehensive component tests for high-quality deliverables. Implemented JMS, Events and Messages publish and consume.
                    ...
                  </p>
                  <p>
                    <ImPointRight /> <span className="purple">Java Developer</span><br />
                    White Clarke (Solifi) | 2020 – 2022<br />
                    - Projects: Core Platform, Customer and Dealer Management System, Invoice, and Insurance.<br />
                    - Auto Finance, Asset finance and Leasing, Insurance | Clients: Honda Finance, BNP, Daimler.<br />
                    - Implemented UI changes and validations using ReactJS, ensuring an exceptional user experience in agile product development influencing customer satisfaction.
                    ...
                  </p>
                  <p>
                    <ImPointRight /> <span className="purple">Senior Software Engineer</span><br />
                    Arisglobal-Nordic Capital | 2015 – 2019<br />
                    - Drove the integration of multiple applications via Restful Web services architecture, ensuring seamless communication and data exchange. Events publish and consumer and Saas.<br />
                    - Developed efficient Birt reports to provide insightful data visualizations and analytics for clients in the Lifescience domain. Mentored and guided a team of developers, fostering a collaborative and knowledge-sharing environment.
                    ...
                  </p>
                </blockquote>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="home-header">
              <h3 className="quote-header">Skills</h3>
              <div className="quote-card-view">
                <ul>
                  <li><ImPointRight /> Programming Languages: Java (Java 8, 9, 11, 17), J2EE, JavaScript, Node.js.</li>
                  <li><ImPointRight /> Frameworks and Technologies: Spring Boot, Microservices, Apache Camel, Apache ActiveMQ, RESTful Web services/ APIs, GraphQL APIs, Swagger, SOAP, Birt Report, Velocity Template, HTML, Artemis, JSON, AsposeJs, SpringBoot.</li>
                  <li><ImPointRight /> Testing and Automation: JUnit, Selenium, TestNG, Cypress, Cucumber, Mockito.</li>
                  <li><ImPointRight /> Databases: SQL (Oracle SQL, PostgreSQL, MySQL) and NoSQL (MongoDB) databases.</li>
                  <li><ImPointRight /> DevOps: Docker, TeamCity, GitHub, Gerrit, Bitbucket, Git, Sonar, Maven, Jira, Linux.</li>
                  <li><ImPointRight /> Agile Development: Scrum, Agile Methodologies, Kanban.</li>
                  <li><ImPointRight /> CI/CD: Continuous Integration/Continuous Deployment principles, Jenkins.</li>
                  <li><ImPointRight /> Cloud: AWS, cloud native services.</li>
                  <li><ImPointRight /> Learning: Kubernetes, Kafka as event streaming platform, ArgoCD, Jaeger, and Prometheus.</li>
                  <li><ImPointRight /> Others: Kibana and Elastic Search for observability, Multithreading, Asynchronous programming, Solid Design Principles, Design Patterns, Data Structures and Algorithms, Agile (SAFE) methodologies, Scrum, Drools, JavaScript, AWS (EC2, S3), Jenkins, Batch processing, Grafana, InfluxDB, Test-driven Development, Saas, JPA, MVC, MQ, Maven, React, NodeJs.</li>
                  <li><ImPointRight /> Language: Proficient in English, Applied for Swedish classes at SFI.</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="home-header">
              <h3 className="quote-header">Contact Information</h3>
              <div className="quote-card-view">
                <ul>
                  <li><ImPointRight /> Email: Syed.eu.my@gmail.com</li>
                  <li><ImPointRight /> Phone: (+46) 764423777</li>
                  <li><ImPointRight /> Location: Gothenburg, Sweden</li>
                  <li><ImPointRight /> Portfolio: <a href="https://syedms.netlify.app/">https://syedms.netlify.app/</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
