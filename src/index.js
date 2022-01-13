import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from "./styles/global";

import { ModalProvider } from "./providers/ModalProvider";
import { AuthProvider } from "./providers/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ModalProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);