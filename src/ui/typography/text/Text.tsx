import { FC } from 'react';

import { Typography } from '@mui/material';

import type { TypographyProps } from '../../../types/typographyType/typographyType';

const styleText = {
   fontSize: '14px',
   fontWeight: '400',
   lineHeight: '.25px',
   color: '#6E798C',
};

const Text: FC<TypographyProps> = ({ children, style }) => {
   return (
      <Typography sx={{ ...style, ...styleText }} variant="body1" gutterBottom>
         {children}
      </Typography>
   );
};

export default Text;
