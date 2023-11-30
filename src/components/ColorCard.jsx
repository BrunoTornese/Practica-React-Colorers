import React from "react";
import { Card } from "react-bootstrap";

export const ColorCard = ({ color }) => {
  return (
    <>
      <div style={{ backgroundColor: color }}>
        <Card style={{ width: "8rem" }}>
          <Card.Body>{color}</Card.Body>
        </Card>
      </div>
    </>
  );
};
