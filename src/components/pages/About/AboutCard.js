import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           <span className="purple"> Total Years of experience  </span>
            6 years of Experience in Software Development following Agile.
            Worked in Arisglobal for 4 years, White clarke now called Solifi for 2 years
          <span className="purple"> Relevant years</span>
            Java 1.7, 1.8 -> 6 years
            Spring Boot and microservices -> 2 years
            Database/PlSql/Sql -> 3 years
            RestFul Api -> 3 years
            ################################
            Experienced In backend software application development with Java, Spring boot, Microservices, Oracle SQL, PostgreSQL, Restful Architecture, Birt report, MongoDB, Apache camel, Apache ActiveMQ, Javascript, Docker, Teamcity, DS, Vm Template.
           <br/><br/>
           Personal details
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Email: s.muazzam.siddiqhi@gmail.com
            </li>
            <li className="about-activity">
              <ImPointRight /> Phone: +918951631056
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


        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          A self-motivated and enthusiastic web developer with a deep interest in 
          <span className="purple"> Java, Spring Boot, Microservices</span>. To work in the Software industry with modern web technologies
           of different local & multinational Software companies of India 
           and grow rapidly with increasing responsibilities.
           <br/><br/>
           Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading and researching about India's freedom movements
            </li>
          </ul>

          <p  style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Let the mind cheerful but calm!"{" "}
          </p>
          <footer className="blockquote-footer ">Swami Vivekananda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
