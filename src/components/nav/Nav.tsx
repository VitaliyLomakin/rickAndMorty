import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { headerNavRoutes } from '../../routes/routes';

const styleLink = {
    fontFamily:"Karla",
    padding:"0",
    fontWeight: "700",
    fontsSize:"18px"
}
const styleNavbar = {
    boxShadow:"none", 
    background:"#fff",
    display: { xs: 'none', sm: 'block' },
}
  

const Nav = () => {
    return (
        <AppBar component="nav" position="static" sx={styleNavbar} >
                <Box component="ul" sx={{ display: 'flex', gap: "27px" }}>
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
}

export default Nav;