import { useState, useEffect, useCallback } from 'react';

import { observer } from 'mobx-react-lite';
import debounce from 'lodash.debounce';

import { useMediaQuery } from '@mui/material';

import Box from '@mui/material/Box';
import InnerFilter from '../components/innerFilter/InnerFilter';
import FilterPostsInput from '../../../ui/inputs/filterPostsInput/FilterPostsInput';
import FilteredSelect from '../../../ui/selects/filteredSelect/FilteredSelect';

import { arrCharacterSpecies } from '../../../types/characters/charactersSelectType';
import { arrCharacterGender } from '../../../types/characters/charactersSelectType';
import { arrStatusCharacter } from '../../../types/characters/charactersSelectType';

import ModalFilter from '../../../ui/modal/modalFilter/ModalFilter';
import { charactersApplyFilters } from '../components/functions/charactersApplyFilters';

import { rootStore } from '../../../stores/rootStore';

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
   const { filterName, species, gender, status } = rootStore.characters;
   console.log(gender, species);

   const [name, setName] = useState(filterName);
   const [stateSpecies, setStateSpecies] = useState(species);
   const [stateGender, setStateGender] = useState(gender);
   const [stateStatus, setStateStatus] = useState(status);
   const [apply, setApply] = useState(false);

   const debouncedLoadCharacters = useCallback(
      debounce((newName, newSpecies, newGender, newStatus) => {
         console.log(newGender);
         if (isMobile) {
            if (apply) {
               setApply(false);
               charactersApplyFilters({
                  characters: rootStore.characters,
                  newName,
                  newSpecies,
                  newGender,
                  newStatus,
               });
            }
         } else {
            charactersApplyFilters({
               characters: rootStore.characters,
               newName,
               newSpecies,
               newGender,
               newStatus,
            });
         }
      }, 500),
      [rootStore.characters, apply],
   );

   useEffect(() => {
      debouncedLoadCharacters(name, stateSpecies, stateGender, stateStatus);
   }, [name, debouncedLoadCharacters, stateSpecies, stateStatus, stateGender]);

   const handleNameChange = newName => {
      setName(newName);
   };
   const onClickApply = () => {
      setApply(true);
   };

   return (
      <Box sx={styleBox}>
         <InnerFilter isMobile={isMobile}>
            <FilterPostsInput
               width="240px"
               value={name}
               setValue={handleNameChange}
               placeholder={'Filter by name...'}
               id={'name'}
            />
            {isMobile ? (
               <ModalFilter onClick={onClickApply}>
                  <FilteredSelect
                     data={stateSpecies}
                     setData={setStateSpecies}
                     arrValue={arrCharacterSpecies}
                     id={'species'}
                     label={'Species'}
                  />
                  <FilteredSelect
                     data={stateGender}
                     setData={setStateGender}
                     arrValue={arrCharacterGender}
                     id={'gender'}
                     label={'Gender'}
                  />
                  <FilteredSelect
                     data={stateStatus}
                     setData={setStateStatus}
                     arrValue={arrStatusCharacter}
                     id={'status'}
                     label={'Status'}
                  />
               </ModalFilter>
            ) : (
               <>
                  <FilteredSelect
                     data={stateSpecies}
                     setData={setStateSpecies}
                     arrValue={arrCharacterSpecies}
                     id={'species'}
                     label={'Species'}
                  />
                  <FilteredSelect
                     data={stateGender}
                     setData={setStateGender}
                     arrValue={arrCharacterGender}
                     id={'gender'}
                     label={'Gender'}
                  />
                  <FilteredSelect
                     data={stateStatus}
                     setData={setStateStatus}
                     arrValue={arrStatusCharacter}
                     id={'status'}
                     label={'Status'}
                  />
               </>
            )}
         </InnerFilter>
      </Box>
   );
});

export default CharactersFilters;
