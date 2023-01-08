import React from 'react';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export default function InputTextField({
  setTitle,
  titleValid,
  handlerText,
  title,
  edit
}) {
  return (
    <>
      <CssTextField
        label='Titulo'
        id='custom-css-outlined-input'
        fullWidth
        className='my-5'
        onChange={(e) => setTitle(e.target.value)}
        value={edit ? title : ''}
        defaultValue={title}
        helperText={titleValid}
        error={titleValid === '' ? false : true}
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
