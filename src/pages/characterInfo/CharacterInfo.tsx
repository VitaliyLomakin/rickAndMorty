import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoadDataInfo } from '../../ hooks/useLoadDataInfo/useLoadDataInfo';
import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Avatar from '../../ui/avatar/Avatar';
import Name from '../../ui/typography/Name/Name';
import InformationsTitle from '../../ui/typography/InformationsTitle/InformationsTitle';
import ListCharacterInfo from '../../components/list/listCharacterInfo/listCharacterInfo';
import ListItem from '../../ui/listItem/listItem/ListItem';
import ListItemLink from '../../ui/listItem/listItemLink/ListItemLink';

import ListCharacterInfoLink from '../../components/list/listCharacterInfo/ListCharacterInfoLink';

import { GET_CHARACTER_INFO } from '../../schemas/characters/query/getCharacterInfo';

import type { CharacterInfoType } from '../../types/characters/charactersType';

const styleCharacterInfo = {
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '42px',
   '@media (max-width: 700px)': {
      gap: '32px',
   },
};
const styleCharacterInfoHeader = {
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '16px',
   alignItems: 'center',
};
const styleCharacterInfoBody = {
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   gap: '20px',
   '@media (max-width: 700px)': {
      gap: '52px',
      flexDirection: 'column',
   },
};
const styleCharacterInfoBodyItem = {
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '36px',
   '@media (max-width: 700px)': {
      gap: '16px',
   },
};

const CharacterInfo = () => {
   const { id } = useParams();
   const { data, loading, error, refetch } = useLoadDataInfo<CharacterInfoType>(
      {
         endpoint: GET_CHARACTER_INFO,
         id,
      },
   );

   return (
      <>
         {error ? (
            <span>Error</span>
         ) : (
            <Box sx={styleCharacterInfo}>
               <Box sx={styleCharacterInfoHeader}>
                  <Avatar
                     img={data?.character?.image}
                     alt={data?.character?.name}
                  />
                  <Name>{data?.character?.name}</Name>
               </Box>
               <Box sx={styleCharacterInfoBody}>
                  <Box sx={styleCharacterInfoBodyItem}>
                     <InformationsTitle>Informations</InformationsTitle>
                     <ListCharacterInfo data={data} />
                  </Box>
                  <Box sx={styleCharacterInfoBodyItem}>
                     <InformationsTitle>Episodes</InformationsTitle>
                     {loading ? (
                        <span>load...</span>
                     ) : (
                        <ListCharacterInfoLink
                           url="/episode/"
                           arr={data?.character?.episode}
                        />
                     )}
                  </Box>
               </Box>
            </Box>
         )}
      </>
   );
};

export default CharacterInfo;
