import { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import debounce from 'lodash.debounce';
import { useStores } from '../../../context/root-store-context';
import FilterPostsInput from '../../../ui/inputs/filterPostsInput/FilterPostsInput';

const CharactersFilters = observer(() => {
  const { characters } = useStores();
  const [name, setName] = useState(characters.filterName);

  const debouncedLoadCharacters = useCallback(
    debounce((newName) => {
      if (newName.trim() !== '') {
        characters.setFilterName(newName.trim());
        characters.setIsFilter(true);
      } else {
        characters.setFilterName('');
        characters.setIsFilter(false);
      }
    }, 1000),
    [characters]
  );

  useEffect(() => {
    
      debouncedLoadCharacters(name);
      
   
  }, [name, debouncedLoadCharacters]);

  const handleNameChange = (newName) => {
    setName(newName);

  };

  return (
    <div>
      <FilterPostsInput
        value={name}
        setValue={handleNameChange}
        placeholder={'Filter by name...'}
        id={'name'}
      />
      {characters.isFilter && "filter!"}
    </div>
  );
});

export default CharactersFilters;
