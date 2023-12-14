import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Dataprovider from './Component/Context/Dataprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Dataprovider>
   <React.StrictMode>
    <App />
  </React.StrictMode>
 </Dataprovider>
);


