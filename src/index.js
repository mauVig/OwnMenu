import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleContextProvider } from './context/googleContext';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import {CreateMenuProvider} from './context/CreateMenuContext'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleContextProvider>
        <CreateMenuProvider>
          <StyledEngineProvider injectFirst>
            <App />
          </StyledEngineProvider>
        </CreateMenuProvider>
      </GoogleContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
