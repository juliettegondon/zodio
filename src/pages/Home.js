import React from "react";
import Aztro from "../components/Aztro"
import Container from "../components/Container";

function Home() {
  return (
    <div>

        <h1>Zodio</h1>
        <h2>horoscope app from a libra gemini gemini</h2>
     
      <Container style={{ marginTop: 30 }}>
           <h1>today's horoscope</h1>
           <Aztro />
      </Container>
    </div>
  );
}

export default Home;
