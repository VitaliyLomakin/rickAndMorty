import { gql } from '@apollo/client';

export const GET_FILTERED_CHARACTERS = gql`
   query getFilteredCharacters(
      $page: Int
      $name: String
      $species: String
      $gender: String
      $status: String
   ) {
      characters(
         page: $page
         filter: {
            name: $name
            species: $species
            gender: $gender
            status: $status
         }
      ) {
         info {
            count
            prev
            next
         }
         results {
            id
            name
            species
            image
         }
      }
   }
`;
