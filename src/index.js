import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { useState } from 'react';


//создать корень React для отображения содержимого внутри элемента DOM браузера
const domNode  = document.getElementById('root')
const root = ReactDOM.createRoot(domNode);
root.render(
    <App />
);














//старая версия
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )