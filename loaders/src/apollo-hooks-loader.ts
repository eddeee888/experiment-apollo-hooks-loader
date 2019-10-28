import gql from "graphql-tag";

function apolloHooksLoader(source: string) {
  const doc = gql`
    ${source}
  `;

  const outputCode = `
    import * as ApolloReactHooks from '@apollo/react-hooks';

    const doc = ${JSON.stringify(doc)};
    doc.loc.source = ${JSON.stringify(doc.loc.source)};

    export function useGetPikachuQuery(baseOptions) {
        return ApolloReactHooks.useQuery( doc, baseOptions );
    }
  `;

  return outputCode;
}

export default apolloHooksLoader;
