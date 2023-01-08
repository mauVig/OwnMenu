import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { UseAuthContext } from '../../context/googleContext';
import { useNavigate } from 'react-router-dom';
export default function MenuUser() {
  const { user, googleLogOut } = UseAuthContext();
  const go = useNavigate();
  const handlerOut = () => {
    googleLogOut();
    go('/');
  };

  return (
    <>
      {user && (
        <div className='flex items-center gap-2 relative'>
          <div className='bg-neutral-300 p-2 rounded-full'>
            <AiOutlineUser className='text-neutral-500 ' />
          </div>
          <span>Hola, {user.displayName} !</span>
          <button
            onClick={handlerOut}
            className='bg-orange-400 hover:bg-orange-400 text-neutral-800 transition-all duration-200 text-dark px-6 py-1 rounded-lg'
          >
            Cerrar Sesion
          </button>
        </div>
      )}
      {!user && <div></div>}
    </>
  );
}
