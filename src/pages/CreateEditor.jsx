import { useState } from 'react';
import CreateMenu from '../components/createMenu/CreateMenu';
import ModalNameMenu from '../components/createMenu/ModalNameMenu';
// GiMeal
export default function MenuEditor() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <div className=' px-4 xl:px-0'>
          <div className='max-w-7xl mx-auto text-center'>
            <div className='py-4'>
              <h1 className='text-4xl '>Crear menu</h1>
              <div className='flex justify-center'>
                <p className=' w-80 text-center'>
                  Aca podes agregar tus comidas, bebidas o postres a tu menu.
                </p>
              </div>
            </div>
            <ModalNameMenu openParam={open} />
            <CreateMenu />
          </div>
        </div>
      </div>
    </>
  );
}

// const menu =[
//   {
//     id:1,
//     name:'Cafecitos'
//   }
// ]
