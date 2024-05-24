import { Box } from '@mui/material';
import type { InnerFilterProps } from './type';
import { FC } from 'react';

const InnerFilter:FC<InnerFilterProps> = ({children}) => {
    return (
        <Box sx={{ display: 'flex', gap: 2,justifyContent:"space-between" ,alignItems: 'center',width:"100%" }}>
            {children}
        </Box>
    );
}

export default InnerFilter;
