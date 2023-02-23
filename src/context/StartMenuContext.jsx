import { useContext, createContext, useState } from 'react';

export const CreateStart = createContext();

export const CreateMenuProvider = ({ children }) => {
  const [valueSelect, setValueSelect] = useState({});
  const [arrProducts, setArrProducts] = useState([]);
  
  const addProducts = () => {
    
  }
  return (
    <CreateStart.Provider
      value={{
        valueSelect,
      }}
    >
      {children}
    </CreateStart.Provider>
  );
};

export const UseContextStart = () => {
  return useContext(CreateStart);
};
