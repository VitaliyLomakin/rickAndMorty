import { gql } from '@apollo/client';

export const GET_EPISODE_INFO = gql`
   query getEpisodeInfo($id: ID!) {
      episode(id: $id) {
         id
         name
         air_date
         episode
         characters {
            id
            name
            species
            image
         }
         created
      }
   }
`;
