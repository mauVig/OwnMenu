import { Button } from '@mui/material';
import { BsArrowLeftShort } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import CreateCard from '../components/createMenu/CreateCard';
import { UseContextMenu } from '../context/CreateMenuContext';
import { useNavigate } from 'react-router-dom';

export default function FinalProductStep() {
  const { getLabel, getSvg, addProductMenu } = UseContextMenu();
  const step1 = JSON.parse(localStorage.getItem('step1'));
  const step2 = localStorage.getItem('step2');
  const label = getLabel(step2);
  const step3 = localStorage.getItem('step3');
  const svg = getSvg(step3);
  const go = useNavigate();

  const objFinal = {
    ...step1,
    cost: parseInt(step1.cost),
    label,
    svg: svg[0].svg,
    labelId:step2,
    svgId:step3
  };

  const handlerSubmit = () => {
    addProductMenu(objFinal)
    localStorage.removeItem('step1')
    localStorage.removeItem('step2')
    localStorage.removeItem('step3')
    go('/createEditor')
  };
  return (
    <>
      <div className='px-4 xl:px-0'>
        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='my-16 text-3xl'>Verifique los datos</h2>
          <CreateCard data={objFinal} />
          <div className='flex flex-col items-center mt-16'>
            <Button
              endIcon={<AiOutlineCheck />}
              className='my-4 bg-green-400 hover:bg-green-300 px-24 py-4 text-green-800 rounded-lg  w-2/3 lg:1/3 truncate'
              onClick={handlerSubmit}
            >
              Confirmar producto
            </Button>
            <Button
              startIcon={<BsArrowLeftShort />}
              className='text-gray-800 mt-10'
              onClick={() => go('/createEditor/addProductStep3')}
            >
              Volver
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

// titulo,precio,costo
// Etiqueta,icono
