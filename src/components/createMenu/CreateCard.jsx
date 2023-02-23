import { Button } from '@mui/material';
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
const Icon = {
  edit: FiEdit,
};

export default function CreateCard({ data, yesEdit }) {
  const go = useNavigate();

  const handlerEdit = () => {
    if (yesEdit) {
      const ibjStep1 = {
        id: data.id,
        name: data.name,
        prize: parseFloat(data.prize),
        // cost:  parseFloat(data.cost),
      };
      localStorage.setItem('step1', JSON.stringify(ibjStep1));
      go('/createEditor/addProductStep1');
    }
  };
  return (
    <>
      <div className='max-w-4xl mx-auto bg-white drop-shadow-md'>
        <div className='grid grid-cols-3 py-1 my-4 border-2'>
          <div className='flex justify-center'>
            <data.svg className='w-28 my-1' />
          </div>
          <div className='drop-shadow-xl'>
            <h2 className='text-2xl'>{data.name}</h2>
            <p className='inline-block bg-red-200 px-2 rounded-lg text-sm'>
              {data.label}
            </p>
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
          <Button
            className='flex justify-center items-center'
            onClick={handlerEdit}
          >
            <Icon.edit
              className='text-rose-700'
              style={{ width: '50px', height: '50px' }}
            />
          </Button>
        </div>
      </div>
    </>
  );
}
