import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function IconSolo({ Svg , id}) {
  const go = useNavigate();
  const handlerSvg = () => {
    localStorage.setItem('step3',JSON.stringify(id))
    go('/createEditor/finalProductStep')
  }
  return (
    <>
      <Button className='block w-1/4 p-1' onClick={handlerSvg}>
        <div className='border-4 p-2'>
          <Svg />
        </div>
      </Button>
    </>
  );
}
