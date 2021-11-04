import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ id, name, image, type }) {
  return (
    <>
      <Col md={4} xs={6} lg={3}>
        <PokemonCard id={id} name={name} image={image} type={type} />
      </Col>
    </>
  );
}
