import { FC } from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TitleCard from '../../typography/titleCard/TitleCard';
import DescriptionCard from '../../typography/descriptionCard/descriptionCard';

import type { CharactersCardProps } from './type';
import { Link } from 'react-router-dom';

const styleImage = {
   width: '100%',
   maxWidth: '240px',
   height: '170px',
   '@media (max-width: 520px)': {
      maxWidth: '312px',
      height: '232px',
   },
};
const styleCard = {
   boxShadow: '-2px 2px 5px rgba(0,0,0,.5)',
   width: '100%',
   height: '100%',
   maxWidth: '240px',
   display: 'block',
   borderRadius: '4px',
   '@media (max-width: 500px)': {
      maxWidth: '312px',
      height: '302px',
   },
};

const styleCardContent = {
   padding: '12px 16px',
   ' &:last-child ': {
      paddingBottom: '12px',
   },
};

const CharactersCard: FC<CharactersCardProps> = ({
   id,
   name,
   species,
   image,
   style,
}) => {
   return (
      <Card sx={styleCard} component={Link} to={`/character/${id}`}>
         <CardMedia
            sx={styleImage}
            component="img"
            alt={name}
            image={image}
            title={name}
         />
         <CardContent sx={styleCardContent}>
            <TitleCard>{name}</TitleCard>
            <DescriptionCard>{species}</DescriptionCard>
         </CardContent>
      </Card>
   );
};

export default CharactersCard;
