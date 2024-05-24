import  { FC,CSSProperties } from 'react';
import { Button } from '@mui/material';

import type { ButtonApplyProps } from './type';

const buttonStyle = {
    width: "100%",
    background: "#E3F2FD",
    color: "#2196F3",
    padding: "10px 16px",
    justifyContent: "center",
    position: "relative",
  };
  

const ButtonApply:FC<ButtonApplyProps> = ({children, onClick}) => {
    return (
        <Button sx={buttonStyle} onClick={onClick} variant="contained">
            {children}
        </Button>
    );
}

export default ButtonApply;
