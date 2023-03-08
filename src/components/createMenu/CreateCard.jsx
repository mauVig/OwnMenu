import { Button } from '@mui/material';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { UseContextMenu } from '../../context/CreateMenuContext';
import ModalYesNo from '../tools/ModalYesNo';
const Icon = {
  edit: FiEdit,
  delet: AiFillDelete,
};

export default function CreateCard({ data }) {
  const go = useNavigate();
  const { delProductMenu } = UseContextMenu();
  const handlerAcept = () => {
    delProductMenu(data.id);
  };
  // const handlerEdit = () => {
  //   if (yesEdit) {
  //     const ibjStep1 = {
  //       id: data.id,
  //       name: data.name,
  //       prize: parseFloat(data.prize),
  //       // cost:  parseFloat(data.cost),
  //     };
  //     localStorage.setItem('step1', JSON.stringify(ibjStep1));
  //     go('/createEditor/addProductStep1');
  //   }
  // };
  return (
    <>
      <div className='max-w-4xl mx-auto bg-white drop-shadow-md'>
        <div className='grid grid-cols-4 py-1 border-2'>
          <div className='flex justify-center'>
            <data.svg className='w-28 my-1' />
          </div>
          <div className='drop-shadow-xl col-span-2 flex flex-col items-center justify-around'>
            <div>
              <h2 className='text-2xl mb-4'>{data.name}</h2>

              <span className=' bg-red-200 max-w-fit py-2 px-4  rounded-lg text-sm font-bold'>
                {data.label}
              </span>
            </div>
            <div className='flex justify-center gap-4 mt-4'>
              {/* <div>
                <p className='italic font-semibold'>Costo</p>
                <p className='text-xl text-red'>${data.cost}</p>
              </div> */}
              <div>
                <p className='italic font-semibold'>Precio</p>
                <p className='text-xl text-red'>${data.prize}</p>
              </div>
            </div>
          </div>
          <ModalYesNo
            msjModal={`Desa borrar ${data.name}`}
            msjButton={
              // eslint-disable-next-line react/jsx-pascal-case
              <Icon.delet
                className='text-gray-800 items-center'
                style={{
                  width: '100%',
                  height: '100%',
                  margin: 'auto',
                  scale: '.5',
                }}
              />
            }
            red
            acept={handlerAcept}
            classM='w-full h-full  flex justify-center items-center'
          />
          {/* <Button
            className='flex justify-center items-center'
            onClick={() => delProductMenu(data.id)}
          >
            <Icon.delet
              className='text-rose-700'
              style={{ width: '50px', height: '50px' }}
            />
          </Button> */}
        </div>
      </div>
    </>
  );
}
