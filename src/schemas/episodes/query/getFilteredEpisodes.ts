import { gql } from '@apollo/client';

export const GET_FILTERED_EPISODES = gql`
   query getFilteredEpisodes($page: Int, $name: String) {
      episodes(page: $page, filter: { name: $name }) {
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
