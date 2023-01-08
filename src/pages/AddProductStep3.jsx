import IconSolo from './IconSolo';
import { iconsSvg } from '../context/CreateMenuContext';
import { Button } from '@mui/material';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function AddProductStep3() {
  const go = useNavigate();

  return (
    <>
      <div className='px-4 xl:px-0'>
        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='my-16'>Elige un icono</h2>
          <div className='flex flex-wrap'>
            {iconsSvg.map((icon) => (
              <IconSolo id={icon.id} Svg={icon.svg} key={icon.id} />
            ))}
          </div>
          <Button
            startIcon={<BsArrowLeftShort />}
            className='text-gray-800 mt-10'
            onClick={() => go('/createEditor/addProductStep2')}
          >
            Volver
          </Button>
        </div>
      </div>
    </>
  );
}
