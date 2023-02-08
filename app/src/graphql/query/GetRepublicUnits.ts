import { gql } from '@apollo/client';

export default gql`
  query getRepublicUnits {
    republicUnits {
      ... on Jedi {
        __typename
        id
        name
        rank
      }
      ... on CloneTrooper {
        __typename
        id
        name
        corps
      }
    }
  }
`;