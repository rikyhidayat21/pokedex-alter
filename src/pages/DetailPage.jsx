import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { CardPoke, Image } from "../components/pokemon-style/Card";
import axios from "../config/axios";

export default function DetailPage() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    retrievePokemon();
  }, []);

  const retrievePokemon = async () => {
    try {
      const { data } = await axios.get(`pokemon/${name}`);
      console.log(data, "<=== data");
      setPokemon(data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <div>
      <Container>
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
            {pokemon.name}
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xs={12} md={4}>
                <Image
                  src={pokemon.sprites.other["official-artwork"].front_default}
                />
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
      </Container>
    </div>
  );
}
