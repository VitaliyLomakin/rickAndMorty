import { FC } from 'react';

import { Typography } from '@mui/material';

import type { TypographyProps } from '../../../types/typographyType/typographyType';

const styleText = {
   fontSize: '14px',
   fontWeight: '400',
   lineHeight: '21px',
   color: '#6E798C',
   letterSpacing: '.25',
};

const Text: FC<TypographyProps> = ({ children, style }) => {
   return (
      <Typography sx={{ ...style, ...styleText }} variant="body1" gutterBottom>
         {children}
      </Typography>
   );
};

export default Text;
