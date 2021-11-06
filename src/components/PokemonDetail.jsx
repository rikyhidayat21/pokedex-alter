import React from "react";
import { Row, Col, Card, Stack, ProgressBar } from "react-bootstrap";
import { Badge } from "./pokemon-style/Badge";
import { Image } from "./pokemon-style/Card";

export default function PokemonDetail({
  name,
  image,
  stats,
  abilities,
  moves,
}) {
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
              <a href={image} target="_blank" rel="noreferrer">
                <Image src={image} />
              </a>
            </Col>
            <Col xs={12} md={4}>
              <Stack gap={3}>
                <div className="bg-light border shadow p-3">
                  <h5 style={{ textAlign: "center" }}>Stats</h5>
                  {/* {stats &&
                    stats.map((stat, idx) => (
                      <div key={idx} style={{ padding: "2px" }}>
                        <h6>
                          {stat.stat.name}:{" "}
                          <ProgressBar
                            variant="primary"
                            now={stat.base_stat}
                            label={stat.base_stat}
                          />
                        </h6>
                      </div>
                    ))} */}
                  {stats &&
                    stats.map((stat, idx) => {
                      let color;
                      if (stat.base_stat > 79) {
                        color = "danger";
                      } else if (stat.base_stat > 59) {
                        color = "warning";
                      } else if (stat.base_stat > 39) {
                        color = "success";
                      } else {
                        color = "primary";
                      }

                      return (
                        <div key={idx} style={{ padding: "2px" }}>
                          <h6>
                            {stat.stat.name}:{" "}
                            <ProgressBar
                              variant={color}
                              now={stat.base_stat}
                              label={stat.base_stat}
                            />
                          </h6>
                        </div>
                      );
                    })}
                </div>
                <div className="bg-light border shadow p-3">
                  <h5 style={{ textAlign: "center" }}>Abilities</h5>
                  {abilities &&
                    abilities.map((ability, idx) => (
                      <div key={idx} style={{ textAlign: "center" }}>
                        <Badge key={idx}>{ability.ability.name}</Badge>
                      </div>
                    ))}
                </div>
              </Stack>
            </Col>
            <Col xs={12} md={4}>
              <h5 style={{ textAlign: "center" }}>Move</h5>
              {moves &&
                moves.map(({ move }, idx) => (
                  <Badge key={idx}>{move.name}</Badge>
                ))}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
