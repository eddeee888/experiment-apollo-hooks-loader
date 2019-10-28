/* This should be generated */

declare module "*/main.graphql" {
  import * as ApolloReactHooks from "@apollo/react-hooks";
  import * as ApolloReactCommon from "@apollo/react-common";

  type GetPikachuQuery = { __typename: "Query" } & {
    pokemon: {
      id: string;
      number: string;
      name: string;
    };
  };

  type GetPikachuQueryVariables = {};

  export const useGetPikachuQuery: (
    baseOptions?:
      | ApolloReactHooks.QueryHookOptions<
          GetPikachuQuery,
          GetPikachuQueryVariables
        >
      | undefined
  ) => ApolloReactCommon.QueryResult<GetPikachuQuery, GetPikachuQueryVariables>;

  export type ViewerContextQueryHookResult = ReturnType<
    typeof useGetPikachuQuery
  >;
}
