import { FC } from 'react';

import { Typography } from '@mui/material';

import type { TypographyProps } from '../../../types/typographyType/typographyType';

const styleSubTitle = {
   fontSize: '16px',
   fontWeight: '700',
   lineHeight: '24px',
   color: '#081F32',
};

const SubTitle: FC<TypographyProps> = ({ children, style }) => {
   return (
      <Typography
         sx={{ ...style, ...styleSubTitle }}
         variant="subtitle1"
         gutterBottom
      >
         {children}
      </Typography>
   );
};

export default SubTitle;
