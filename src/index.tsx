import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./app/App";

const el = document.getElementById('root')
if (el === null) {
    throw Error('Not found element id=root')
}
const root = ReactDOM.createRoot(el);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
