import * as React from "react";
import { ViewerContextQueryHookResult } from "*/main.graphql";

interface AppDisplayProps {
  result: ViewerContextQueryHookResult;
}

function AppDisplay({ result }: AppDisplayProps) {
  const { loading, error, data } = result;
  if (loading) {
    return <div>Looking for pokemon...</div>;
  }

  if (error) {
    return <div>Pokedex errror! {error}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default AppDisplay;
