import React from "react";
import CardBody from ".";
import CardHeading from "../CardHeading";
import Card from "../CardImage";
import "./style.css";

function Card() {
  return (
    <div>
      <CardHeading />
      <CardBody />
      {/* <CardBody /> */}
      {/* <CardBtn
        style={{ opacity: 1 }}
        data-value="back"
      /> */}
      {/* <CardBtn
        style={{ opacity: 1 }}
        data-value="next"
      /> */}
    </div>
  );
}

export default Card;