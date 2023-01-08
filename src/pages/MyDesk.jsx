import { Button } from '@mui/material';
import { UseAuthContext } from '../context/googleContext';
import { useNavigate } from 'react-router-dom';
export default function MyDesk() {
  const { user } = UseAuthContext();
  const go = useNavigate();
  return (
    <>
      <div className='bg-stone-100'>
        <div className=' px-4 xl:px-0'>
          <h1 className='text-2xl text-center '>Hola {user.displayName} !!</h1>
          <div className='flex flex-col px-[10%]'>
            <Button className='my-4 bg-rose-600  px-24 text-gray-100 rounded-lg hover:bg-rose-500 transition-all duration-100 py-5'>
              Iniciar un cajero
            </Button>
            <Button 
            className='my-4 bg-orange-400 px-24 hover:bg-orange-300 text-neutral-800 rounded-lg  transition-all duration-100 py-5'
            onClick={()=> go('/createEditor')}
            >
              Crear o editar menu
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
