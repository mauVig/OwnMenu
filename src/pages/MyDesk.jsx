import { Button } from '@mui/material';
import { UseAuthContext } from '../context/googleContext';
import { useNavigate } from 'react-router-dom';
export default function MyDesk() {
  const { user } = UseAuthContext();
  const go = useNavigate();
  return (
    <>
      <div className='px-4 xl:px-0'>
        <h1 className='text-2xl text-center my-4'>
          Hola{' '}
          <span className='border-2 border-orange-400 rounded px-4'>
            {user.displayName}
          </span>
        </h1>
        <div className='flex justify-center '>
          <div className='flex flex-col gap-4 px-[10%]'>
            <Button
              className='bg-rose-600 md:w-1/2 px-24 text-gray-100 rounded-lg hover:bg-rose-500 transition-all duration-100 py-3 mx-auto'
              onClick={() => go('/chooseMenu')}
            >
              Iniciar
            </Button>
            <Button
              className='bg-orange-400 md:w-1/2 px-24 hover:bg-orange-300 text-neutral-800 rounded-lg transition-all duration-100 py-3 mx-auto truncate'
              onClick={() => go('/createEditor')}
            >
              Crear menu
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
