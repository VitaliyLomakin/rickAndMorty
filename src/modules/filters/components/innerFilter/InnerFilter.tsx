import { FC } from 'react';
import { Box } from '@mui/material';
import type { InnerFilterProps } from './type';

const styleInnerFilter = {
   display: 'flex',
   gap: 2,
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%',
};

const InnerFilter: FC<InnerFilterProps> = ({ children, isMobile }) => {
   return (
      <Box sx={{ ...styleInnerFilter, flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
         {children}
      </Box>
   );
};

export default InnerFilter;
