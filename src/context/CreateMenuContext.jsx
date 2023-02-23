import { useContext, createContext, useState } from 'react';
import { coffe, coffe2, coffeCold, plateMeal } from '../components/svgIcons.js';

export const CreateMenu = createContext();

export const CreateMenuProvider = ({ children }) => {
  const [labelsC, setLabelsC] = useState(conLabels);
  const [allMenu, setAllMenu] = useState([]);
  // const [productMenu, setProductMenu] = useState();  

  const getLabel = (id) => {
    const auxId = parseInt(id);
    const text = conLabels.filter((label) => label.id === auxId);
    return text[0].name;
  };

  const getAllLabels = () => {
    console.log(labelsC, '--labelsC');
    return labelsC;
  };

  const addLabels = (text) => {
    const id = new Date().getTime();
    setLabelsC([...labelsC, { id, name: text }]);
  };

  const getSvg = (id) => {
    const auxId = parseInt(id);
    const svg = iconsSvg.filter((icon) => icon.id === auxId);
    return svg;
  };
  // CRUD de menu

  const addProductMenu = (obj) => {
    setAllMenu([...allMenu, obj]);
  };

  // CRUD de menu

  return (
    <CreateMenu.Provider
      value={{
        getLabel,
        getSvg,
        getAllLabels,
        allMenu,
        addProductMenu,
        addLabels,
        labelsC,
      }}
    >
      {children}
    </CreateMenu.Provider>
  );
};

export const UseContextMenu = () => {
  return useContext(CreateMenu);
};

export const iconsSvg = [
  { id: 1, svg: coffe },
  { id: 2, svg: coffe2 },
  { id: 3, svg: coffeCold },
  { id: 4, svg: plateMeal },
];
const conLabels = [
  {
    id: 1,
    name: 'Comida fria',
  },
  {
    id: 2,
    name: 'Comida caliente',
  },
  {
    id: 3,
    name: 'Gaseosa',
  },
  {
    id: 4,
    name: 'Comida fria',
  },
  {
    id: 5,
    name: 'Agua',
  },
  {
    id: 7,
    name: 'Cafe Caliente',
  },
  {
    id: 8,
    name: 'Cafe Frio',
  },
  {
    id: 9,
    name: 'Brwunie',
  },
];
