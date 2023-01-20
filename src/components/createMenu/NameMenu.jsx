import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { useState } from 'react';
import xtypejs from 'xtypejs';

export default function NameMenu() {
  const [title, setTitle] = useState('');
  const [titleValid, setTitleValid] = useState('');

  const handlerText = () => {
    if (title === '' || xtypejs.type(parseInt(title)) === 'number') {
        setTitleValid(true)
    } else {
        setTitleValid(false);
    }
  };

  return (
    <>
      <CssTextField
        label={title ? 'Titulo' : 'Escriba aqui el titulo del menu'}
        id='custom-css-outlined-input'
        fullWidth
        className='w-80 mt-8 mx-auto '
        onChange={(e) => setTitle(e.target.value)}
        // value={edit ? title : ''}
        defaultValue={title}
        helperText={titleValid}
        error={titleValid}
        onBlur={handlerText}
        autoFocus
      />
    </>
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
