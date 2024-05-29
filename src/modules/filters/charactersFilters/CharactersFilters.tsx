import { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import debounce from 'lodash.debounce';
import { useStores } from '../../../context/root-store-context';
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
         if (isMobile) {
            if (apply) {
               setApply(false);
               charactersApplyFilters({
                  characters,
                  newName,
                  newSpecies,
                  newGender,
                  newStatus,
               });
            }
         } else {
            charactersApplyFilters({
               characters,
               newName,
               newSpecies,
               newGender,
               newStatus,
            });
         }
      }, 500),
      [characters, apply],
   );

   useEffect(() => {
      debouncedLoadCharacters(name, species, gender, status);
   }, [name, debouncedLoadCharacters, species, status, gender]);

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
               width="23%"
               value={name}
               setValue={handleNameChange}
               placeholder={'Filter by name...'}
               id={'name'}
            />
            {isMobile ? (
               <ModalFilter onClick={onClickApply}>
                  <FilteredSelect
                     data={species}
                     setData={setSpecies}
                     arrValue={arrCharacterSpecies}
                     id={'species'}
                     label={'Species'}
                  />
                  <FilteredSelect
                     data={gender}
                     setData={setGender}
                     arrValue={arrCharacterGender}
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
            ) : (
               <>
                  <FilteredSelect
                     data={species}
                     setData={setSpecies}
                     arrValue={arrCharacterSpecies}
                     id={'age'}
                     label={'Species'}
                  />
                  <FilteredSelect
                     data={gender}
                     setData={setGender}
                     arrValue={arrCharacterGender}
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
               </>
            )}
         </InnerFilter>
      </Box>
   );
});

export default CharactersFilters;
