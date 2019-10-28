import * as React from "react";
import ApolloClient from "apollo-boost";
import { useGetPikachuQuery } from "./main.graphql";
import AppDisplay from "./AppDisplay";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/"
});

function App() {
  const result = useGetPikachuQuery({ client });

  return <AppDisplay result={result} />;
}

export default App;
