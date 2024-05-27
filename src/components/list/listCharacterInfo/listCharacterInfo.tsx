import { FC } from 'react';

import type { ListCharacterInfoProps } from './type';
import { Box } from '@mui/material';
import ListItem from '../../../ui/listItem/listItem/ListItem';
import ListItemLink from '../../../ui/listItem/listItemLink/ListItemLink';

const stlyeListCharacterInfo = {
   display: 'flex',
   flexDirection: 'column',
};

const ListCharacterInfo: FC<ListCharacterInfoProps> = ({ data }) => {
   return (
      <Box component="ul" sx={stlyeListCharacterInfo}>
         <ListItem title="Gender" text={data?.character?.gender} />
         <ListItem title="Status" text={data?.character?.status} />

         <ListItem title="Specie" text={data?.character?.species} />
         <ListItem title="Status" text={data?.character?.origin?.name} />

         <ListItem title="Type" text={data?.character?.type} />
         <ListItem title="Status" text={data?.character?.status} />

         <ListItemLink
            url="/location/"
            urlId={data?.character?.location?.id}
            title="Location"
            text={data?.character?.location?.name}
         />
      </Box>
   );
};

export default ListCharacterInfo;
