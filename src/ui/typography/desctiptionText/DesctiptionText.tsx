import { FC } from 'react';
import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';

const styleDesctiptionText = {
   fontSize: '10px',
   fontWeight: '500',
   lineHeight: '16px',
   letterSpacing: '1.5px',
   color: '#8E8E93',
   textTransform: 'uppercase',
   marginTop: '4px',
};
const DesctiptionText: FC<TypographyProps> = ({ children, style }) => {
   return (
      <Typography
         sx={{ ...style, ...styleDesctiptionText }}
         variant="body1"
         gutterBottom
      >
         {children}
      </Typography>
   );
};

export default DesctiptionText;
