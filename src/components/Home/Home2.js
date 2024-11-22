import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/H3.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Sapa <span className="purple"> SATRIO </span> Dulu 
            </h1>
            <p className="home-about-body">
            Halo, saya Muhammad Satrioadi
              <br />
              <br />Seorang mahasiswa S1 Program Studi Teknologi Informasi.
              Hobi saya berkaitan dengan dunia otomotif
              <i>
              </i>
              <br />
              <br />
               &nbsp;
              <i>
                <b className="purple">Ini adalah Web </b> Portofolio saya.{" "}
                
              </i>
              <br />
              <br />
              " Selalu ingin belajar dan menciptakan sesuatu yang berdampak positif,
              Dan ingin menjadi entitas yang berguna. "
  
          
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SOCIAL MEDIA</h1>
            <p>
              Tak Kenal <span className="purple">Maka </span>Tak Sayang
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/muhammadsatrioadi/Website"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@MuhammadSatrioadi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/msatrioadi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
