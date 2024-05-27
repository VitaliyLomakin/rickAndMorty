import { useEffect, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { UseInfiniteLoadProps, UseInfiniteLoadReturn } from './type';

export const useInfiniteLoad = ({
   endpoint,
   vars,
   storeData,
}: UseInfiniteLoadProps): UseInfiniteLoadReturn => {
   const { data, loading, error, refetch } = useQuery(endpoint, {
      variables: { ...vars },
      fetchPolicy: 'cache-first',
   });

   useEffect(() => {
      if (data && data.characters) {
         const newCharacters = data.characters.results;
         const prevPage = data.characters.info.prev;
         if (prevPage + 1) {
            storeData.loadPosts(newCharacters);
         } else {
            storeData.setPage(1);
         }
      }
   }, [data, error, storeData]);

   const loadMoreCharacters = useCallback(() => {
      if (loading) return;
      storeData.setPage(storeData.page + 1);
   }, [loading, storeData]);

   useEffect(() => {
      if (data && data.characters) {
         const pages = data.characters.info.pages;
         const prevPage = data.characters.info.prev;
         if (pages !== prevPage && error) {
            refetch();
         }
      }
   }, [data, error, refetch]);

   return { data, loading, error, loadMoreCharacters, refetch };
};
