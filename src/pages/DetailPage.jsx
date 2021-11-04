import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import PokemonDetail from "../components/PokemonDetail";
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
        {pokemon && (
          <PokemonDetail
            name={pokemon.name}
            image={pokemon.sprites.other["official-artwork"].front_default}
          />
        )}
      </Container>
    </div>
  );
}
