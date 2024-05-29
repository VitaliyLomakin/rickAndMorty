import { gql } from '@apollo/client';

export const GET_LOCATION_INFO = gql`
   query getLocationInfo($id: ID!) {
      location(id: $id) {
         id
         name
         type
         dimension
         residents {
            id
            name
            species
            image
         }
         created
      }
   }
`;
