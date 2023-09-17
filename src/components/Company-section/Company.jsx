import React from "react";
import "../Company-section/company-section.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import tcs from "../../assests/images/tcs.png";
import wipro from "../../assests/images/wipro.png";
import tema from "../../assests/images/tema.png";
import infosys from "../../assests/images/infosys.png";
import unisys from "../../assests/images/unisys.png";
import airtel from "../../assests/images/airtel.png";
import jio from "../../assests/images/jio.png";
import cisco from "../../assests/images/cisco.png";
import digital from "../../assests/images/digital.png";
import adani from "../../assests/images/adani.png";
import ibms from "../../assests/images/ibm.png";

const Company = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container className="man">
        <Row lg="12" className="text-center" >
          <h1 className="text-center">Hiring Partners</h1>
          <Col className="text-center hello">
          <Slider {...settings} >
                  <div className="text-center divi">
                    <img src={tcs} alt="tcs" />
                  </div>

                  <div>
                    <img src={wipro} alt="tcs"/>
                  </div>

                  <div>
                    <img src={tema} alt="tcs"/>
                  </div>

                  <div>
                    <img src={infosys} alt="tcs"/>
                  </div>
                  <div>
                    <img src={digital} alt="tcs"/>
                  </div>
                  <div>
                    <img src={unisys} alt="tcs"/>
                  </div>
                  <div>
                    <img src={airtel} alt="tcs"/>
                  </div>
                  <div>
                    <img src={cisco} alt="tcs"/>
                  </div>
                  <div>
                    <img src={jio} alt="tcs"/>
                  </div>
                  <div>
                    <img src={ibms} alt="tcs"/>
                  </div>
                  <div>
                    <img src={adani} alt="tcs"/>
                  </div>
                </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
