import {useState, useRef, useEffect} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '../../ui/drawer/Drawer';
import Nav from '../nav/Nav';


const headerStyle = {
    width: "100dvw",
    position: "sticky",
    left: 0,
    top:0 ,
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "2px 2px 2px rgba(0,0,0,.1)",
    zIndex: 10,
    padding:"0"
}

const headerInnerStyle = {
    width: "100%",
    maxWidth:"1020px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    padding:"5px 10px"
   
}


const Header = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const componentRef = useRef(null);
    const [height, setHeight] = useState(0);

  const [drawereOpen, setDrawereOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawereOpen((prevState) => !prevState);
  };

  useEffect(()=>{
    if (componentRef.current) {
        setHeight(componentRef.current.offsetHeight);
      }
  },[])

  return (
    <>
      <AppBar ref={componentRef} sx={headerStyle}>
        <Toolbar style={headerInnerStyle}>
        <Link to="/">
            <Box
                component="img"
                src="/image/logo.svg"
                alt="Логотип"
                sx={{
                    width: 46,
                    height: 49,
                }}
            />
        </Link>
       

          <Box >
          {
            isMobile 

            ? drawereOpen ? <img onClick={handleDrawerToggle} src="/image/close.svg" alt="close" /> :  <img onClick={handleDrawerToggle} src="/image/menu.svg" alt="close" />
            : <Nav/>
         }
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer  mobileOpen={drawereOpen} handleDrawerToggle={handleDrawerToggle} height={height}  />
    </>
  );
}

export default Header