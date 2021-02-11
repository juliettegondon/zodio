import React from "react";
import "./style.css";
import signs from "../../signs.json";
import FlipCard from "../FlipCard";

function CardInfo(props) {
  return (
    <div>
       {signs[0].name}
       <p>
       {signs[0].date}
       {signs[0].element}
       </p>
    </div>
  );
}

export default CardInfo;
