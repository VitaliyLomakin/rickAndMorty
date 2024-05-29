import { FC } from 'react';
import Card from '@mui/material/Card';

import TitleCard from '../typography/titleCard/TitleCard';

import type { NotDataFilteredProps } from './type';
import Text from '../typography/text/Text';

const styleCard = {
   boxShadow: '-2px 2px 5px rgba(0,0,0,.5)',
   width: '100%',
   height: '100%',
   maxWidth: '240px',
   borderRadius: '4px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   padding: '20px',
   textAlign: 'center',

   '@media (max-width: 500px)': {
      maxWidth: '312px',
   },
};

const NotDataFiltered: FC<NotDataFilteredProps> = ({ dataName, desc }) => {
   return (
      <Card sx={styleCard}>
         <TitleCard>no {dataName} available for this request</TitleCard>
         <Text>{desc}</Text>
      </Card>
   );
};

export default NotDataFiltered;
