import  { FC} from 'react';
import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';


const styleTitle = {
    fontSize:"20px",
    fontWeight: '500',
    lineHeight:"30px" ,
    letterSpacing: "0.15px",
    margin: "0",
    '@media (max-width: 600px)': {
        maxWidth: '312px', 
        },
}

const TitleCard:FC<TypographyProps> = ({children , style}) => {
    return (
      <Typography sx={{...style , ...styleTitle}} variant="h3" gutterBottom >
       {children}
      </Typography>
    );
}

export default TitleCard;
