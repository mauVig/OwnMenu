import CreateMenu from '../components/createMenu/CreateMenu';
import NameMenu from '../components/createMenu/NameMenu';
import ModalYesNo from '../components/tools/ModalYesNo';
export default function MenuEditor() {
  return (
    <>
      <div>
        <div className='px-4 xl:px-0'>
          <div className='max-w-7xl mx-auto text-center'>
            <div className='pt-4'>
              <h1 className='text-4xl mb-8'>Crear menu</h1>
              <div className='flex justify-center'>
                <p className='w-48'>
                  Aca podes agregar tus productos a tu menu.
                </p>
              </div>
              <NameMenu />
            </div>
            <ModalYesNo
              st={{ background: '#fb923c' }}
              msjModal='Desea guardar el menu?'
              msjButton='Guardar'
              // acept={() => go('/createEditor')}
            />
            <CreateMenu />
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <ModalYesNo
  st={{ background: '#fb923c' }}
  msjModal='Desea guardar el menu?'
  msjButton='Guardar'
  acept={() => go('/createEditor')}
/> */
}
