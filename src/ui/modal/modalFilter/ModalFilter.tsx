import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import ButtonModal from '../../buttons/buttonModal/ButtonModal';
import ButtonApply from '../../buttons/buttonApply/ButtonApply';
import TitleCard from '../../typography/titleCard/TitleCard';
import { IconButton } from '@mui/material';

const styleModal = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: '95%',
   bgcolor: '#fff',
   borderRadius: '10px',
   boxShadow: 24,
   p: 2,
};
const styleModalHeader = {
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '16px',
};
const styleModalBody = {
   display: 'flex',
   justifyContent: 'space-between',
   flexDirection: 'column',
   gap: '16px',
   marginBottom: '31px',
};

const ModalFilter = ({ children, onClick }) => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const onClickApply = () => {
      handleClose();
      onClick();
   };

   return (
      <>
         <ButtonModal onClick={handleOpen}>ADVANCED FILTERS</ButtonModal>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
               backdrop: {
                  timeout: 500,
               },
            }}
         >
            <Fade in={open}>
               <Box sx={styleModal}>
                  <Box sx={styleModalHeader}>
                     <TitleCard>Filters</TitleCard>
                     <IconButton onClick={handleClose} size="small">
                        <img src="/image/close.svg" alt="close" />
                     </IconButton>
                  </Box>
                  <Box sx={styleModalBody}>{children}</Box>

                  <ButtonApply onClick={onClickApply}>APPLY</ButtonApply>
               </Box>
            </Fade>
         </Modal>
      </>
   );
};

export default ModalFilter;
