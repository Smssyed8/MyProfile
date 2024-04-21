import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../common/Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { AiOutlineDownload } from "react-icons/ai";
import { ImPointRight } from "react-icons/im";

function Home() {
  const pdf = 'https://drive.google.com/file/d/1Ec4AsVgU2bt_ZCTH8jWUN1ikW7U5dY01/view?usp=sharing';
  const cal = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Evy4T8_z7kXdwzntZI_JEeiMGc7PSu7d8D8XSHcNluBvCGjx_57Zj2CJkxCtqo4az3_9m98MI?gv=true';
  const dwn = 'https://drive.google.com/file/d/1Ec4AsVgU2bt_ZCTH8jWUN1ikW7U5dY01/view?usp=sharing';

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
                  {/* Skills content */}
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="home-header">
              <h3 className="quote-header">Contact Information</h3>
              <div className="quote-card-view">
                <ul>
                  {/* Contact information content */}
                </ul>
              </div>
            </Col>
          </Row>
          {/* Embed the Google Calendar here */}
          <Row>
            <Col xs={12} className="home-header">
              <h3 className="quote-header">Book an Appointment</h3>
              <div className="quote-card-view">
                <iframe
                  src={cal}
                  style={{ border: 0, width: "100%", height: 600 }}
                  frameborder="0"
                  title="Google Calendar Appointment Scheduling"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
