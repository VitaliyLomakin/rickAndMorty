import { useEffect, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { deleteDublicate } from '../../utils/functions/deleteDublicate';

export const useInfiniteLoad = (endpoint, vars, setData, storeData, setHasMoreData, hasMoreData, setPage) => {
  const { data, loading, error } = useQuery(endpoint, {
    variables: { ...vars },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (data && data.characters.results.length > 0) {
      const newCharacters = data.characters.results;
      const uniqueCharacters = deleteDublicate(
        storeData.isFilter ? [...storeData.filteredCharactersData, ...newCharacters] : [...storeData.charactersData, ...newCharacters],
        "id"
      );

      if (storeData.isFilter) {
        storeData.filteredLoadPostsInfiniteScroll(newCharacters);
      } else {
        storeData.loadPosts(newCharacters);
      }

      setData(uniqueCharacters);
      setHasMoreData(data.characters.info.next !== null);
    }
  }, [data, storeData, setHasMoreData, setData]);

  const loadMoreCharacters = useCallback(() => {
    if (loading || !hasMoreData) return;
    setPage(prevPage => prevPage + 1);
  }, [loading, hasMoreData, setPage]);

  return { data, loading, error, loadMoreCharacters };
}
