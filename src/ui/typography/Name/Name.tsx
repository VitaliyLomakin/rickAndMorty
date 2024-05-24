import { FC } from 'react';
import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';

const styleName = {
   fontSize: '48px',
   fontWeight: '400',
   lineHeight: '56.25px',
   textAlign: 'center',
};
const Name: FC<TypographyProps> = ({ children, style }) => {
   return (
      <Typography sx={{ ...style, ...styleName }} variant="h3" gutterBottom>
         {children}
      </Typography>
   );
};

export default Name;
