import { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import debounce from 'lodash.debounce';
import { useStores } from '../../../context/root-store-context';
import FilterPostsInput from '../../../ui/inputs/filterPostsInput/FilterPostsInput';
import FilteredSelect from '../../../ui/selects/filteredSelect/FilteredSelect';

import { arrSpeciesCharacter } from '../../../types/characters/selectType';
import { arrGenderCharacter } from '../../../types/characters/selectType';
import { arrStatusCharacter } from '../../../types/characters/selectType';

const CharactersFilters = observer(() => {
  const { characters } = useStores();
  const [name, setName] = useState(characters.filterName);
  const [species, setSpecies] = useState(characters.species)
  const [gender, setGender] = useState(characters.gender)
  const [status, setStatus] = useState(characters.status)

  console.log(species, gender, status)

  const debouncedLoadCharacters = useCallback(
    debounce((newName,newSpecies, newGender, newStatus) => {
      console.log(  newSpecies, "spec")
      console.log(  newStatus, "status")
      console.log(  newGender, "gen")

      if (
        newName.trim() !== '' ||
        (newSpecies && newSpecies.length !== 0 && newSpecies !== 'null') ||
        (newGender && newGender.length !== 0 && newGender !== 'null') ||
        (newStatus && newStatus.length !== 0 && newStatus !== 'null')
      ) {
        characters.setFilterName(newName.trim());
        characters.setFilterSpecies(newSpecies)
        characters.setFilterGender(newGender);
        characters.setFilterStatus(newStatus);
        characters.setIsFilter(true);
        characters.setPage(1)
      } else {
        characters.setFilterName('');
        characters.setFilterSpecies('');
        characters.setFilterGender('');
        characters.setFilterStatus('');
        characters.setIsFilter(false);
      }
    }, 500),
    [characters]
  );

  useEffect(() => {
    debouncedLoadCharacters(name, species, gender, status);

    console.log(name, species, gender, status) 
    // return () => {
    //   debouncedLoadCharacters.cancel();
    //   debouncedLoadCharacters(name, species, gender ,status);
    // };
  }, [name, debouncedLoadCharacters, species, status, gender]);

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
      
      <FilteredSelect data={species} setData={setSpecies} arrValue={arrSpeciesCharacter} id={"age"} label={"Species"} />
      <FilteredSelect data={gender} setData={setGender} arrValue={arrGenderCharacter} id={"gender"} label={"Gender"} />
      <FilteredSelect data={status} setData={setStatus} arrValue={arrStatusCharacter} id={"status"} label={"Status"} />

      {characters.isFilter && "filter!"}
      {species}{gender}{status}
    </div>
  );
});

export default CharactersFilters;