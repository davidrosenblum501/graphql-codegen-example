import { gql } from '@apollo/client';

export default gql`
  mutation createJedi($input: JediInput!) {
    createJedi(input: $input) {
      id
      name
      lightsaberColor
      rank
    }
  }
`;