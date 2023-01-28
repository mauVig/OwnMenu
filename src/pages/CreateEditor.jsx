import CreateMenu from '../components/createMenu/CreateMenu';
import NameMenu from '../components/createMenu/NameMenu';

//BiBeer
// GiMeal
export default function MenuEditor() {
  return (
    <>
      <div>
        <div className='px-4 xl:px-0'>
          <div className='max-w-7xl mx-auto text-center'>
            <div className='pt-4'>
              <h1 className='text-4xl mb-8'>Crear menu</h1>
              <div className='flex justify-center'>
                <p className='w-80 text-center'>
                  Aca podes agregar tus comidas, bebidas o postres a tu menu.
                </p>
              </div>
              <NameMenu />
            </div>
            <CreateMenu />
          </div>
        </div>
      </div>
    </>
  );
}
