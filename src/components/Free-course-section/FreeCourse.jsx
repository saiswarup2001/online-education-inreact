import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/rd1.png";
import courseImg02 from "../../assests/images/courseImg002.jpeg";
import courseImg03 from "../../assests/images/courseImg03.jpeg";
import courseImg04 from "../../assests/images/courseImg004.avif";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "RHCA",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 4.7,
  },
  {
    id: "02",
    title: "CCNA",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 3.7,
  },

  {
    id: "03",
    title: "CyberSecurity & Ethical Hacking",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 4.7,
  },

  {
    id: "04",
    title: "AWS",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 4.7,
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Courses</h2>
            <br />
            <p>Most demanding Course in Industry</p>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
