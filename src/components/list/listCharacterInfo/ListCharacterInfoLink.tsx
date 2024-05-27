import React, { FC } from 'react';

import type { ListCharacterInfoLinkProps } from './type';
import { Box } from '@mui/material';
import ListItemLink from '../../../ui/listItem/listItemLink/ListItemLink';

const stlyeListCharacterInfo = {
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'start',
};

const ListCharacterInfoLink: FC<ListCharacterInfoLinkProps> = ({
   arr,
   url,
}) => {
   return (
      <Box sx={stlyeListCharacterInfo}>
         {arr.map(({ id, air_date, episode, name }) => (
            <ListItemLink
               key={id}
               url={url}
               urlId={id}
               title={episode}
               text={name}
               desc={air_date}
            />
         ))}
      </Box>
   );
};

export default ListCharacterInfoLink;
