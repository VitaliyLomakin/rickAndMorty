import { useState, useEffect, useCallback, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import debounce from 'lodash.debounce';
import { useStores } from '../../../context/root-store-context';
import FilterPostsInput from '../../../ui/inputs/filterPostsInput/FilterPostsInput';

const CharactersFilters = observer(() => {
  const { characters } = useStores();
  const [name, setName] = useState(characters.filterName);
  const lastNameRef = useRef(name);

  const debouncedLoadCharacters = useCallback(
    debounce((newName) => {
      if (newName.trim() !== characters.filterName) {
        characters.setFilterName(newName.trim());
        characters.setIsFilter(newName.trim() !== '');
      }
    }, 1000),
    [characters]
  );

  useEffect(() => {
    if (lastNameRef.current !== name) {
      debouncedLoadCharacters(name);
      lastNameRef.current = name;
    }
    return () => {
      debouncedLoadCharacters.cancel();
    };
  }, [name, debouncedLoadCharacters]);

  const handleNameChange = (newName) => {
    setName(newName);
    if (lastNameRef.current !== newName) {
      characters.setFilteredPage(1);
      characters.setFilteredCharactersData([]);
    }
  };

  return (
    <div>
      <FilterPostsInput
        value={name}
        setValue={handleNameChange}
        placeholder={'Filter by name...'}
        id={'name'}
      />
    </div>
  );
});

export default CharactersFilters;
