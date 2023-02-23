import BodyStartMenu from '../components/startMenu/BodyStartMenu';
import SearchProduct from '../components/startMenu/SearchProduct';
import {CreateMenuProvider} from '../context/StartMenuContext'
export default function StartMenu() {
  return (
    <>
      <div className='px-4 xl:px-0'>
        <div className='max-w-4xl mx-auto text-center'>
          <CreateMenuProvider>
            <SearchProduct />
            <BodyStartMenu />
          </CreateMenuProvider>
        </div>
      </div>
    </>
  );
}
