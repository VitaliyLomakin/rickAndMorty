import { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import debounce from 'lodash.debounce';
import { useStores } from '../../../context/root-store-context';
import FilterPostsInput from '../../../ui/inputs/filterPostsInput/FilterPostsInput';

const CharactersFilters = observer(() => {
  const { characters } = useStores();
  const [name, setName] = useState(characters.filterName);
  const [species, setSpecies] = useState(characters.species)

  const debouncedLoadCharacters = useCallback(
    debounce((newName,newSpecies) => {
      if (newName.trim() !== '' || newSpecies !== "" ) {
        characters.setFilterName(newName.trim());
        characters.setFilterSpecies(newSpecies)
        characters.setIsFilter(true);
        characters.setPage(1)
      } else {
        characters.setFilterName('');
        characters.setFilterSpecies('');
        characters.setIsFilter(false);
      }
    }, 500),
    [characters]
  );

  useEffect(() => {
    debouncedLoadCharacters(name, species);

    // Cleanup function to cancel the debounce if the component unmounts
    return () => {
      debouncedLoadCharacters.cancel();
      debouncedLoadCharacters(name, species);
    };
  }, [name, debouncedLoadCharacters, species]);

  const handleNameChange = (newName) => {
    setName(newName);
  };
  const handleSpeciesChange = (newName) => {
    setSpecies(newName);
  };



  return (
    <div>
      <FilterPostsInput
        value={name}
        setValue={handleNameChange}
        placeholder={'Filter by name...'}
        id={'name'}
      />
      <FilterPostsInput
        value={species}
        setValue={handleSpeciesChange}
        placeholder={'Filter by name...'}
        id={'species'}
      />
      {characters.isFilter && "filter!"}
      {species}
    </div>
  );
});

export default CharactersFilters;