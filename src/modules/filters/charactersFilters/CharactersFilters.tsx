import React, { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useLazyQuery } from '@apollo/client';
import debounce from 'lodash.debounce';
import { useStores } from '../../../context/root-store-context';
import FilterPostsInput from '../../../ui/inputs/filterPostsInput/FilterPostsInput';
import { GET_FILTERCHARACTERS } from '../components/api/queryFilterCharacters';

import type { CharactersData, CharactersFilteredVars } from '../../../types/characters/charactersType';

const CharactersFilters = observer(() => {
  const { characters } = useStores();

//   const [charactersData, setCharactersData] = useState(characters.filteredCharactersData ? characters.filteredCharactersData : []);
  const [name, setName] = useState(characters.filterName);



  const [loadCharacters, { data, loading, error }] = useLazyQuery<CharactersData, CharactersFilteredVars>(
    GET_FILTERCHARACTERS,
    {
      fetchPolicy: 'cache-and-network',
    }
  );

  useEffect(() => {
    if (data && data.characters.results) {
     
      const res = data.characters.results;
      characters.filteredLoadPosts(res, name);
   
    }
  }, [data, characters, name]);

  const debouncedLoadCharacters = useCallback(
    debounce((newName: string) => {
     
        if(newName.trim() !== '' ){
        loadCharacters({ variables: { page: characters.filteredPage, name: newName, species: '' } });
        } 
        if(name.length === 0){
          characters.setIsFilter(false)
        }
     
    }, 300),
    [loadCharacters, name]
  );

  useEffect(() => {
    debouncedLoadCharacters(name, characters.filteredPage);
  }, [name, debouncedLoadCharacters]);

  const handleNameChange = (newName: string) => {
  
        setName(newName);
        characters.setFilterName(newName)
        characters.setFilteredPage(1)
        characters.setFilteredCharactersData([]);
    
  };


  return (
    <div>
      <FilterPostsInput
        value={name}
        setValue={handleNameChange}
        placeholder={'Filter by name...'}
        id={'name'}
      />
     
    
      {
        characters.isFilter 
        ? 'filter!!!'
        : "not is filter"
      }
    
    </div>
  );
});

export default CharactersFilters;
