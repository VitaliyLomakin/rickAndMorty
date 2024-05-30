import { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from '@mui/material';

import { observer } from 'mobx-react-lite';
import debounce from 'lodash.debounce';

import Box from '@mui/material/Box';
import InnerFilter from '../components/innerFilter/InnerFilter';
import FilterPostsInput from '../../../ui/inputs/filterPostsInput/FilterPostsInput';
import FilteredSelect from '../../../ui/selects/filteredSelect/FilteredSelect';

import { arrLocationType } from '../../../types/locations/LocationsSelectType';
import { arrLocationsDimension } from '../../../types/locations/LocationsSelectType';

import ModalFilter from '../../../ui/modal/modalFilter/ModalFilter';
import { locationsApplyFilters } from '../components/functions/locationsApplyFilters';

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

const LocationsFilters = observer(() => {
   const { filterName, type, dimension } = rootStore.locations;

   const isMobile = useMediaQuery('(max-width:600px)');

   const [name, setName] = useState(filterName);
   const [stateType, setStateType] = useState(type);
   const [stateDimension, setStateDimension] = useState(dimension);

   const [apply, setApply] = useState(false);

   const debouncedLoadCharacters = useCallback(
      debounce((newName, newType, newDimension) => {
         if (isMobile) {
            if (apply) {
               setApply(false);
               locationsApplyFilters({
                  locations: rootStore.locations,
                  newName,
                  newType,
                  newDimension,
               });
            }
         } else {
            locationsApplyFilters({
               locations: rootStore.locations,
               newName,
               newType,
               newDimension,
            });
         }
      }, 500),
      [rootStore.locations, apply],
   );

   useEffect(() => {
      debouncedLoadCharacters(name, stateType, stateDimension);
   }, [name, debouncedLoadCharacters, stateType, stateDimension]);

   const handleNameChange = newName => {
      setName(newName);
   };
   const onClickApply = () => {
      setApply(true);
   };

   return (
      <Box sx={styleBox}>
         {type}
         {dimension}
         <InnerFilter isMobile={isMobile}>
            <FilterPostsInput
               width="326px"
               value={name}
               setValue={handleNameChange}
               placeholder={'Filter by name...'}
               id={'name'}
            />
            {isMobile ? (
               <ModalFilter onClick={onClickApply}>
                  <FilteredSelect
                     data={stateType}
                     setData={setStateType}
                     arrValue={arrLocationType}
                     id={'type'}
                     label={'type'}
                  />
                  <FilteredSelect
                     data={stateDimension}
                     setData={setStateDimension}
                     arrValue={arrLocationsDimension}
                     id={'dimension'}
                     label={'dimension'}
                  />
               </ModalFilter>
            ) : (
               <>
                  <FilteredSelect
                     data={stateType}
                     setData={setStateType}
                     arrValue={arrLocationType}
                     id={'type'}
                     label={'type'}
                  />
                  <FilteredSelect
                     data={stateDimension}
                     setData={setStateDimension}
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
