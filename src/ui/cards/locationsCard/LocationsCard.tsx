import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TitleCard from '../../typography/titleCard/TitleCard';
import DescriptionCard from '../../typography/descriptionCard/descriptionCard';

import type { LocationsCardProps } from './type';
import { Link } from 'react-router-dom';

const styleCard = {
   boxShadow: '-2px 2px 5px rgba(0,0,0,.5)',
   width: '100%',
   height: '100%',
   maxWidth: '240px',
   borderRadius: '4px',

   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',

   '@media (max-width: 500px)': {
      maxWidth: '312px',
   },
};
const styleCardContent = {
   textAlign: 'center',
   padding: '20px',
   ' &:last-child ': {
      paddingBottom: '20px',
   },
};

const LocationsCard: FC<LocationsCardProps> = ({ id, type, name }) => {
   return (
      <Card sx={styleCard} component={Link} to={`/location/${id}`}>
         <CardContent sx={styleCardContent}>
            <TitleCard>{name}</TitleCard>
            <DescriptionCard>{type}</DescriptionCard>
         </CardContent>
      </Card>
   );
};

export default LocationsCard;
