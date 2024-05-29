import { FC } from 'react';
import { Grid } from '@mui/material';
import CharactersCard from '../../ui/cards/charactersCard/charactersCard';

import type { CardInnerProps } from './type';

const styleCardInnerItem = {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
};

const CardInner: FC<CardInnerProps> = ({ data }) => {
   return (
      <Grid container spacing={2}>
         {data.map(({ id, image, species, name }) => (
            <Grid
               sx={styleCardInnerItem}
               key={id}
               item
               xs={12}
               sm={6}
               md={4}
               lg={3}
            >
               <CharactersCard
                  id={id}
                  image={image}
                  species={species}
                  name={name}
               />
            </Grid>
         ))}
      </Grid>
   );
};

export default CardInner;
