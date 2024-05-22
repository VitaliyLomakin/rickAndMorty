import { useEffect, useCallback } from "react";
import { useQuery } from "@apollo/client"


export const useInfiniteLoad = (endpoint, vars, setData, storeData,  setHasMoreData, hasMoreData, setPage) =>{

   const { data, loading, error } = useQuery(
        endpoint,
        {
           variables: { ...vars },
           fetchPolicy: 'cache-first',
        },
     );

     useEffect(() => {
        if (data && data.characters.results.length > 0) {         
           const newCharacters = data.characters.results;
           const info = data.characters.info.pages
           console.log(info)
          

           console.log(storeData.isFilter)
           if(storeData.isFilter){
            storeData.filteredLoadPostsInfiniteScroll(newCharacters)
           }else{
            storeData.loadPosts(newCharacters)
           }

          
          
           
           setHasMoreData(data.characters.info.next !== null);
        }
        
     }, [data]);

     const loadMoreCharacters = useCallback(async () => {
        if (loading || !hasMoreData) return;
        setPage(prevPage => prevPage + 1);
     }, [loading, hasMoreData]);
  
   

     return {data, loading, error, loadMoreCharacters}
}