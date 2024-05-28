import { gql } from '@apollo/client';

export const GET_FILTERED_LOCATIONS = gql`
   query getFilteredLocations(
      $page: Int
      $name: String
      $type: String
      $dimension: String
   ) {
      locations(
         page: $page
         filter: { name: $name, type: $type, dimension: $dimension }
      ) {
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
