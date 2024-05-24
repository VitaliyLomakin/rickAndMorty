import { FC } from 'react';
import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';

const styleInformationsTitle = {
   fontSize: '20px',
   fontWeight: '500',
   lineHeight: '24px',
   letterSpacing: '0,15px',
};

const InformationsTitle: FC<TypographyProps> = ({ children, style }) => {
   return (
      <Typography
         sx={{ ...style, ...styleInformationsTitle }}
         variant="h3"
         gutterBottom
      >
         {children}
      </Typography>
   );
};

export default InformationsTitle;
