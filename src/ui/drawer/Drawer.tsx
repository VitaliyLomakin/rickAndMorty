import { FC } from 'react';
import DrawerMUI from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { headerNavRoutes } from '../../routes/routes';
import { Link } from 'react-router-dom';

import type { DrawerProps } from './type';

const styleDrawer = {
   width: '100%',
   display: 'flex',
   justifyContent: 'start',
   alignItems: 'center',
   flexDirection: 'column',
   paddingTop: '49px',
   gap: '48px',
};
const styleLink = {
   fontSize: '24px',
};

const Drawer: FC<DrawerProps> = ({
   mobileOpen,
   handleDrawerToggle,
   height,
}) => {
   return (
      <DrawerMUI
         variant="persistent"
         anchor="bottom"
         open={mobileOpen}
         ModalProps={{
            keepMounted: false,
            className: 'modal',
         }}
      >
         <Box
            component="ul"
            sx={styleDrawer}
            height={`calc(100vh - ${height + 3}px)`}
         >
            {headerNavRoutes.map(({ path, text }) => (
               <li style={styleLink} key={path}>
                  <Link to={path}>{text}</Link>
               </li>
            ))}
         </Box>
      </DrawerMUI>
   );
};

export default Drawer;
