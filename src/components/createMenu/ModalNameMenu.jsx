import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import styled from '@emotion/styled';
import st from '../../style/ModalNameMenuStyle.module.css';
import xtypejs from 'xtypejs';

export default function ModalNameMenu({ openParam, callback }) {
  const [open, setOpen] = useState(openParam);
  const [titleValid, setTitleValid] = useState('');
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState('');

  const handlerIn = () => {
    if (title !== '' || xtypejs.type(parseInt(title)) !== 'number') {
      setOpen(false);
      callback(title);
      console.log('si');
    } else {
      setOpen(true);
      console.log('no');
    }
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <h2 className={st.titleS}>Escriba el nombre de tu negocio</h2>
          <CssTextField
            label='Nombre'
            id='custom-css-outlined-input'
            fullWidth
            className='my-5'
            onChange={(e) => setTitle(e.target.value)}
            // value={edit ? title : ''}
            defaultValue={title}
            helperText={titleValid}
            error={titleValid === '' ? false : true}
            // onBlur={handlerText}
            autoFocus
          />
          <Button onClick={handlerIn} className={st.buttonS} fullWidth>
            Ingresar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

const objCssField = {
  '& label.Mui-focused': {
    color: 'red',
  },
  '& label': {
    color: 'gray',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gray',
    },
    '&:hover fieldset': {
      borderColor: 'gray',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rose',
    },
  },
};

const CssTextField = styled(TextField)(objCssField);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
