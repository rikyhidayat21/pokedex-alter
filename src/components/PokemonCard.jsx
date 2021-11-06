import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "./pokemon-style/Badge";
import { CardPoke, PokemonTitleCard, Image } from "./pokemon-style/Card";

export default function PokemonCard({ id, name, image, type }) {
  let backgroundColor;

  switch (type) {
    case "rock":
      backgroundColor = "rgb(148, 81, 81)";
      break;
    case "ghost":
      backgroundColor = "rgb(247, 247, 247)";
      break;
    case "electric":
      backgroundColor = "rgb(255, 255, 161)";
      break;
    case "bug":
      backgroundColor = "#F6D6A7";
      break;
    case "poison":
      backgroundColor = "#e0a7f6";
      break;
    case "normal":
      backgroundColor = "#F4F4F4";
      break;
    case "fairy":
      backgroundColor = "rgba(255, 192, 203, 0.863)";
      break;
    case "fire":
      backgroundColor = "#FBE3DF";
      break;
    case "grass":
      backgroundColor = "#E2F9E1";
      break;
    case "water":
      backgroundColor = "#E0F1FD";
      break;
    default:
      backgroundColor = "#C7BEA2";
      break;
  }

  return (
    <div>
      <CardPoke backgroundColor={backgroundColor}>
        <PokemonTitleCard>{name}</PokemonTitleCard>
        <Link to={`/pokemon/${name}`}>
          <Image src={image} alt={name} />
        </Link>
        <div
          style={{
            textAlign: "center",
          }}
        >
          Type: {type}
        </div>
      </CardPoke>
    </div>
  );
}
