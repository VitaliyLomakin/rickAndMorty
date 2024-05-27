import React from 'react';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import zIndex from '@mui/material/styles/zIndex';

const styleButtonGoBack = {
   position: 'absolute',
   left: '10px',
   top: '20px',
   fontSize: '18px',
   fontWeight: '700',
   lineHeinght: '21.04px',
   fontFamily: 'Karla',
   zIndex: 5,
   color: '#000',
   display: 'flex',
   gap: '8px',
   borderRadius: '5px',
   '@media (max-width: 480px)': {
      fontSize: '10px',
      top: '5px',
      gap: '2px',
      left: '5px',
      '& > img': {
         width: '14px',
         height: '4',
      },
   },
};

const ButtonGoBack = () => {
   const navigate = useNavigate();

   const goBack = () => {
      navigate(-1);
   };
   return (
      <IconButton
         sx={styleButtonGoBack}
         onClick={goBack}
         color="primary"
         aria-label="go back"
      >
         <img src="/image/arrow_back.svg" alt="go back" />
         GO BACK
      </IconButton>
   );
};

export default ButtonGoBack;
