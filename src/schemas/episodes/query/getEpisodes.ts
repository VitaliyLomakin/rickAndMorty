import { gql } from '@apollo/client';

export const GET_EPISODES = gql`
   query getEpisodes($page: Int) {
      episodes(page: $page) {
         info {
            next
            prev
         }
         results {
            id
            name
            air_date
            episode
            created
         }
      }
   }
`;
