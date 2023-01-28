import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ChooseMenu() {
  const go = useNavigate();

  return (
    <>
      <div className=' px-4 xl:px-0'>
        <h2 className='text-center text-2xl'>Eleji el menu </h2>
        <div className='flex justify-center '>
          <div className='grid gap-4 mt-4 '>
            {menus.map((menu) => (
              <Button
                key={menu.id}
                variant='outlined'
                className='px-20'
                size='large'
                onClick={() => go(`${menu.href}`)}
              >
                {menu.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const menus = [
  { id: 1, name: 'Menu1', href: '/startMenu' },
  { id: 2, name: 'cafecito', href: '/startMenu' },
];
