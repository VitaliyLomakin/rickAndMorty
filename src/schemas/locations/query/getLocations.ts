import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
   query getLocations($page: Int) {
      locations(page: $page) {
         info {
            next
            prev
         }
         results {
            id
            name
            type
         }
      }
   }
`;
