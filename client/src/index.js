import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import { StoreProvider } from './Store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
)