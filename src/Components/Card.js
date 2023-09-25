import "./Card.scss";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import Button from "./Button";
import { data } from "./Data";
import { useEffect, useState } from "react";

export default function Card({ cardDetails, border, newBorder }) {
  return (
    <div
      className="card-wrapper"
      style={
        border === cardDetails.id
          ? { border: "#0272d3 5px solid" }
          : { border: "none" }
      }
    >
      <div className="card-img">
        <CardImage />
      </div>
      <div className="card-body">
        <div className="card-header">
          <CardHeader cardHeader={cardDetails.header} />
        </div>
        <div className="card-text">
          <CardBody
            cardBody={cardDetails.body}
            cardBody2={cardDetails.body2}
            cardId={cardDetails.id}
          />
        </div>
        <div className="card-btn">
          <Button
            newBorder={newBorder}
            id={cardDetails.id}
            cardButton={cardDetails.button}
          />
        </div>
      </div>
    </div>
  );
}
