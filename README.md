# Experiment: Webpack Apollo Hook Loader

# Overview

This is a proof-of-concept to see if we can import apollo hooks straight from a `.graphql` file

# Getting started

`npm ci`

`npm run build-all`

# How it works

Running `build-all` script does 2 things:

- `build-loaders`: This will build our loader called `apollo-hooks-loader`. This will be used in the next script.
- `build-webpack`: This will compile the query, document and a react component into `main.js` that makes a query to https://graphql-pokemon.now.sh/ to get details of Pikachu!

# Bringing it all together

Now, we can import the custom hook with document wired in like so:

```typescript
import React from "react";
import { useGetPikachuQuery } from "./main.graphql";

function App() {
  const { loading, error, data } = useGetPikachuQuery();
  if (loading) {
    return <div>Looking for pokemon...</div>;
  }

  if (error) {
    return <div>Pokedex errror! {error}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}
```

# See the result

Open [dist/index.html](./dist/index.html) to see the result

# Improvements

- Custom hooks should be named correctly
- Check if the built file is sending multiple versions of apollo hooks to the client if there are multiple `.graphql` files?
