import { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import debounce from 'lodash.debounce';
import { useStores } from '../../../context/root-store-context';
import { useMediaQuery } from '@mui/material';

import Box from '@mui/material/Box';
import InnerFilter from '../components/innerFilter/InnerFilter';
import FilterPostsInput from '../../../ui/inputs/filterPostsInput/FilterPostsInput';
import FilteredSelect from '../../../ui/selects/filteredSelect/FilteredSelect';

import { arrSpeciesCharacter } from '../../../types/characters/selectType';
import { arrGenderCharacter } from '../../../types/characters/selectType';
import { arrStatusCharacter } from '../../../types/characters/selectType';
import ModalFilter from '../../../ui/modal/modalFilter/ModalFilter';
import { displayPartsToString } from 'typescript';

const styleBox = {
   width: '100%',
   marginBottom: '61px',
   '@media (max-width:600px)': {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      marginBottom: '48px',
      justifyContent: ' space-between',
   },
};

const CharactersFilters = observer(() => {
   const isMobile = useMediaQuery('(max-width:600px)');

   const { characters } = useStores();
   const [name, setName] = useState(characters.filterName);
   const [species, setSpecies] = useState(characters.species);
   const [gender, setGender] = useState(characters.gender);
   const [status, setStatus] = useState(characters.status);
   const [apply, setApply] = useState(false);

   const debouncedLoadCharacters = useCallback(
      debounce((newName, newSpecies, newGender, newStatus) => {
         console.log(newSpecies, 'spec');
         console.log(newStatus, 'status');
         console.log(newGender, 'gen');
         if (isMobile) {
            if (apply) {
               setApply(false);
               if (
                  newName.trim() !== '' ||
                  (newSpecies &&
                     newSpecies.length !== 0 &&
                     newSpecies !== 'null') ||
                  (newGender &&
                     newGender.length !== 0 &&
                     newGender !== 'null') ||
                  (newStatus && newStatus.length !== 0 && newStatus !== 'null')
               ) {
                  characters.setFilterName(newName.trim());
                  characters.setFilterSpecies(newSpecies);
                  characters.setFilterGender(newGender);
                  characters.setFilterStatus(newStatus);
                  characters.setIsFilter(true);
                  characters.setPage(1);
               } else {
                  characters.setFilterName('');
                  characters.setFilterSpecies('');
                  characters.setFilterGender('');
                  characters.setFilterStatus('');
                  characters.setIsFilter(false);
               }
            }
         } else {
            if (
               newName.trim() !== '' ||
               (newSpecies &&
                  newSpecies.length !== 0 &&
                  newSpecies !== 'null') ||
               (newGender && newGender.length !== 0 && newGender !== 'null') ||
               (newStatus && newStatus.length !== 0 && newStatus !== 'null')
            ) {
               characters.setFilterName(newName.trim());
               characters.setFilterSpecies(newSpecies);
               characters.setFilterGender(newGender);
               characters.setFilterStatus(newStatus);
               characters.setIsFilter(true);
               characters.setPage(1);
            } else {
               characters.setFilterName('');
               characters.setFilterSpecies('');
               characters.setFilterGender('');
               characters.setFilterStatus('');
               characters.setIsFilter(false);
            }
         }
      }, 500),
      [characters, apply],
   );

   useEffect(() => {
      debouncedLoadCharacters(name, species, gender, status);

      console.log(name, species, gender, status);
      // return () => {
      //   debouncedLoadCharacters.cancel();
      //   debouncedLoadCharacters(name, species, gender ,status);
      // };
   }, [name, debouncedLoadCharacters, species, status, gender]);

   const handleNameChange = newName => {
      setName(newName);
   };
   const onClickApply = () => {
      setApply(true);
   };

   return (
      <Box sx={styleBox}>
         {isMobile ? (
            <>
               <FilterPostsInput
                  value={name}
                  setValue={handleNameChange}
                  placeholder={'Filter by name...'}
                  id={'name'}
               />
               <ModalFilter onClick={onClickApply}>
                  <FilteredSelect
                     data={species}
                     setData={setSpecies}
                     arrValue={arrSpeciesCharacter}
                     id={'age'}
                     label={'Species'}
                  />
                  <FilteredSelect
                     data={gender}
                     setData={setGender}
                     arrValue={arrGenderCharacter}
                     id={'gender'}
                     label={'Gender'}
                  />
                  <FilteredSelect
                     data={status}
                     setData={setStatus}
                     arrValue={arrStatusCharacter}
                     id={'status'}
                     label={'Status'}
                  />
               </ModalFilter>
            </>
         ) : (
            <InnerFilter>
               <FilterPostsInput
                  value={name}
                  setValue={handleNameChange}
                  placeholder={'Filter by name...'}
                  id={'name'}
               />

               <FilteredSelect
                  data={species}
                  setData={setSpecies}
                  arrValue={arrSpeciesCharacter}
                  id={'age'}
                  label={'Species'}
               />
               <FilteredSelect
                  data={gender}
                  setData={setGender}
                  arrValue={arrGenderCharacter}
                  id={'gender'}
                  label={'Gender'}
               />
               <FilteredSelect
                  data={status}
                  setData={setStatus}
                  arrValue={arrStatusCharacter}
                  id={'status'}
                  label={'Status'}
               />
            </InnerFilter>
         )}

         {/* {characters.isFilter && "filter!"}
      {species}{gender}{status} */}
      </Box>
   );
});

export default CharactersFilters;
