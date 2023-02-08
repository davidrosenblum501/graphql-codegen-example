import { gql } from '@apollo/client';

export default gql`
  mutation updateJedi($id: Int!, $update: JediUpdateInput!) {
    updateJedi(id: $id, update: $update)
  }
`;