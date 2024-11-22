import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Putih_Simple_CV_Lamaran_Desain_Grafis-removebg(1).png";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center" style={{ minHeight: "100vh" }}>
            <Col
              md={5}
              style={{
                paddingBottom: 10,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "1000px", // Membuat gambar lebih besar
                  width: "auto", // Memastikan proporsi gambar tetap terjaga
                }}
              />
            </Col>

            <Col
              md={7}
              className="home-header"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Heloo gesss!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Muhammad Satrioadi</strong>
              </h1>

              <div style={{ paddingTop: 20, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
