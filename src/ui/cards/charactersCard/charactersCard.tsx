import React, {FC} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { styled } from "@mui/material/styles";

import type { CharactersCardProps } from './type';
import { Link } from 'react-router-dom';

const CardContentNoPadding = styled(CardContent)(`
  padding: 12px 16px;
  &:last-child {
    padding-bottom: 12px;
  }
`);

const styleImage = {
     width: '100%', 
            height: '170px', 
          
    
            '@media (max-width: 600px)': {
            maxWidth: '312px', 
            },
}
const styleCard = {
    width: '100%', 
    maxWidth: '240px', 
  

}

  

const CharactersCard:FC<CharactersCardProps> = ({id, name, species, image, style}) => {
    
    return (
    <Card sx={styleCard} style={style} component={Link} to={`/location`} >
      
      <CardMedia
        sx={styleImage}
       component='img'
        alt={name}
        image={image}
        title={name}
      />
      <CardContentNoPadding  sx={{ paddingBottom:'0px'}} >
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
            {species}
        </Typography>
      </CardContentNoPadding>
    </Card>
      );
}

export default CharactersCard;
