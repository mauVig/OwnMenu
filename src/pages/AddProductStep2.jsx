import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import { GrAdd } from 'react-icons/gr';
import { BsArrowLeftShort } from 'react-icons/bs';
import LabText from '../components/createMenu/LabText';
import { UseContextMenu } from '../context/CreateMenuContext';
import { useNavigate } from 'react-router-dom';

export default function AddProductStep2() {
  const [labels, setLabels] = useState([]);
  const [text, setText] = useState('');
  const { getAllLabels, addLabels } = UseContextMenu();
  const refText = useRef();
  const go = useNavigate();

  useState(() => {
    setLabels(getAllLabels());
  }, []);

  const hanlerAddLabels = () => {
    if (text !== '') {
      addLabels(text);
      const id = new Date().getTime();
      localStorage.setItem('step2', JSON.stringify(id));
      go('/createEditor/addProductStep3');
    }
  };

  return (
    <>
      <div className='px-4 xl:px-0'>
        <div className='max-w-7xl mx-auto text-center'>
          <div className='mt-16'>
            <h2 className='mb-16 text-2xl'>
              {labels ? 'Eleji una etiqueta' : 'Escribi una etiqueta'}
            </h2>
            <div className='flex  flex-wrap mb-16'>
              {labels.map((label) => (
                <LabText key={label.id} id={label.id} text={label.name} />
              ))}
            </div>
            {text !== '' ? (
              <span className='py-2 text-black m-4 bg-red-200 px-2 rounded-lg font-semibold uppercase'>
                {text}
              </span>
            ) : (
              ''
            )}
            <div>
              <CssTextField
                label='Agregar etiqueta nueva'
                id='custom-css-outlined-input'
                fullWidth
                className='my-5'
                value={text}
                onChange={(e) => setText(e.target.value)}
                ref={refText}
              />
            </div>
            <div className='flex flex-col items-center'>
              <Button
                onClick={hanlerAddLabels}
                className='my-4 bg-orange-400 px-24 py-4 text-gray-800 rounded-lg hover:bg-orange-300 transition-all duration-100 w-2/3 lg:1/3 truncate'
              >
                <GrAdd />
              </Button>
              <Button
                startIcon={<BsArrowLeftShort />}
                className='text-gray-800 mt-10'
                onClick={() => go('/createEditor/addProductStep1')}
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
