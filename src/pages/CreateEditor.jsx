import CreateMenu from '../components/createMenu/CreateMenu';
import NameMenu from '../components/createMenu/NameMenu';
import ModalYesNo from '../components/tools/ModalYesNo';
export default function CreateEditor() {
  return (
    <>
      <div>
        <div className='px-4 xl:px-0'>
          <div className='max-w-7xl mx-auto text-center'>
            <div className='pt-4'>
              <h1 className='text-4xl mb-8'>Crear menu</h1>
              <div className='flex justify-center min-w-min'>
                <p className='w-48'>
                  Aca podes agregar tus productos a tu menu.
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-6 mt-4'>
              <NameMenu />
              <ModalYesNo
                classM='bg-rose-600 w-1/2 px-24 text-gray-100 rounded-lg hover:bg-rose-500 transition-all duration-100 py-3 mx-auto col-start-2'
                msjModal='Desea guardar el menu?'
                msjButton='Guardar'
                red
                // acept={() => go('/createEditor')}
              />
              <CreateMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
