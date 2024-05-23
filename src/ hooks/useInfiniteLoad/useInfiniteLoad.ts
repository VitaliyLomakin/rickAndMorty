import { useEffect, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { deleteDublicate } from '../../utils/functions/deleteDublicate';

export const useInfiniteLoad = (endpoint, vars, storeData, setHasMoreData, hasMoreData) => {
 
 console.log('fffff')
  const { data, loading, error } = useQuery(endpoint, {
    variables: { ...vars },
    fetchPolicy: 'cache-first',
  });

  useEffect(() => {
    if (data && data.characters.results.length > 0) {
      const newCharacters = data.characters.results;
    
      // const uniqueCharacters = deleteDublicate(
      //   storeData.isFilter ? [...storeData.filteredCharactersData, ...newCharacters] : [...storeData.charactersData, ...newCharacters],
      //   "id"
      // );
      storeData.loadPosts(newCharacters)
      
      
     
      setHasMoreData(data.characters.info.next !== null);
    }
  }, [data, storeData, setHasMoreData, hasMoreData]);

  const loadMoreCharacters = useCallback(() => {
    if (loading || !hasMoreData) return;
    
    storeData.setPagePlusNumber()
  }, [loading, hasMoreData]);

  return { data, loading, error, loadMoreCharacters };
}
