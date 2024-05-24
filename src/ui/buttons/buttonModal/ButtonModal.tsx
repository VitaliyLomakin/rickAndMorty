import React, { FC,CSSProperties } from 'react';
import { Button } from '@mui/material';

import type { ModalButtonsProps } from './type';

const buttonStyle = {
    width: "100%",
    background: "#E3F2FD",
    color: "#2196F3",
    padding: "15px 21px",
    justifyContent: "center",
    position: "relative",
  };
  
  const iconStyle:CSSProperties = {
    position: "absolute",
    left: "21px", 
    top:"20px"
  };

const ButtonModal:FC<ModalButtonsProps> = ({children, onClick}) => {
    return (
        <Button sx={buttonStyle} startIcon={<img style={iconStyle}  src="/image/menuFilter.svg" alt="menuFilter" />} onClick={onClick} variant="contained">
            {children}
        </Button>
    );
}

export default ButtonModal;
