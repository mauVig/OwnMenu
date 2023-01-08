//www.svgrepo.com
import React, { useEffect, useState } from 'react';
import img from '../assets/menuHome.jpg';
import { useNavigate } from 'react-router-dom';
import { UseAuthContext } from '../context/googleContext';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {
  const { googleLogIn, user, logInFlag, googleLogOut } = UseAuthContext();
  const [loading, setLoading] = useState(false);
  const go = useNavigate();

  const handlerButtonGoogle = () => {
    localStorage.setItem('loadButton', true);
    googleLogIn();
    setLoading(true);
  };

  useEffect(() => {
    if (logInFlag) {
      setLoading(false);
      localStorage.removeItem('loadButton');
      go('/myDesk');
    } else {
      go('/');
    }
  }, [user]);

  useEffect(() => {
    googleLogOut();
    if (localStorage.getItem('loadButton')) setLoading(true);
  }, []);
  return (
    <>
      <div>
        <div className='max-w-7xl mx-auto '>
          <div className='text-center'>
            <h1 className='text-3xl py-4'>Crea tu popio menu</h1>
            <div className='flex justify-center'>
              <p className='text-lg lg:w-1/2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                vel doloremque eos laboriosam consectetur, harum earum animi
                esse distinctio quos repellat consequatur ullam obcaecati. Sit,
                dolor numquam. Magnam, velit doloribus!
              </p>
            </div>
            {loading ? (
              <CircularProgress className='my-4 text-orange-400' />
            ) : (
              <Button
                variant='contained'
                className='my-4 bg-orange-400 px-24 py-2 text-gray-800 rounded-lg hover:bg-orange-300 transition-all duration-100'
                onClick={handlerButtonGoogle}
                // loading={loading}
              >
                Ingresar
              </Button>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          objectFit: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      />
    </>
  );
}
