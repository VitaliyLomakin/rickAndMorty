import { useEffect, useState, useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';
import debounce from 'lodash.debounce';
import { GET_FILTERCHARACTERS } from '../../modules/filters/components/api/queryFilterCharacters';

import type { CharacterType, CharactersData, CharactersFilteredVars } from '../../types/characters/charactersType';

const useQueryFilteredCharacters = ({ initialName }: { initialName: string }) => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState(initialName);
  const [species, setSpecies] = useState('');
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const [loadCharacters, { data, loading, error }] = useLazyQuery<CharactersData, CharactersFilteredVars>(
    GET_FILTERCHARACTERS,
    {
      variables: { page, name, species },
    }
  );

  useEffect(() => {
    if (data && data.characters.results) {
      setCharacters((prev) => [...prev, ...data.characters.results]);
      setHasMore(data.characters.info.next !== null);
    }
  }, [data]);

  const debouncedLoadCharacters = useCallback(
    debounce((newName: string) => {
      setName(newName);
      setPage(1);
      setCharacters([]); // Clear characters before new search
      loadCharacters({ variables: { page: 1, name: newName, species } });
    }, 300),
    []
  );

  const handleNameChange = (newName: string) => {
    debouncedLoadCharacters(newName);
  };

  return { characters, loading, error, handleNameChange };
};

export default useQueryFilteredCharacters;
