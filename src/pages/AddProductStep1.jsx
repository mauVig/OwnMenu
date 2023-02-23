import { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import xtypejs from 'xtypejs';

import '../style/step1.css';

export default function AddProductStep1() {
  // const [data, setData] = useState(false);
  const [title, setTitle] = useState('');
  const [prize, setPrize] = useState('');
  // const [cost, setCost] = useState('');
  const [titleValid, setTitleValid] = useState('');
  const [prizeValid, setPrizeValid] = useState('');
  // const [costValid, setCostValid] = useState('');

  const go = useNavigate();

  const handlerText = () => {
    if (title === '' || xtypejs.type(parseInt(title)) === 'number') {
      setTitleValid('Escriba un texto para el titulo');
    } else {
      setTitleValid('');
    }
  };

  const handlerPrize = () => {
    if (prize === '' || xtypejs.type(parseInt(prize)) !== 'number') {
      setPrizeValid('Ingrese un numero para el precio');
    } else {
      setPrizeValid('');
    }
  };

  // const handlerCost = () => {
  //   if (cost === '' || xtypejs.type(parseInt(cost)) !== 'number') {
  //     setCostValid('Ingrese un numero para el costo');
  //   } else {
  //     setCostValid('');
  //   }
  // };

  const handlerSubmit = () => {
    // (title !== '' && prize !== '' && cost !== '') {
    if (title !== '' && prize !== '') {
      const id = new Date().getTime();
      const data = {
        id,
        name: title,
        prize,
        // cost,
      };
      localStorage.setItem('step1', JSON.stringify(data));
      go('/createEditor/addProductStep2');
    } else {
      setTitleValid('Escriba un texto para el titulo');
      setPrizeValid('Ingrese un numero para el precio');
      // setCostValid('Ingrese un numero para el costo');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('step1')) {
      JSON.parse(localStorage.getItem('step1'));
    }
  }, []);

  return (
    <>
      <div className='px-4 xl:px-0'>
        <div className='max-w-7xl mx-auto text-center'>
          <div>
            <div className='my-16'>
              <div>
                <CssTextField
                  label='Titulo'
                  id='custom-css-outlined-input'
                  fullWidth
                  className='my-5'
                  onChange={(e) => setTitle(e.target.value)}
                  defaultValue={title}
                  helperText={titleValid}
                  error={titleValid === '' ? false : true}
                  onBlur={handlerText}
                  autoFocus
                />
              </div>
              <div>
                <CssTextField
                  label='Precio'
                  id='custom-css-outlined-input'
                  fullWidth
                  className='my-5 text-green-500'
                  onChange={(e) => setPrize(e.target.value)}
                  defaultValue={prize}
                  helperText={prizeValid}
                  error={prizeValid === '' ? false : true}
                  onBlur={handlerPrize}
                />
              </div>
              {/* <div>
                <CssTextField
                  label='Costo'
                  id='custom-css-outlined-input'
                  fullWidth
                  className='my-5'
                  onChange={(e) => setCost(e.target.value)}
                  defaultValue={cost}
                  helperText={costValid}
                  error={costValid === '' ? false : true}
                  onBlur={handlerCost}
                />
              </div> */}
            </div>
            <div className='flex flex-col items-center'>
              <Button
                endIcon={<BsArrowRightShort />}
                className='my-4 bg-orange-400 px-24 py-4 text-gray-800 rounded-lg hover:bg-orange-300 w-2/3 lg:1/3 truncate'
                onClick={handlerSubmit}
              >
                Agregar Etiqueta
              </Button>
              <Button
                startIcon={<BsArrowLeftShort />}
                className='text-gray-800 mt-10'
                onClick={() => go('/createEditor')}
              >
                Volver
              </Button>
            </div>
          </div>
        </div>
      </div>
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
