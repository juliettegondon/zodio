import React from "react";
import Aztro from "../components/Aztro"
import Container from "../components/Container";
import Header from "../components/Header"
/* signs */
import Aquarius from "../components/Signs/Aquarius";
import Pisces from "../components/Signs/Pisces";
import Aries from "../components/Signs/Aries";
import Taurus from "../components/Signs/Taurus";
import Gemini from "../components/Signs/Gemini";
import Cancer from "../components/Signs/Cancer";
import Leo from "../components/Signs/Leo";
import Virgo from "../components/Signs/Virgo";
import Libra from "../components/Signs/Libra";
import Scorpio from "../components/Signs/Scorpio";
import Sagittarius from "../components/Signs/Sagittarius";
import Capricorn from "../components/Signs/Capricorn";



function Home() {
  return (
    <div>

       <Header/>
      <Container style={{ marginTop: 30 }}>
           <h1>today's horoscope</h1>
           <Aztro />
      </Container>
     
     
     
      <Container className="allSigns">
    <Aquarius />
    <Pisces />
    <Aries />
    <Taurus />
    <Gemini />
    <Cancer />
    <Leo />
    <Virgo />
    <Libra />
    <Scorpio />
    <Sagittarius />
    <Capricorn />
      </Container>
    </div>
  );
}

export default Home;
