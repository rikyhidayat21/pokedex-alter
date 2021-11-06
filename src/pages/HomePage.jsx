import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroller";
import PokemonList from "../components/PokemonList";
import axios from "../config/axios";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  useEffect(() => {
    retrievePokemons();
  }, []);

  const retrievePokemons = async () => {
    try {
      const { data } = await axios.get(loadMore);

      setLoadMore(data.next);

      const getPokemonStats = (pokemons) => {
        pokemons.forEach(async (pokemon) => {
          const { data } = await axios.get(`pokemon/${pokemon.name}`);
          setPokemons((currentList) => [...currentList, data]);
        });
      };

      getPokemonStats(data.results);
      // await console.log(pokemons);
    } catch (error) {
      console.log(error, "<== error retrieve");
    }
  };

  return (
    <div>
      <Container style={{ marginTop: "70px" }}>
        <InfiniteScroll
          initialLoad={false}
          loadMore={retrievePokemons}
          hasMore={true}
          loader={
            <Spinner
              animation="grow"
              variant="primary"
              key={0}
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          }
        >
          <Row>
            {pokemons &&
              pokemons.map((pokemon) => (
                <PokemonList
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={
                    pokemon.sprites.other["official-artwork"].front_default
                  }
                  type={pokemon.types[0].type.name}
                />
              ))}
          </Row>
        </InfiniteScroll>
      </Container>
    </div>
  );
}
