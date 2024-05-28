import { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import debounce from 'lodash.debounce';
import { useStores } from '../../../context/root-store-context';
import { useMediaQuery } from '@mui/material';

import Box from '@mui/material/Box';
import InnerFilter from '../components/innerFilter/InnerFilter';
import FilterPostsInput from '../../../ui/inputs/filterPostsInput/FilterPostsInput';
import FilteredSelect from '../../../ui/selects/filteredSelect/FilteredSelect';

import { arrLocationType } from '../../../types/locations/LocationsSelectType';
import { arrLocationsDimension } from '../../../types/locations/LocationsSelectType';

import ModalFilter from '../../../ui/modal/modalFilter/ModalFilter';
import { locationsApplyFilters } from '../components/functions/locationsApplyFilters';

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

const LocationsFilters = observer(() => {
   const isMobile = useMediaQuery('(max-width:600px)');

   const { locations } = useStores();
   const [name, setName] = useState(locations.filterName);
   const [type, setType] = useState(locations.type);
   const [dimension, setDimension] = useState(locations.dimension);

   const [apply, setApply] = useState(false);

   const debouncedLoadCharacters = useCallback(
      debounce((newName, newType, newDimension) => {
         if (isMobile) {
            if (apply) {
               setApply(false);
               locationsApplyFilters({
                  locations,
                  newName,
                  newType,
                  newDimension,
               });
            }
         } else {
            locationsApplyFilters({
               locations,
               newName,
               newType,
               newDimension,
            });
         }
      }, 500),
      [locations, apply],
   );

   useEffect(() => {
      debouncedLoadCharacters(name, type, dimension);
   }, [name, debouncedLoadCharacters, dimension, type]);

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
               value={name}
               setValue={handleNameChange}
               placeholder={'Filter by name...'}
               id={'name'}
            />
            {isMobile ? (
               <ModalFilter onClick={onClickApply}>
                  <FilteredSelect
                     data={type}
                     setData={setType}
                     arrValue={arrLocationType}
                     id={'type'}
                     label={'type'}
                  />
                  <FilteredSelect
                     data={dimension}
                     setData={setDimension}
                     arrValue={arrLocationsDimension}
                     id={'dimension'}
                     label={'dimension'}
                  />
               </ModalFilter>
            ) : (
               <>
                  <FilteredSelect
                     data={type}
                     setData={setType}
                     arrValue={arrLocationType}
                     id={'type'}
                     label={'type'}
                  />
                  <FilteredSelect
                     data={dimension}
                     setData={setDimension}
                     arrValue={arrLocationsDimension}
                     id={'dimension'}
                     label={'dimension'}
                  />
               </>
            )}
         </InnerFilter>
      </Box>
   );
});

export default LocationsFilters;
