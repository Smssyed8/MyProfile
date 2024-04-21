import React from "react";
import { Col, Row, Badge } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";

function Techstack() {
  const comfortable = [
    'Java (Java 8, 9, 11, 17)',
    'J2EE',
    'JavaScript',
    'Spring Boot',
    'Microservices',
    'Apache Camel',
    'ActiveMQ',
    'RESTful Web services/ APIs',
    'GraphQL APIs',
    'Swagger',
    'SQL (Oracle SQL, PostgreSQL, MySQL)',
    'NoSQL (MongoDB)',
    'Docker',
    'TeamCity',
    'GitHub',
    'DevOps principles',
    'Kibana',
    'Elastic Search',
    'MQ',
    'Grafana',
    'TestNG',
    'Selenium',
  ];

  const familiar = [
    'React',
    'Artemis',
    'Linux',
    'JSON',
    'InfluxDB',
    'Cypress',
    'Mockito',
    'Unit testing',
    'VM Template',
    'Python script',
    'Git',
    'Scrum',
    'Jenkins',
  ];

  const tools = [
    'VS Code',
    'Github',
    'Svn',
    'Birt reports',
    'Chrome Dev Tool',
    'Netlify',
    'Bit bucket',
    'Notepad++',
  ];

  return (
    <Row style={{ justifyContent: "center", padding: "50px 0 50px 0" }}>
      <Col xs={12} md={4}>
        <h4 className="tech-stack-heading">Comfortable</h4>
        <div style={{ paddingTop: "20px" }}>
          {comfortable.map((data, i) => (
            <span key={i}>
              <Badge className="tech-badge">&nbsp; {data} &nbsp;</Badge>{" "}
              &nbsp;
            </span>
          ))}
        </div>
      </Col>
      <Col xs={12} md={4}>
        <h4 className="tech-stack-heading">Familiar</h4>
        <div style={{ paddingTop: "20px" }}>
          {familiar.map((data, i) => (
            <span key={i}>
              <Badge className="tech-badge">&nbsp; {data} &nbsp;</Badge>{" "}
              &nbsp;
            </span>
          ))}
        </div>
      </Col>
      <Col xs={12} md={4}>
        <h4 className="tech-stack-heading">Tools</h4>
        <div style={{ paddingTop: "20px" }}>
          {tools.map((data, i) => (
            <span key={i}>
              <Badge className="tech-badge">&nbsp; {data} &nbsp;</Badge>{" "}
              &nbsp;
            </span>
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
