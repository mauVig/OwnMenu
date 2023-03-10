import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import st from '../../style/ModalYesNo.module.css';
import { AiFillWarning } from 'react-icons/ai';

export default function ModalYesNo({
  msjModal,
  msjButton,
  acept,
  classM,
  red,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className={classM}>
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
          <Box sx={red ? styleRed : style}>
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              <div className={st.ModalYesNoDiv}>
                {red && <AiFillWarning className='text-rose-600 mr-12' />}
                <span>{msjModal}</span>
              </div>
            </Typography>
            <Typography id='transition-modal-description' sx={{ mt: 2 }}>
              <div className={st.ModalYesNoDiv2}>
                <Button
                  className={red ? st.cancelR : st.cancerO}
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button className={red ? st.aceptR : st.aceptO} onClick={acept}>
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
const styleRed = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #e11d48',
  boxShadow: 24,
  p: 3,
};
