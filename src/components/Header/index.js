import React from "react";
import Container from "../Container";
import "./style.css";

function Header() {
    return (
      <div>
          <Container fluid="md">
          <h1 className="zodio">ZODIO</h1>
          <h2 className="tagline">daily horoscopes from a <a href="https://github.com/juliettegondon">libra gemini gemini</a></h2>
          </Container>
      </div>
    );
  }
  export default Header;