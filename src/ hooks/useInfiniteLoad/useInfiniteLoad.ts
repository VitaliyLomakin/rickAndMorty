import { useEffect, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import type { UseInfiniteLoadProps, UseInfiniteLoadReturn } from './type';

export const useInfiniteLoad = ({
   nameEndpoint,
   endpoint,
   vars,
   storeData,
   setHasMore,
   hasMore,
}: UseInfiniteLoadProps): UseInfiniteLoadReturn => {
   const { data, loading, error, refetch } = useQuery(endpoint, {
      variables: { ...vars },
      fetchPolicy: 'cache-first',
   });

   useEffect(() => {
      if (data && data?.[nameEndpoint]) {
         const newCharacters = data?.[nameEndpoint].results;
         const nextPage = data?.[nameEndpoint].info.next;

         if (nextPage + 1) {
            storeData.loadPosts(newCharacters);
         } else {
            storeData.setPage(1);
         }
         setHasMore(data?.[nameEndpoint].info.next !== null);
      }
   }, [data, error, storeData]);

   const loadMoreData = useCallback(() => {
      if (loading || !hasMore) return;

      storeData.setPage(storeData.page + 1);
   }, [loading, storeData]);

   return { data, loading, error, loadMoreData, refetch };
};
