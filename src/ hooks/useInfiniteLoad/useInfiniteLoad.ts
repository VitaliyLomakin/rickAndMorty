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
         const newData = data?.[nameEndpoint].results;
         const nextPage = data?.[nameEndpoint].info.next;

         if (newData.length !== 0) {
            storeData.loadPosts(newData);
         }
         setHasMore(nextPage !== null);
      }
   }, [data, error, storeData, nameEndpoint, setHasMore]);

   const loadMoreData = useCallback(() => {
      if (loading || !hasMore || error) return;
      console.log(hasMore);
      storeData.setPage(storeData.page + 1);
   }, [loading, storeData, hasMore, error]);

   return { data, loading, error, loadMoreData, refetch };
};
