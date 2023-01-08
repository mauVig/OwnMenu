import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UseAuthContext } from './context/googleContext';
import Home from './pages/Home';
import Header from './components/header/Header';
import MyDesk from './pages/MyDesk';
import MenuEditor from './pages/CreateEditor';
import AddProductStep1 from './pages/AddProductStep1'
import AddProductStep2 from './pages/AddProductStep2'
import AddProductStep3 from './pages/AddProductStep3';
import FinalProductStep from './pages/FinalProductStep'
function App() {
  const { googleLogOut } = UseAuthContext();
  
  useEffect(() => {
    googleLogOut()
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createEditor' element={<MenuEditor />} />
        <Route path='/createEditor/addProductStep1' element={<AddProductStep1 />} />
        <Route path='/createEditor/addProductStep2' element={<AddProductStep2 />} />
        <Route path='/createEditor/addProductStep3' element={<AddProductStep3 />} />
        <Route path='/createEditor/finalProductStep' element={<FinalProductStep />} />
        <Route path='/myDesk' element={<MyDesk />} />
      </Routes>
    </>
  );
}

export default App;
