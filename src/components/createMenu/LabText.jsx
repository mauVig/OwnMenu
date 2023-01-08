import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function LabText({ id, text }) {
  const go = useNavigate();
  const handlerText = () => {
    localStorage.setItem('step2', JSON.stringify(id));
    go('/createEditor/addProductStep3');
  };
  
  return (
    <>
      <Button
        className='py-2 text-black m-4 bg-red-200 px-2 rounded-lg text-smz'
        onClick={handlerText}
      >
        {text}
      </Button>
    </>
  );
}
