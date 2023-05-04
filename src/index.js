import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.scss';
import MediaContextProvider from './Context/MediaStore.js';
import AuthContextProvider from './Context/AuthStore.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <MediaContextProvider>
       <App />
    </MediaContextProvider>
    </AuthContextProvider>
   
  </React.StrictMode>
);

reportWebVitals();
