import { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import { GrAdd } from 'react-icons/gr';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};
export default function ModalLogos() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className='my-4 bg-orange-400 px-24 py-2 text-gray-800 rounded-lg hover:bg-orange-300 transition-all duration-100'
        startIcon={<GrAdd />}
      >
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        keepMounted
      >
        <Box sx={style}>
            
        </Box>
      </Modal>
    </>
  );
}

const labelsCss = { margin: '2rem', display: 'block' };
