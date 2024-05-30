import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { headerNavRoutes } from '../../routes/routes';

const styleLink = {
   fontFamily: 'Karla',
   padding: '0',
   fontWeight: '700',
   fontsSize: '18px',
};
const styleNavbar = {
   boxShadow: 'none',
   background: '#fff',
   display: { xs: 'none', sm: 'block' },
};

const styleNavList = {
   display: 'flex',
   gap: '27px',
};

const Nav = () => {
   return (
      <AppBar component="nav" position="static" sx={styleNavbar}>
         <Box component="ul" sx={styleNavList}>
            {headerNavRoutes.map(({ path, text }) => (
               <Button
                  sx={styleLink}
                  key={text}
                  component={RouterLink}
                  to={path}
                  color="inherit"
               >
                  {text}
               </Button>
            ))}
         </Box>
      </AppBar>
   );
};

export default Nav;
