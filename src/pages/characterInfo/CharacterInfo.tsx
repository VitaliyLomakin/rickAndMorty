import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoadDataInfo } from '../../ hooks/useLoadDataInfo/useLoadDataInfo';
import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Avatar from '../../ui/avatar/Avatar';
import Name from '../../ui/typography/Name/Name';

import { GET_CHARACTER_INFO } from '../../schemas/characters/query/getCharacterInfo';

import type { CharacterInfoType } from '../../types/characters/charactersType';

const CharacterInfo = () => {
   const { id } = useParams();
   const { data, loading, error, refetch } = useLoadDataInfo<CharacterInfoType>(
      {
         endpoint: GET_CHARACTER_INFO,
         id,
      },
   );

   console.log(data?.character?.episode);
   return (
      <Box>
         <Box>
            <Avatar img={data?.character?.image} alt={data?.character?.name} />
            <Name>{data?.character?.name}</Name>
         </Box>
         <Box>
            <Box></Box>
            <Box></Box>
         </Box>
         {loading ? (
            <h2>Loading...</h2>
         ) : (
            <ul>
               {data?.character?.episode.map(({ name, id }) => (
                  <li key={id}>
                     <Link to={`/episode/${id}`}> {name}</Link>
                  </li>
               ))}
            </ul>
         )}
      </Box>
   );
};

export default CharacterInfo;
