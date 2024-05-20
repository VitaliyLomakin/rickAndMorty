import { FC} from 'react';
import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';


const styleDescription = {
    fontSize:"14px",
    fontWeight: '400',
    lineHeight:"21px" ,
    letterSpacing: "0.35px",
    margin: "0",
}


const DescriptionCard:FC<TypographyProps> = ({children, style}) => {
    return (
       
            <Typography sx={{...style , ...styleDescription}} variant="subtitle1" gutterBottom >
             {children}
            </Typography>
       
    );
}

export default DescriptionCard;
