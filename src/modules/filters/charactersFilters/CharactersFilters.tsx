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
  const [page, setPage] = useState(characters.filteredPage);


  const [loadCharacters, { data, loading, error }] = useLazyQuery<CharactersData, CharactersFilteredVars>(
    GET_FILTERCHARACTERS,
    {
      fetchPolicy: 'cache-and-network',
    }
  );

  useEffect(() => {
    if (data && data.characters.results) {
     
      const res = data.characters.results;
      characters.filteredLoadPosts(res, name, page);
   
    }
  }, [data, characters, name, page]);

  const debouncedLoadCharacters = useCallback(
    debounce((newName: string, newPage: number) => {
        if(newName.trim() !== '' ){
        loadCharacters({ variables: { page: newPage, name: newName, species: '' } });
        }
     
    }, 1000),
    [loadCharacters]
  );

  useEffect(() => {
    debouncedLoadCharacters(name, page);
  }, [name, page, debouncedLoadCharacters]);

  const handleNameChange = (newName: string) => {
  
        setName(newName);
        setPage(1)
        characters.setFilteredCharactersData([]);
    
  };

  const onClickPlusPage = () => {
    setPage((prev) => prev + 1);
  };

  const onClickMinusPage = () => {
    setPage((prev) => prev > 1 ? prev - 1 : 1);
  };

  return (
    <div>
      <FilterPostsInput
        value={name}
        setValue={handleNameChange}
        placeholder={'Filter by name...'}
        id={'name'}
      />
      {/* <ul>
        {charactersData.map((el) => (
          <li key={el.id}>
            {el.id} {el.name}
          </li>
        ))}
      </ul> */}
      
      <button onClick={onClickMinusPage}>-</button>
      {page}
      <button onClick={onClickPlusPage}>+</button>
      {
        characters.isFilter 
        ? 'filter!!!'
        : "not is filter"
      }
       {characters.isFilter && "filter"}
    </div>
  );
});

export default CharactersFilters;
