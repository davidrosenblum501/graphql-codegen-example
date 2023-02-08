import { gql } from '@apollo/client';

export default gql`
  mutation deleteJedi($id: Int!) {
    deleteJedi(id: $id)
  }
`;