import { gql } from '@apollo/client';

export default gql`
  query getJediPaginated($page: Int, $pageSize: Int) {
    jediPaginated(page: $page, pageSize: $pageSize) {
      count
      pages
      jedi {
        id
        name
        lightsaberColor
        rank
        padawanId
      }
    }
  }
`;