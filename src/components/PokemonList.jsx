import React from "react";
import { Card, Button, Col } from "react-bootstrap";

export default function PokemonList({ id, name, image, type }) {
  return (
    <>
      <Col md={4} xs={6} lg={3}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} width="100%" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
