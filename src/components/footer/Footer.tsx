import React, { CSSProperties } from 'react';
import { Box } from '@mui/material';

const styleFooter: CSSProperties = {
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   boxShadow: '0px -3px 2px rgba(0, 0, 0, 0.1)',
   padding: '20px 10px',
   fontSize: '18px',
   fontWeight: '700',
   textAlign: 'center',
   lineHeight: '21.04px',
};

const Footer = () => {
   return (
      <footer style={styleFooter}>
         <Box>Make with ❤️ for the MobProgramming team</Box>
      </footer>
   );
};

export default Footer;
