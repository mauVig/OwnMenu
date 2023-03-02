import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import st from '../../style/ModalYesNo.module.css';

export default function ModalYesNo({ msjModal, msjButton, acept, st }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={st}>
        {msjButton}
      </Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
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
          <Box sx={style}>
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              <div className={st.ModalYesNoDiv}>{msjModal}</div>
            </Typography>
            <Typography id='transition-modal-description' sx={{ mt: 2 }}>
              <div className={st.ModalYesNoDiv2}>
                <Button className={st.cancel} onClick={handleClose}>
                  Cancelar
                </Button>
                <Button className={st.acept} onClick={acept}>
                  Aceptar
                </Button>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};
