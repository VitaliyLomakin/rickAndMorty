import { FC } from 'react';
import { Box } from '@mui/material';

import type { LoaderBoxProps } from './type';

const styleLoaderBox = {
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
};

const LoaderBox: FC<LoaderBoxProps> = ({ children, height }) => {
   return (
      <Box height={height} sx={styleLoaderBox}>
         {children}
      </Box>
   );
};

export default LoaderBox;
