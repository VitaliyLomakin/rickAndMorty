import { gql } from '@apollo/client';

export const GET_CHARACTER_INFO = gql`
   query getCharacterInfo($id: ID!) {
      character(id: $id) {
         id
         name
         status
         species
         type
         gender
         origin {
            name
         }
         location {
            id
            dimension
            name
         }
         image
         episode {
            id
            name
            air_date
            episode
         }
      }
   }
`;
