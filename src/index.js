import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';
import { AuthContextProvider } from './context/auth';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <ToastContainer />
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);

