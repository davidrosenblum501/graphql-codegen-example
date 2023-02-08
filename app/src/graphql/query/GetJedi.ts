import { gql } from '@apollo/client';

export default gql`
  query getJedi($id: Int!) {
    jedi(id: $id) {
      id
      name
      lightsaberColor
      rank
      padawanId

      padawan {
        id
        name
        lightsaberColor
        rank
      }
    }
  }
`;