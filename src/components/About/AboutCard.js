import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Perkenalkan, Saya <span className="purple">Muhammad Satrioadi </span>
            dari <span className="purple"> Sleman, Yogyakarta.</span>
            <br />
            Saya sedang melaksanakan studi S1 di Program Studi Teknologi Informasi UNISA .
            <br />
            Saya juga suka mempelajari dunia otomotif .
            Dan saya sedikit suka Matematika.
            <br />
            <br />
            Beberapa Hal yang saya sukai.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ngoding
            </li>
            <li className="about-activity">
              <ImPointRight /> Repair motor
            </li>
            <li className="about-activity">
              <ImPointRight /> P Balap
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Sebuah Cerita akan menyedihkan,jika kau nyaman di dalamnya."{" "}
          </p>
          <footer className="blockquote-footer">Satrioadi2024.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
