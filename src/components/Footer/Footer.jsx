import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assests/images/logo.jpeg";
import "./footer.css";

const footerQuickLinks = [
  {
    display: "About Us",
    url: "#",
  },
  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
  {
    display: "Reviews",
    url: "#",
  },

];

const footerInfoLinks = [
  {
    display: "Career With Us",
    url: "#",
  },
  {
    display: "CCNA Scope",
    url: "#",
  },

  {
    display: "CCNP Scope",
    url: "#",
  },
  {
    display: "CCIE Scope",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
            <i><img src={logo} alt="logo" height={55}/></i>
            </h2>

            <div className="follows">
            <p>INSJAIPUR</p>
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="https://www.facebook.com/IIHTJAIPUR" target="_blank">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.instagram.com/ins_global/" target="_blank">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.linkedin.com/company/institute-of-network-solutions/" target="_blank">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.youtube.com/@jjakhar" target="_blank">
                  <i class="ri-youtube-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: Sylhet, Bangladesh</p>
            <p> Phone: +88 0123456789 </p>
            <p>Email: example@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
