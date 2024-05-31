import { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import debounce from 'lodash.debounce';

import Box from '@mui/material/Box';
import InnerFilter from '../components/innerFilter/InnerFilter';
import FilterPostsInput from '../../../ui/inputs/filterPostsInput/FilterPostsInput';

import { episodesApplyFilters } from '../components/functions/episodesApplyFilters.ts';

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

const EpisodesFilters = observer(() => {
   const { filterName } = rootStore.episodes;

   const [name, setName] = useState(filterName);

   const debouncedLoadEpisodes = useCallback(
      debounce((newName: string) => {
         episodesApplyFilters({
            episodes: rootStore.episodes,
            newName,
         });
      }, 500),
      [rootStore.episodes, name, debounce, episodesApplyFilters],
   );

   useEffect(() => {
      debouncedLoadEpisodes(name);
   }, [name, debouncedLoadEpisodes]);

   const handleNameChange = (newName: string) => {
      setName(newName);
   };

   return (
      <Box sx={styleBox}>
         <InnerFilter>
            <FilterPostsInput
               value={name}
               setValue={handleNameChange}
               placeholder={'Name or episode (ex.S01E01)...'}
               id={'name'}
               width="500px"
            />
         </InnerFilter>
      </Box>
   );
});

export default EpisodesFilters;
