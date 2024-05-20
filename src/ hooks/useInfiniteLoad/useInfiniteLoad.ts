import { useEffect, useCallback } from "react";
import { useQuery } from "@apollo/client"


export const useInfiniteLoad = (endpoint, page, setData, storeData,  setHasMoreData, hasMoreData, setPage) =>{
    const { data, loading, error } = useQuery(
        endpoint,
        {
           variables: { page },
           fetchPolicy: 'cache-first',
        },
     );

     useEffect(() => {
        console.log(data)
        if (data && data.characters.results.length > 0) {
           const newCharacters = data.characters.results;
           setData(prevCharacters => [
              ...prevCharacters,
              ...newCharacters,
           ]);
           storeData.loadPosts(newCharacters);
           setHasMoreData(data.characters.info.next !== null);
        }
     }, [data]);

     const loadMoreCharacters = useCallback(async () => {
        if (loading || !hasMoreData) return;
        setPage(prevPage => prevPage + 1);
     }, [loading, hasMoreData]);
  
   

     return {data, loading, error, loadMoreCharacters}
}