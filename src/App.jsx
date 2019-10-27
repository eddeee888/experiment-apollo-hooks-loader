import React from "react";
import ApolloClient from "apollo-boost";
import { useGetPikachuQuery } from "./main.graphql";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/"
});

function App() {
  const { loading, error, data } = useGetPikachuQuery({ client });
  if (loading) {
    return <div>Looking for pokemon...</div>;
  }

  if (error) {
    return <div>Pokedex errror! {error}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
