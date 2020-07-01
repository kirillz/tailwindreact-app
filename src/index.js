import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css'; //Это после компиляции файл, наш код рядом в index.css

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
