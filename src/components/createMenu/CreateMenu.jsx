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
        className='my-8 bg-orange-400 px-24 py-4 text-gray-800 rounded-lg hover:bg-orange-300 w-2/3'
      >
        <GrAdd />
      </Button>
      {allMenu.map((menu) => (
        <CreateCard data={menu} key={menu.id} yesEdit />
      ))}
    </>
  );
}
