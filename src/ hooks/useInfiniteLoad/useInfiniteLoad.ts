import { useEffect, useCallback } from "react";
import { useQuery } from "@apollo/client";

export const useInfiniteLoad = (endpoint, vars, storeData, setHasMoreData, hasMoreData) => {
   const { data, loading, error, refetch } = useQuery(endpoint, {
      variables: { ...vars },
      fetchPolicy: 'cache-first',
   });

   useEffect(() => {
      if (data && data.characters && data.characters.results && data.characters.results.length > 0) {
         const newCharacters = data.characters.results;
         const prevPage = data.characters.info.prev;
         
         if (prevPage + 1) {
            storeData.loadPosts(newCharacters);
         } else {
            storeData.setPage(1);
         }

         setHasMoreData(data.characters.info.next !== null);
      }
   }, [data, error, storeData, setHasMoreData]);

   const loadMoreCharacters = useCallback(() => {
      if (loading || !hasMoreData) return;
      storeData.setPage(storeData.page + 1);
   }, [loading, hasMoreData, storeData]);

   useEffect(() => {
      if (data && data.characters && data.characters.info) {
         const pages = data.characters.info.pages;
         const prevPage = data.characters.info.prev;
         if (pages !== prevPage) {
            console.log('Loading more characters...');
           
         }
      }
   }, [data, error]);

   // Custom function to trigger refetch if needed
   const handleRefetch = useCallback(() => {
      if (!loading && !error) {
         console.log('Refetching data...');
         refetch();
      }
   }, [loading, error, refetch]);

   return { data, loading, error, loadMoreCharacters ,refetch};
};