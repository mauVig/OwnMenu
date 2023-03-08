/* eslint-disable react/jsx-pascal-case */
import { Button } from '@mui/material';
import { GrAdd } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import CreateCard from './CreateCard';
import { UseContextMenu } from '../../context/CreateMenuContext';

export default function CreateMenu() {
  const { allMenu } = UseContextMenu();
  const go = useNavigate();
  const handlerAdd = () => {
    localStorage.removeItem('step1');
    localStorage.removeItem('step2');
    localStorage.removeItem('step3');
    go('/createEditor/addProductStep1');
  };

  return (
    <>
      <Button
        onClick={handlerAdd}
        className='bg-orange-400 md:w-1/2 px-24 hover:bg-orange-300 text-neutral-800 rounded-lg transition-all duration-100 py-3 mx-auto truncate'
      >
        <GrAdd className='mb-1 mr-1' />
        Agregar producto
      </Button>
      {allMenu.map((menu) => (
        <CreateCard data={menu} key={menu.id} yesEdit />
      ))}
    </>
  );
}
