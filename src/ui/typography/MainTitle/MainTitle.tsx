import { FC } from 'react';
import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';

const styleMainTitle = {
   fontSize: '36px',
   fontWeight: '400',
   lineHeight: '42.19px',
   textAlign: 'center',
};

const MainTitle: FC<TypographyProps> = ({ children, style }) => {
   return (
      <Typography
         sx={{ ...style, ...styleMainTitle }}
         variant="h1"
         gutterBottom
      >
         {children}
      </Typography>
   );
};

export default MainTitle;
