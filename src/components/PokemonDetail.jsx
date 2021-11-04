import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Image } from "./pokemon-style/Card";

export default function PokemonDetail({ name, image }) {
  return (
    <div>
      <Card
        style={{
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          as="h5"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {name}
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={12} md={4}>
              <Image src={image} />
            </Col>
            <Col xs={12} md={4}>
              <h3>Bio</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat quia nihil officiis officia unde libero amet eaque,
                minima delectus? Totam, quam adipisci. Quis, velit quaerat
                expedita iure veniam voluptatibus similique?
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h3>Bio</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat quia nihil officiis officia unde libero amet eaque,
                minima delectus? Totam, quam adipisci. Quis, velit quaerat
                expedita iure veniam voluptatibus similique?
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
